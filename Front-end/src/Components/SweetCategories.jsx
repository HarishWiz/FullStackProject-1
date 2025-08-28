const SweetCategories = () => {
  const sweetCategories = [
    {
      title: "Traditional Sweets",
      items: 45,
      image: "/assets/sweetcategory1.jpg",
    },
    {
      title: "Dry Fruit Sweets",
      items: 28,
      image: "/assets/sweetcategory2.webp",
    },
    {
      title: "Sugar-Free Options",
      items: 15,
      image: "/assets/sweetcategory3.webp",
    },
    {
      title: "Festive Specials",
      items: 32,
      image: "/assets/sweetcategory4.jpg",
    },
    {
      title: "Fresh Cakes",
      items: 22,
      image: "/assets/sweetcategory5.jpg",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-16">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blackprimary mb-2">
          Sweet Categories
        </h1>
        <p className="text-base sm:text-lg text-blacksecondary">
          Discover our wide range of traditional and modern sweets
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 w-full">
          {sweetCategories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2 border border-border hover:shadow-md p-4 sm:p-5 rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full"
              />
              <h1 className="text-sm sm:text-base font-semibold text-blackprimary text-center">
                {category.title}
              </h1>
              <p className="text-xs sm:text-sm text-blacksecondary text-center">
                {category.items} items
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SweetCategories;
