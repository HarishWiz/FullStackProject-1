import { ClipLoader } from "react-spinners";
import { useLoader } from "../Context/LoaderContext";

// Component to display a loading spinner
const Loader = () => {
  const { loading } = useLoader();

  // Return null if not loading to avoid rendering
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black opacity-50 flex items-center justify-center z-50">
      <ClipLoader color="#ffffff" size={50} />
    </div>
  );
};

export default Loader;