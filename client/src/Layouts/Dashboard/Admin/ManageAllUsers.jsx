import TableRow from "./TableRow";


const ManageAllUsers = () => {

    return <>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th>Update</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     <TableRow />
    </tbody>
  </table>
</div>
    </>
}
export default ManageAllUsers;