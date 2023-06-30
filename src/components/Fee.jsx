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
        <div className="py-5 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-semibold">Your Receipt</h2>
          <div className="py-7 ">
            {feeItems.map((item) => (
              <div
                key={item.name}
                className="grid grid-cols-3 text-lg gap-x-2 font-semibold"
              >
                <div className="">{item.name}</div>
                <div>x{item.number}</div>
                <div className="text-green-600">
                  {(
                    Number(item.price.replace(/[,]/g, "").split("$")[1]) *
                    item.number
                  ).toLocaleString()}
                  $
                </div>
              </div>
            ))}
            <div className="bg-black w-full mt-7 h-[1px]"></div>
            <div className="grid grid-cols-3 pt-3">
              <div className="font-semibold text-lg">Total</div>
              <div className="font-semibold text-lg w-full text-right"></div>
              <div className="font-semibold text-lg w-full text-right text-green-600">
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
