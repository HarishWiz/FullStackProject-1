import { createContext, useContext, useState } from "react";
import { useCategory } from "./CategoryProvider";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "All Categories",
    priceRange: "All Prices",
    sortBy: null,
    searchQuery: "",
  });

  const { categories } = useCategory();

  // Generated Category Options dynamically from backend
  const categoryOptions = [
    "All Categories",
    ...categories.map((cat) => cat.name),
  ];

  return (
    <FilterContext.Provider value={{ filters, setFilters, categoryOptions }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("useFilter Must be used within a filter Provider");
  return context;
};
