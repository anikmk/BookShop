import { useNavigate, } from "react-router"
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';
import { postUserData } from "../../Api/userApi";
// import useAxios from "../(hook)/useAxios";

 const SignUp = () => {
//   const axiosInstance = useAxios();
    const {signinUser} = useAuth();
    const navigate = useNavigate();
    const handleSignIn = async(e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const role = form.role.value;
        const status = role === "buyer" ? "aproved" : "pending";
        const wishlist = [];
        const userData = {email,role,status,wishlist}
        // Step-by-step validation
          // if (password.length < 8) {
          //   return toast.error('Password must be at least 8 characters long.');
          // }

          // if (!/[a-z]/.test(password)) {
          //   return toast.error('Password must include at least one lowercase letter.');
          // }

          // if (!/[A-Z]/.test(password)) {
          //   return toast.error('Password must include at least one uppercase letter.');
          // }

          // if (!/\d/.test(password)) {
          //   return toast.error('Password must include at least one number.');
          // }

          // if (!/[@$!%*?&]/.test(password)) {
          //   return toast.error('Password must include at least one special character (e.g., @, $, !, etc.).');
          // }

        try{
            const user = await signinUser(email,password)
            if(user){
             const result =  await postUserData(userData)
             if(result?.insertedId){
              toast.success("Register succesfully!");
              navigate('/')
            }
          }
           
        }
        catch(err){console.log(err);}
    }

  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSignIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <select name="role" className="select select-bordered w-full max-w-xs">
        <option disabled selected>Role</option>
        <option value={'buyer'}>Buyer</option>
        <option value={'seller'}>Seller</option>
        </select>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div>
            have an account? <Link to={'/signIn'}>Login</Link>
        </div>
        <div className="divider">OR</div>
       <div className="flex items-center justify-center gap-4 cursor-pointer text-lg">
        <FcGoogle /> Google
       </div>
      </form>
    </div>
  </div>

  )
}
export default SignUp;