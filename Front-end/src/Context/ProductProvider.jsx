import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useLoader } from "./LoaderContext";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { setLoading } = useLoader();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [setLoading]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if(!context){
    throw new Error("useProduct must be used within the ProductProvider")
  }
  return context
};
