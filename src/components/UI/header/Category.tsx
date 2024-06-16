import { IoIosArrowDown } from "react-icons/io";

const Category = () => {
  return (
    <div className="px-[15px] py-[12px] flex items-center justify-between gap-[10px] w-[180px] border-[1px] border-primary relative rounded-[5px] cursor-pointer">
      <p>Category</p>
      <IoIosArrowDown />
    </div>
  );
};

export default Category;
