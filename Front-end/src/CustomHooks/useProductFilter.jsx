import { useMemo } from "react";

const useProductFilter = (products, filters = {}) => {
  const { category, priceRange, sortBy, searchQuery } = filters;

  //   Helper function to parse price range
  const parsePriceRange = (range) => {
    if (!range || range === "All Prices") return null;
    if (range === "₹0 - ₹100") return { min: 0, max: 100 };
    if (range === "₹100 - ₹500") return { min: 100, max: 500 };
    if (range === "₹500+") return { min: 500, max: Infinity };
    return null;
  };

  // Filter and Sort Products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by Category
    if (category && category !== "All Categories") {
      result = result.filter(
        (product) =>
          product.category?.name.toLowerCase() === category.toLowerCase()
      );
    }

    //   Filter by price range
    const priceFilter = parsePriceRange(priceRange);
    if (priceFilter) {
      result = result.filter((product) => {
        const priceAfterDiscount =
          product.discount > 0
            ? product.price -
              Math.round((product.price * product.discount) / 100)
            : product.price;
        return (
          priceAfterDiscount >= priceFilter.min &&
          priceAfterDiscount <= priceFilter.max
        );
      });
    }

    // Filter by search query
    if (searchQuery) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort Products
    if (sortBy) {
      result.sort((a, b) => {
        if (sortBy === "Newest") {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        if (sortBy === "Most Popular") {
          return (b.rating || 0) - (a.rating || 0);
        }
        if (sortBy === "Price: Low to High") {
          const priceA =
            a.discount > 0
              ? a.price - Math.round((a.price * a.discount) / 100)
              : a.price;
          const priceB =
            b.discount > 0
              ? b.price - Math.round((b.price - b.discount) / 100)
              : b.price;
          return priceA - priceB;
        }
        if (sortBy === "Price: High to Low") {
          const priceA =
            a.discount > 0
              ? a.price - Math.round((a.price * a.discount) / 100)
              : a.price;
          const priceB =
            b.discount > 0
              ? b.price - Math.round((b.price - b.discount) / 100)
              : b.price;
          return priceB - priceA;
        }
        return 0;
      });
    }
    return result;
  }, [products, category, sortBy, priceRange, searchQuery]);
  return filteredProducts;
};

export default useProductFilter;
