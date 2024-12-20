const express = require('express');
require('dotenv').config();
const { ObjectId } = require('mongodb');
const cors = require("cors");
var jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;;
// middleware start
app.use(cors(
  {
    origin:"http://localhost:5173",
    optionsSuccessStatus:200
  }
));
app.use(express.json());
// jwt middleware
// const jwtVerify = (req,res,next) => {
//   const authorization = req.header.authorization;
//   if(!authorization){
//     return res.send({message:'no token'})
//   }
//   const token = authorization.split(' ')[1];
//   jwt.verify(token,process.env.SECRET_TOKEN_KEY,(err,decoded) => {
//     if(err){
//       return res.send({message:"invalid token"});
//     }
//     req.decoded = decoded;
//     next();
//   })
// }

// seller middleware
// const sellerVerify = async(req,res,next) => {
//   const email = req.decoded.email;
//   const query = {email:email}
//   const user = await userCollection.findOne(query);
//   if (user?.role !== "seller") {
//     return res.send({message:"forbidden access"})
//   }
//   next();
// }
// middleware end

const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@anik.34iapyi.mongodb.net/?retryWrites=true&w=majority&appName=Anik`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const userCollection = client.db("bookshop").collection("users");
const productCollection = client.db("bookshop").collection("products");
const cartCollection = client.db("bookshop").collection("carts");

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(" connected to MongoDB!");
  } 
  catch(error) {
    console.log(error)
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('BOOKSHOP SERVER IS READY')
})

// Genarate jwt token 
app.post('/jsonwebtoken',async(req,res) => {
  try{
    const userEmail = req.body;
    if(userEmail){
     const token = jwt.sign({userEmail},process.env.SECRET_TOKEN_KEY,{expiresIn:"10d"});
      res.send({token})
    }
  }
  catch(err){
    res.send({error:err})
  }
})
// post request for single users
app.post('/users',async(req,res) => {
  try{
    const usersData = req.body;
    const query = {email:usersData.email};
    const existingUser = await userCollection.findOne(query);
    if(existingUser){
      return res.send({message:"user already store in db"})
    }
    else{
      const result = await userCollection.insertOne(usersData);
      res.send(result);
    }
  }
  catch(err){res.send({error:"internal server error"})}
})

// for seller route
// todo:add product for seller post route
// app.post("/seller/addproduct", jwtVerify,sellerVerify, async(req,res) => {
//   try{
//     const addProductData = req.body;
//     const result = await productCollection.insertOne(addProductData);
//     res.send(result); 
//   }
//   catch(err){res.send({message:"internal server error"})}
// })
// get all users route
app.get('/allUsers',async(req,res) => {
  try{
    const result = await userCollection.find().toArray();
    res.send(result);
  }
  catch(err){
    res.send({message:"internal server error"})
  }
})
// get user by email route
app.get("/logedInUser/:email", async(req,res) => {
  try{
    const email = req.params.email;
    const result = await userCollection.findOne({email:email});
    if(result){

     return res.send(result);
    } else {
      return res.status(404).send({ message: "User not found" });
    }
  }
  catch(err){res.send({message:"internal server error"})}
})

// delete user by admin
app.delete('/deleteUser/:id',async(req,res) => {
  try{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await userCollection.deleteOne(query);
    if(result.deletedCount === 0){
      return res.status(400).send({message:"user not found"})
    }
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})

// update user role route
app.put('/updateUser/:role', async(req,res) => {
  try{
    const role = req.params.role;
    let newRole;
    if(role === 'buyer'){
      newRole = 'seller';
    }
    else if(role === 'seller'){
      newRole = 'admin'
    }
    else{
      return res.send({message:"invalid role provided"})
    }
    const filter = {role: role};
    const updateDoc = {
      $set: {
        role: newRole
      },
    };
    const result = await userCollection.updateOne(filter,updateDoc)
    if(result.matchedCount === 0){
      res.send({message:"no role matched"})
    }
    res.send(result)
  }
  catch(err){res.send({message:"internal server error"})}
}) 
// seller route here:
app.post('/addSellerProduct',async(req,res) => {
  try{
    const addProductData = req.body;
    const result = await productCollection.insertOne(addProductData);
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})
// get all product
app.get('/allFeatureProduct',async(req,res) => {
  try{
    const result = await productCollection.find().toArray();
    res.send(result);
  }
  catch(err){res.send({message:"internal server error"})}
})
// get all product by filtering: 
app.get('/product/search',async(req,res) => {
  try {
    const { category, searchText, sorting,brand } = req.query;
    console.log(category,searchText);
    const filter = {};

    if (category) {
        filter.category = category;
    }
    if (brand) {
        filter.brand = brand;
    }
    if (searchText) {
        filter.bookName = { $regex: searchText, $options: "i" };
    }
    let sortCriteria = {};
    switch (sorting) {
        case 'lowToHigh':
            sortCriteria = { price: 1 };
            break;
        case 'highToLow':
            sortCriteria = { price: -1 };
            break;
        default:
            sortCriteria = {};
    }
    const result = await productCollection.find(filter).sort(sortCriteria).toArray();
    res.send(result);
} 
catch (err) {
    res.send({message:"internal server error"}) 
    }
})
// get product by email:
app.get('/getProductByEmail/:email', async(req,res) => {
  try{
      const email = req.params.email;
      const query = {sellerEmail: email};
      const result = await productCollection.find(query).toArray();
      res.send(result)
  }
  catch(err){res.send({message:"internal server error"})}
})
// get signle product:
app.get('/getSingleProduct/:id',async(req,res) => {
  try{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await productCollection.findOne(query);
    res.send(result)
  }
  catch(err){res.send({message:"internal server error"})}
})
// update product Data:
app.put('/updateProducts/:id', async(req,res) => {
  try{
    const id = req.params.id;
    const updateData = req.body;
    console.log(id,updateData);
    const filter = {_id: new ObjectId(id)};
    const updateDoc = {$set: updateData};
    const result = await productCollection.updateOne(filter,updateDoc);
    res.send(result)
    
  }
  catch(err){res.send({message:"internal server error"})}
})
// delete single product:
app.delete('/deleteProduct/:id',async(req,res) => {
  try{
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const result = await productCollection.deleteOne(query);
    res.send(result);
  }
  catch(err){res.send({message:"internal server error:"})}
})

// add to cart product all route here:
app.post('/addToCartData',async(req,res) => {
  try{
    const cartData = req.body;
    const result = await cartCollection.insertOne(cartData);
    res.send(result)
  }
  catch(err){res.send({message:"internal server error"})}
})
// get cart data by email:
app.get('/getCartDataByEmail/:email',async(req,res) => {
  try{
    const email = req.params.email;
    const query = {email: email};
    const result = await cartCollection.find(query).toArray();
    res.send(result)
  }
  catch(err){res.send({message:"internal server error"})}
})
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})