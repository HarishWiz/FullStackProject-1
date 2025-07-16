import { ClipLoader } from "react-spinners";
import { useLoader } from "../Context/LoaderContext";

const Loader = () => {
  const { loading } = useLoader();

  if (!loading) return null;
  return (
    <div
      className={`fixed inset-0 bg-black opacity-50 flex items-center justify-center z-50 ${
        loading ? "block" : "hidden"
      }`}
    >
      <ClipLoader color="#ffffff" size={50} />
    </div>
  );
};

export default Loader;
