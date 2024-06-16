import UserIcon from "@/icons/UserIcon";
import { BsInstagram } from "react-icons/bs";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaFacebook, FaPhone } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const ContactUs = () => {
  return (
    <div className="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-6 font-[sans-serif]">
      <div className="text-center px-6">
        <h2 className="text-gray-800 text-3xl font-extrabold">Contact Us</h2>
        <p className="text-sm text-gray-500 mt-4">
          Have some big idea or brand to develop and need help?
        </p>
      </div>

      <div className="grid lg:grid-cols-3 items-start gap-4 p-2 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg mt-12">
        <div className="bg-primary rounded-lg p-6 h-full max-lg:order-1">
          <h2 className="text-xl text-white">Contact Information</h2>
          <p className="text-sm text-gray-300 mt-4">
            Have some big idea or brand to develop and need help?
          </p>

          <ul className="mt-16 space-y-8 text-white">
            <li className="flex items-center">
              <CiMail className="text-[20px]" />
              <a href="/" className="text-sm ml-4">
                info@example.com
              </a>
            </li>
            <li className="flex items-center">
              <IoCallOutline className="text-[20px]" />
              <a href="/" className="text-sm ml-4">
                +8880 1234567890
              </a>
            </li>
            <li className="flex items-center">
              <CiLocationOn className="text-[20px]" />
              <a href="/" className="text-sm ml-4">
                Dahak,BD
              </a>
            </li>
          </ul>

          <ul className="flex flex-wrap gap-4 mt-16">
            <li className="bg-primaryRd hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="/" className="text-white text-[20px]">
                <FaFacebook />
              </a>
            </li>

            <li className="bg-primaryRd hover:bg-gray-900 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
              <a href="/" className="text-white text-[20px]">
                <BsInstagram />
              </a>
            </li>
          </ul>
        </div>

        <div className="p-4 lg:col-span-2">
          <form>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="First Name"
                  className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                />
                <UserIcon />
              </div>

              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="px-2 py-3 bg-white w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-500 outline-none"
                />
                <UserIcon />
              </div>

              <div className="relative flex items-center">
                <input
                  type="number"
                  placeholder="Phone No."
                  className="px-2 py-3 bg-white text-black w-full text-sm border-b border-gray-300 focus:border-blue-500 outline-none"
                />
                <FaPhone className="text-[#b5b5b5]" />
              </div>

              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-2 py-3 bg-white text-black w-full text-sm border-b border-gray-300 focus:border-blue-500 outline-none"
                />
                <CiMail className="text-[#b5b5b5]" />
              </div>

              <div className="relative flex items-center sm:col-span-2">
                <textarea
                  placeholder="Write Message"
                  className="px-2 pt-3 bg-white text-black w-full text-sm  border-b border-gray-300 focus:border-blue-500 outline-none min-h-[100px]"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g
                    clip-path="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      stroke-miterlimit="10"
                      stroke-width="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>

            <button
              type="button"
              className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded-lg px-4 py-3 tracking-wide text-white bg-primaryRd"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fill-rule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clip-rule="evenodd"
                  data-original="#000000"
                />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
