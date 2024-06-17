"use client";
import Image from "next/image";
import { useState } from "react";
const Page = () => {
  const images = [
    "/images/product.avif",
    "/images/product.jpg",
    // "/images/product.avif",
  ];
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="py-8">
      <div className="w-full">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[350px] lg:h-[460px] rounded-lg mb-4 relative">
              {images.map((img, i) => (
                <Image
                  key={"displayImg" + i}
                  src={img}
                  width={600}
                  height={350}
                  alt="display img"
                  className={`${
                    img === selected ? "opacity-[1]" : "opacity-0"
                  } absolute top-0 left-0 w-full duration-[0.5s] h-full object-cover`}
                />
              ))}
            </div>

            <div className="flex justify-start items-center w-full gap-[10px]">
              {images.map((img, i) => (
                <div
                  key={i + "image"}
                  className="w-[33%] h-[100px] cursor-pointer"
                >
                  <Image
                    onClick={() => setSelected(img)}
                    src={img}
                    alt="image"
                    width={200}
                    height={200}
                    className={`w-[100%] h-full object-cover ${
                      img === selected ? "opacity-[0.4]" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800  mb-2">
              Product Name
            </h2>
            <p className="text-gray-600  text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 ">Price:</span>
                <span className="text-gray-600 ">$29.99</span>
              </div>
              <div>
                <span className="font-bold text-gray-700 ">Availability:</span>
                <span className="text-gray-600 ">In Stock</span>
              </div>
            </div>

            <div className="mb-4">
              <span className="font-bold text-gray-700 ">Select Size:</span>
              <div className="flex items-center mt-2">
                <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                  S
                </button>
                <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                  M
                </button>
                <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                  L
                </button>
                <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                  XL
                </button>
                <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                  XXL
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-8  ">
              <div className="flex sm:items-center sm:justify-center w-full">
                <button className="group py-4 px-6 border border-gray-400 rounded-l-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                  <svg
                    className="stroke-gray-900 group-hover:stroke-black"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      stroke-opacity="0.2"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      stroke-opacity="0.2"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  className="font-semibold text-gray-900 cursor-pointer text-lg py-[13px] px-6 w-full sm:max-w-[118px] outline-0 border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50"
                  placeholder="1"
                />
                <button className="group py-4 px-6 border border-gray-400 rounded-r-full bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-300">
                  <svg
                    className="stroke-gray-900 group-hover:stroke-black"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke="#9CA3AF"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke="black"
                      stroke-opacity="0.2"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke="black"
                      stroke-opacity="0.2"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
              <button className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-100">
                <svg
                  className="stroke-indigo-600 "
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                    stroke=""
                    stroke-width="1.6"
                    stroke-linecap="round"
                  />
                </svg>
                Add to cart
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button className="group transition-all duration-500 p-4 rounded-full bg-indigo-50 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184M4.02307 13.9184L4.04407 13.939M4.02307 13.9184L4.46274 14.3115"
                    stroke="#4F46E5"
                    stroke-width="1.6"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="text-center w-full px-5 py-4 rounded-[100px] bg-indigo-600 flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <span className="font-bold text-gray-700 ">Product Description:</span>
        <p className="text-gray-600  text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante
          justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus
          commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue vel ipsum
          pretium, et venenatis sem blandit. Quisque ut erat vitae nisi ultrices
          placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
          sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec
          tincidunt mi consectetur.
        </p>
      </div>
    </div>
  );
};

export default Page;
