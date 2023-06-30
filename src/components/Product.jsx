import { useState } from "react";
import { decNumber, incNumber } from "../features/products/productsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Product = ({ url, name, price, number }) => {
  const dispatch = useDispatch();
  const billGatesMoney = useSelector((state) => state.products.billGatesMoney);
  const numPrice = Number(price.replace(/[,]/g, "").split("$")[1]);
  const disabled = billGatesMoney - numPrice >= 0 ? false : true;
  const [amount, setAmount] = useState(number);
  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setAmount(value);
      if (value > amount) {
        dispatch(
          incNumber({
            name,
            num: numPrice * (value - amount),
            amount: value - amount,
          })
        );
      } else {
        dispatch(
          decNumber({
            name,
            num: numPrice * (amount - value),
            amount: amount - value,
          })
        );
      }
    }
  };

  const handleDecClick = () => {
    dispatch(decNumber({ name, num: numPrice, amount: 1 }));
    setAmount((prev) => prev - 1);
  };

  const handleIncClick = () => {
    dispatch(incNumber({ name, num: numPrice, amount: 1 }));
    setAmount((prev) => prev + 1);
  };

  return (
    <div className="bg-white flex-col flex md:px-3 py-3 pt-7 gap-y-8">
      <div className="flex flex-col items-center gap-y-5">
        <div className="flex items-center justify-center">
          <img src={url} className="h-[150px] w-full" alt="" />
        </div>
        <div className="flex flex-col text-center">
          <h4 className="text-2xl">{name}</h4>
          <h5 className="text-2xl text-green-500 disabled:bg-green-300 font-semibold">
            {price}
          </h5>
        </div>
      </div>
      <div className="grid grid-cols-3 text-white text-lg font-semibold mx-2">
        <button
          onClick={handleDecClick}
          className="bg-red-600 rounded-md disabled:bg-red-300"
          disabled={amount > 0 ? false : true}
        >
          Sell
        </button>
        <input
          value={amount}
          onChange={(e) => handleChange(e)}
          type="number"
          className="text-black text-center border-solid mx-2 border-gray-400 border-2 rounded-md"
        />
        <button
          onClick={handleIncClick}
          className="py-2 rounded-md bg-green-500 disabled:bg-green-300"
          disabled={disabled}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;
