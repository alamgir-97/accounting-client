import { useLoaderData } from "react-router";


const Users = () => {
    const loadedUsers = useLoaderData();
    return (
        <div className="w-11/12 mx-auto bg-white">
          
            <h1 className="text-center text-xl font-bold py-2 underline">User List</h1>
           <h1 className="text-right">Total Users: {loadedUsers.length}</h1>
           <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Created At</th>
        <th>Last Logged In</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
  
        {loadedUsers.map(user => <tr key={user._id}>
        <th>1</th>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td>{user.createdAt}</td>
        <td><button>X</button></td>
        </tr>)}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;