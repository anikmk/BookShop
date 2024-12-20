import MyProductRow from "./MyProductRow";

const MyProduct = () => {
    return <>
     <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Index</th>
        <th>Book Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Brand</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    <MyProductRow />
    </tbody>
  </table>
        </div>
    </>
}
export default MyProduct;