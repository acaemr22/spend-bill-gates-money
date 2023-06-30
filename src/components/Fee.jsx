import React from "react";
import { useSelector } from "react-redux";

const Fee = () => {
  const productItems = useSelector((state) => state.products.productItems);
  const feeItems = productItems.filter((item) => item.number > 0);
  const total = feeItems.reduce(
    (accumulator, item) =>
      accumulator +
      Number(item.price.replace(/[,]/g, "").split("$")[1]) * item.number,
    0
  );

  return (
    <section className="bg-white">
      {feeItems[0] && (
        <div className="py-5 flex flex-col items-center justify-center px-3">
          <h2 className="text-2xl sm:text-3xl font-semibold">Your Receipt</h2>
          <div className="py-7 ">
            {feeItems.map((item) => (
              <div
                key={item.name}
                className="grid sm:grid-cols-3 grid-cols-7 text-lg gap-x-2 font-semibold"
              >
                <div className="sm:col-span-1 col-span-2 sm:text-lg text-[16px]">{item.name}</div>
                <div className="col-span-1 sm:text-lg text-[16px]">x{item.number}</div>
                <div className="text-green-600 sm:col-span-1 col-span-4 sm:text-lg text-[16px] text-right">
                  {(
                    Number(item.price.replace(/[,]/g, "").split("$")[1]) *
                    item.number
                  ).toLocaleString()}
                  $
                </div>
              </div>
            ))}
            <div className="bg-black w-full mt-7 h-[1px]"></div>
            <div className="grid sm:grid-cols-3 grid-cols-7 pt-3">
              <div className="font-semibold sm:text-lg text-[16px] sm:col-span-1 col-span-2">Total</div>
              {/* <div className="font-semibold text-lg w-full text-right col-span-1"></div> */}
              <div className="text-right font-semibold sm:text-lg text-[16px] w-full text-green-600 sm:col-span-1 col-span-5">
                {total.toLocaleString()}$
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Fee;
