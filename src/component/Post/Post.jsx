import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, body } = post;

  const navigate = useNavigate();
  const handleShowDetails = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div className="border-2 rounded-xl p-6 border-blue-600">
      <h1>Id: {id}</h1>
      <h1>Title: {title}</h1>
      <h1>Details: {body}</h1>
      <div className="flex flex-row gap-4">
        <Link
          className="btn text-xl font-bold hover:bg-slate-400 hover:text-white"
          to={`/post/${id}`}
        >
          Show Details
        </Link>
        <button
          className="btn text-xl font-bold hover:bg-slate-400 hover:text-white"
          onClick={handleShowDetails}
        >
          Click to show details
        </button>
      </div>
    </div>
  );
};

export default Post;
