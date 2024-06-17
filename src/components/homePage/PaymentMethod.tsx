import Image from "next/image";

const PaymentMethod = () => {
  const methods = [
    "/images/visa.png",
    "/images/master.png",
    "/images/bkash.png",
  ];
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 py-[25px] mt-[50px]">
      <h1 className="text-3xl font-semibold mb-6">Payment Methods We Accept</h1>
      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {methods.map((method, i) => (
          <div
            key={i + "PAYMENT_m  "}
            className="bg-white p-[10px] rounded-lg shadow-md flex items-center justify-center"
          >
            <Image width={80} height={60} src={method} alt="payment method" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethod;
