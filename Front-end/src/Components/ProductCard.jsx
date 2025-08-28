import { FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";

const ProductCard = ({
  _id,
  name,
  description,
  category,
  ingredients,
  isAvailable,
  image,
  price,
  discount = 0,
  rating,
  reviews,
  type,
}) => {
  // console.log(ingredients);
  return (
    <div
      key={_id}
      className="group flex flex-col items-start border border-border rounded-md w-full max-w-xs hover:shadow-lg transition duration-300"
    >
      <div className="relative w-full">
        <img
          src={image}
          alt={name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/assets/default.png";
          }}
          className="w-full h-60 object-cover rounded-t-md"
        />

        {/* Top Left - type */}
        <div className="absolute top-2 left-2">
          <p className="px-2 py-0.5 rounded-full bg-primary text-white text-xs capitalize">
            {type}
          </p>
        </div>

        {/* Top Right - Heart (on hover) */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition">
          <button className="p-2 bg-border cursor-pointer rounded shadow-md hover:text-red-500 transition">
            <FiHeart className="size-4" />
          </button>
        </div>

        {/* Bottom Center - Discount Label */}
        {discount > 0 && (
          <div className="absolute bottom-3 left-3  bg-red-500 text-white text-xs px-3 py-0.5 rounded-full">
            {discount} % OFF
          </div>
        )}
      </div>

      <div className="py-6 px-3 w-full space-y-2 bg-white rounded-b-md">
        <h1 className="text-lg font-medium text-blackprimary">{name}</h1>
        <div className="overflow-hidden whitespace-nowrap text-ellipsis text-blacksecondary w-full text-xs">
          <span className="text-red-500">Ingredients: </span>
          {ingredients.join(", ")}
        </div>

        <div className="flex items-center space-x-3">
          {reviews.length > 0 && (
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-yellow-400 ${
                    i >= Math.round(rating) ? "opacity-30" : ""
                  }`}
                />
              ))}
            </div>
          )}
          {reviews.length > 0 ? (
            <p className="text-sm text-blacksecondary">
              {rating} ({reviews.length})
            </p>
          ) : (
            <p className="text-sm to-blacksecondary">No Reviews</p>
          )}
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            {discount ? (
              <>
                <p className="text-lg font-semibold text-blackprimary">
                  ₹{price - Math.round((price * discount) / 100)}
                </p>
                <p className="text-sm line-through font-md text-blacksecondary">
                  ₹{price}
                </p>
              </>
            ) : (
              <p className="text-lg font-semibold text-blackprimary">
                ₹{price}
              </p>
            )}
          </div>

          <button className="px-4 py-2 bg-primary text-white flex items-center space-x-2 rounded-md hover:bg-amber-700 transition duration-200">
            <FiShoppingCart className="size-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
