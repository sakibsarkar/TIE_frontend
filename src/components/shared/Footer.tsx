import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <Image
              src={"/images/logo.png"}
              alt="logo"
              width={120}
              height={60}
            />
          </a>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              Product
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="/">
                  Shoes
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/">
                  Watches
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/">
                  Lather Boot
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase dark:text-gray-900">
              Company
            </h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="/">
                  Privacy
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="/">
                  Terms of Service
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="uppercase dark:text-gray-900">Social media</div>
            <div className="flex justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center text-[25px]"
              >
                <FaFacebook />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center text-[25px]"
              >
                <FaFacebook />
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center text-[25px]"
              >
                <LuInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © {year} Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
