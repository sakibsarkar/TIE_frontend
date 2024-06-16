import { open_sans } from "@/utils/UI/fonts";
import Image from "next/image";
import Link from "next/link";
import AuthUser from "../UI/header/AuthUser";
import Category from "../UI/header/Category";
import Navlinks from "../UI/header/Navlinks";
import UserTabs from "../UI/header/UserTabs";
import SearchBox from "../UI/header/searchBox";
const Navbar = () => {
  const shadow = "0 2px 16.8px 3.2px #00264214";

  return (
    <header
      className={`sticky top-0 left-0 w-full pt-[15px] overflow-hidden bg-white z-[99] ${open_sans.className}`}
      style={{ boxShadow: shadow }}
    >
      <div className="w-full flex justify-between items-center layoutContainer">
        <div className="w-full flex items-center justify-start gap-[20px]">
          <Link href={"/"}>
            <Image src={"/images/logo.png"} width={90} height={60} alt="logo" />
          </Link>

          <SearchBox />
        </div>

        <div className="center gap-[10px]">
          <Category />
          <AuthUser />
        </div>
      </div>
      <nav className="flex justify-between items-center layoutContainer mt-[28px]">
        <Navlinks />
        <UserTabs />
      </nav>
    </header>
  );
};

export default Navbar;
