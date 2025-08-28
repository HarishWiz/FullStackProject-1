import { useFilter } from "../Context/FilterContext";
import { useProduct } from "../Context/ProductProvider";
import useProductFilter from "../CustomHooks/useProductFilter";
import ProductCard from "./ProductCard";

const Products = () => {
  const { products } = useProduct();
  const { filters } = useFilter();
  const filteredProducts = useProductFilter(products, filters);
  return (
    <div className="w-full px-4 md:px-10 py-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))
      ) : (
        <p className="text-center text-blacksecondary col-span-full">No Products match your filters.</p>
      )}
    </div>
  );
};

export default Products;
