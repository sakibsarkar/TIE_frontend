const Promotion = () => {
  return (
    <div className="fle w-full flex gap-[20px] h-[485px] mt-[20px]">
      <div className="w-[66%] h-full head_promo flex flex-col justify-center items-start gap-[10px]">
        <div className="flex flex-col justify-start items-start gap-[15px] pl-[85px]">
          <h1 className="text-[25px] text-[#141318] font-[600]">
            Shoes Collections
          </h1>
          <p className="text-[12px] text-black max-w-[480px]">
            Explore our diverse shoe categories at TIE, perfectly curated to
            complement your daily fits. Whether you&apos;re dressing for a
            formal occasion, a casual outing, or a weekend adventure, we have
            the ideal footwear to match your style. From sleek dress shoes to
            comfortable sneakers and versatile loafers, find the perfect pair to
            complete your look
          </p>
        </div>
      </div>

      <div className="w-[44%] h-full side_promo flex flex-col justify-center items-start gap-[10px]">
        <div className="flex flex-col justify-start items-start gap-[15px] pl-[60px]">
          <h1 className="text-[25px] text-[#141318] font-[600]">
            Clothing Collections
          </h1>
          <p className="text-[12px] text-black max-w-[400px]">
            Discover a wide array of clothing categories at TIE, tailored to
            suit your daily style needs. Whether you&apos;re preparing for a
            business meeting, a casual day out, or a special event, our
            collection has you covered
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
