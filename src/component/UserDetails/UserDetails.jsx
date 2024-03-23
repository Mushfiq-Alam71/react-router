import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { id, name, email, phone } = user;
  return (
    <div className="w-1/5 my-8 border-2 border-orange-600 p-6 flex flex-col rounded-xl">
      <h1 className="font-bold text-3xl">Details about users</h1>
      <p className="text-xl">Id: {id}</p>
      <p className="text-xl">Name: {name}</p>
      <p className="text-xl">Email: {email}</p>
      <p className="text-xl">Phone: {phone}</p>
    </div>
  );
};

export default UserDetails;
