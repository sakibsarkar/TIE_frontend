"use client";
import { navLinks } from "@/mock/navLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navlinks = () => {
  const path = usePathname();
  return (
    <ul className="flex justify-start items-center gap-[10px]">
      {navLinks.map(({ href, text }, i) => (
        <li
          key={i + "navlink"}
          className={`${
            path === href ? "bg-black text-white" : ""
          } px-[20px] pt-[5px] rounded-t-[5px] h-[45px] center`}
        >
          <Link href={href} className="relative top-[-3px]">
            {text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navlinks;
