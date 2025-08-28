import RoutesPage from "./Pages/RoutesPage";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { LoaderProvider } from "./Context/LoaderContext.jsx";
import { CategoryProvider } from "./Context/CategoryProvider.jsx";
import { ProductProvider } from "./Context/ProductProvider.jsx";
import { FilterProvider } from "./Context/FilterContext.jsx";
import Loader from "./Components/Loader.jsx";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
      <LoaderProvider>
        <AuthProvider>
          <CategoryProvider>
            <ProductProvider>
              <FilterProvider>
                <RoutesPage />
              </FilterProvider>
            </ProductProvider>
          </CategoryProvider>
        </AuthProvider>
        <ToastContainer />
        <Loader />
      </LoaderProvider>
    </div>
  );
};

export default App;
