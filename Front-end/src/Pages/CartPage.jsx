import { IoTrashOutline } from "react-icons/io5";
const CartPage = () => {
  return (
    <div className="w-full h-full px-4 md:px-10 py-16">
      <h1 className="text-3xl  text-blackprimary font-semibold">
        Shopping Cart
      </h1>
      <div className="w-full flex items-center justify-between gap-10 my-10">
        <div className="w-[60%] border border-border rounded-md space-y-3 shadow-md p-7 flex items-start flex-col">
          <h1 className="text-xl font-semibold ">Your Items (2)</h1>
          <div className="border w-full border-border p-5 flex items-center justify-between rounded-md">
            <div className="flex items-center space-x-4">
              <img
                src="/assets/default.png"
                alt="/"
                className="size-20 rounded-md"
              />
              <div className="flex flex-col items-start space-y-1">
                <h1 className="text-lg text-blackprimary font-medium ">
                  Sugar-Free Besan Laddu
                </h1>
                <span className="text-sm text-blacksecondary">500g</span>
                <p className="text-xl font-semibold text-blackprimary">₹280</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <button className="text-xl font-medium hover:bg-gray-100 cursor-pointer text-blackprimary border border-border px-3 py-1 rounded-md">
                -
              </button>
              <span className="text-blackprimary font-medium text-lg">1</span>
              <button className="text-xl font-medium hover:bg-gray-100 cursor-pointer text-blackprimary border border-border px-3 py-1 rounded-md">
                +
              </button>
              <button className="px-3 py-1.5 text-lg rounded-md hover:border border-border hover:bg-gray-100 ">
                <IoTrashOutline className="text-red-600 " />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[40%] bg-amber-400">
          <h1>hello</h1>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
