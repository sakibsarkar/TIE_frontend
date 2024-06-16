import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
const AuthUser = () => {
  return (
    <Link
      href={"/"}
      className="px-[15px] py-[8px] flex items-center justify-between gap-[18px] border-[1px] border-primary relative rounded-[5px] cursor-pointer"
    >
      <FaRegUser />

      <span className="flex flex-col justify-start items-start gap-[0px]">
        <span className="text-[12px] font-[600]">Account</span>
        <span className="text-[10px] text-[#3f3f3f]">Signin</span>
      </span>
    </Link>
  );
};

export default AuthUser;
