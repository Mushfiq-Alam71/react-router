import { useLoaderData } from "react-router-dom";
import User from "../../User/User";

const Users = () => {
  const users = useLoaderData(); //loader function call here
  // console.log(users);
  return (
    <div>
      <h1>Users: {users.length}</h1>
      <p>These are Users</p>
      <div className="grid grid-cols-3 gap-4 ">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
