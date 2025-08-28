import { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";
import { useLoader } from "./LoaderContext";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const {setLoading} = useLoader()

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}/categories`)
      .then((res) => {
        setCategories(res.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setCategories([])
        setLoading(false)
      });
  }, [setLoading]);
  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if(!context){
    throw new Error("useContext must be used within a CategoryProvider")
  }
  return context
}
