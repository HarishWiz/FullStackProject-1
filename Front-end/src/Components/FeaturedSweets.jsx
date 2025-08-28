import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { useProduct } from "../Context/ProductProvider";
import { useCategory } from "../Context/CategoryProvider";
import useProductFilter from "../CustomHooks/useProductFilter";

const FeaturedSweets = () => {
  const { products } = useProduct();
  const filteredProducts = useProductFilter(products, {
    category: "Traditional",
  });

  return (
    <div className="w-full h-full px-4 sm:px-6 md:px-10 py-16 bg-gray-50 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl text-blackprimary font-bold mb-2">
          Featured Sweets
        </h1>
        <p className="text-base sm:text-lg text-blacksecondary">
          Our most loved and bestselling traditional sweets
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mt-10">
        {filteredProducts.length > 0 ? (
          filteredProducts
            .slice(0, 4)
            .map((product) => <ProductCard key={product._id} {...product} />)
        ) : (
          <p className="text-center text-blacksecondary col-span-full">No Traditional Sweets Available</p>
        )}
      </div>

      <Link
        to={"/products"}
        className="px-6 py-2 border border-primary text-primary rounded-md mt-10 hover:bg-primary hover:text-white transition-colors duration-300"
      >
        View All Products
      </Link>
    </div>
  );
};

export default FeaturedSweets;
