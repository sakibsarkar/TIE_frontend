import ProductSlider from "../homePage/ProductSlider";

const DisplayProductCards = () => {
  // fetch different api based on the type

  return (
    <div className="flex flex-col gap-[80px] w-full">
      <ProductSlider title="Most Popular" />
      <ProductSlider title="New arrived" />
    </div>
  );
};

export default DisplayProductCards;
