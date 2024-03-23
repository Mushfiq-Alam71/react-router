import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, username, email, phone } = user;
  return (
    <div className="border-2 rounded-xl p-6 border-yellow-400">
      <p>id: {id}</p>
      <p>Name: {name}</p>
      <p>username: {username}</p>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <Link
        className="btn text-xl font-bold hover:bg-slate-400 hover:text-white"
        to={`/user/${id}`}
      >
        Show Details
      </Link>
    </div>
  );
};

export default User;
