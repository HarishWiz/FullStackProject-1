import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-5">
      <h1 className="text-4xl font-semibold">
        <span className="text-red-500">404</span> Page Not Found
      </h1>
      <button className="px-6 py-2 rounded-md bg-amber-500 text-white cursor-pointer" onClick={()=>navigate("/")}>
        Home
      </button>
    </div>
  );
};

export default PageNotFound;
