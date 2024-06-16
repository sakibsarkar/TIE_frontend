import Link from "next/link";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";

const UserTabs = () => {
  return (
    <div className="center gap-[15px] pb-[10px]">
      <Link
        href={"/"}
        className="center gap-[10px] p-[5px] hover:bg-[#f5f5f5] rounded-[5px]"
      >
        <div className="relative w-fit">
          <IoMdHeartEmpty className="text-[25px]" />
          <span className="absolute right-[-10px] top-[-10px] bg-gray-200 rounded-[8px] py-[3px] px-[5px] text-[10px]">
            0
          </span>
        </div>
        <p className="text-[14px] font-[500]">Wishlist</p>
      </Link>
      <Link
        href={"/"}
        className="center gap-[10px] p-[5px] hover:bg-[#f5f5f5] rounded-[5px]"
      >
        <div className="relative w-fit">
          <IoCartOutline className="text-[25px]" />
          <span className="absolute right-[-10px] top-[-10px] bg-gray-200 rounded-[8px] py-[3px] px-[5px] text-[10px]">
            0
          </span>
        </div>
        <p className="text-[14px] font-[500]">Cart</p>
      </Link>
    </div>
  );
};

export default UserTabs;
