import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const { id, title, body } = post;
  return (
    <div className="w-1/5 my-8 border-2 border-green-600 p-6 flex flex-col rounded-xl">
      <h1>{id}</h1>
      <h1>{title}</h1>
      <h1>{body}</h1>
      <button
        className="btn text-xl font-bold hover:bg-slate-400 hover:text-white"
        onClick={handleGoBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
