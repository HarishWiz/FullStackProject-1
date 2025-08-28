import { FiSearch } from "react-icons/fi";
import DropDown from "./DropDown";
import { useFilter } from "../Context/FilterContext";
import { useState } from "react";

const SearchandFilter = () => {
  const { filters, setFilters, categoryOptions } = useFilter();
  const [searchText,setSearchText] = useState(filters.searchQuery || "")
  const dropdowns = [
    {
      label: "Category",
      items: categoryOptions,
      selected: filters.category,
      onChange: (value) => setFilters({ ...filters, category: value }),
    },
    {
      label: "Price Range",
      items: ["All Prices", "₹0 - ₹100", "₹100 - ₹500", "₹500+"],
      selected: filters.priceRange,
      onChange: (value) => setFilters({ ...filters, priceRange: value }),
    },
    {
      label: "Sort By",
      items: [
        "None",
        "Newest",
        "Most Popular",
        "Price: Low to High",
        "Price: High to Low",
      ],
      selected: filters.sortBy || "None",
      onChange: (value) =>
        setFilters({ ...filters, sortBy: value === "None" ? null : value })
    },
  ];
  return (
    <div className="w-full h-full px-4 md:px-10 pt-10">
      <h1 className="text-3xl font-semibold text-blackprimary mb-3">
        Our Sweet Collection
      </h1>
      <p className="text-xl font-medium text-blacksecondary">
        Discover our wide range of traditional and modern sweets
      </p>
      <div className="bg-white w-full py-5  flex items-center space-x-3">
        <div className="flex items-center relative text-blacksecondary ">
          <FiSearch className="absolute left-3 size-4" />
          <input
            type="text"
            className="text-sm outline-none ps-10 py-2 rounded border border-border focus:ring-1 focus:ring-blackprimary"
            placeholder="Search Sweets..."
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-3">
          {dropdowns.map((config, index) => (
            <DropDown
              key={index}
              label={config.label}
              items={config.items}
              selectedItem={config.selected}
              onChange={config.onChange}
            />
          ))}
        </div>
        <button className="px-6 py-2 bg-primary text-white rounded-md cursor-pointer hover:bg-amber-600"
        onClick={()=>setFilters({...filters,searchQuery:searchText})}
        >
          Search
        </button>
        
      </div>
    </div>
  );
};

export default SearchandFilter;
