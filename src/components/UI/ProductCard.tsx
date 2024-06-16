import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden shrink-0 cursor-pointer">
      <Image
        src={"/images/product.avif"}
        alt={"title"}
        width={492}
        height={192}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            stock ready
          </span>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            official store
          </span>
        </div>
        <h2 className="text-lg font-semibold mb-2">{"new arival product"}</h2>
        <p className="text-xl font-bold mb-2">
          $1200
          <span className="bg-green-100 text-green-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded">
            SAVE 600
          </span>
        </p>
        <p className="text-sm text-gray-500 line-through">$1800</p>

        <div className="flex items-center mt-2 mb-4">
          <div className="flex items-center text-yellow-400">
            {[...Array(4)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27l5.18 3.73-1.64-5.81L20 9.24l-6-.52L12 3 10 8.72l-6 .52 4.46 5.95-1.64 5.81z" />
              </svg>
            ))}
            <svg
              className="w-4 h-4 fill-current text-gray-300"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27l5.18 3.73-1.64-5.81L20 9.24l-6-.52L12 3 10 8.72l-6 .52 4.46 5.95-1.64 5.81z" />
            </svg>
          </div>
          <p className="ml-2 text-sm text-gray-600">{"40"} reviews</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-primaryRd text-white px-4 py-2 rounded">
            Add to cart
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
