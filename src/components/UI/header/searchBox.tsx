import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
  return (
    <form className="flex  justify-start items-center gap-[0px] bg-white border-[1px] border-primary px-[10px] h-[40px] w-[370px] rounded-[5px]">
      <IoSearchOutline />
      <input
        className="w-full bg-transparent pl-[10px] outline-none text-[13px]"
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchBox;
