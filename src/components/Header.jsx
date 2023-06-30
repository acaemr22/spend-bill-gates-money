import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const billGatesMoney = useSelector((state) => state.products.billGatesMoney);

  return (
    <section className="flex flex-col items-center justify-center gap-y-5">
      <div className="bg-white w flex flex-col gap-3 font-dsemibold text-xl justify-center items-center w-full h-full py-5 rounded-xl">
        <div className="flex justify-center items-center">
          <img
            className="w-1/2 h-1/2 sm:w-2/3 sm:h-2/3 rounded-full"
            src="https://neal.fun/spend/billgates.jpg"
            alt="bill gates"
          />
        </div>
        <div>Spend Bill Gates' Money</div>
      </div>
    </section>
  );
};

export default Header;
