import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Fee from "./components/Fee";
import { useSelector } from "react-redux";
import { animated, useSpring } from "@react-spring/web";

const Number = ({ numOld, numNew }) => {
  const { number } = useSpring({
    from: { number: numOld },
    number: numNew,
    delay: 0,
    config: { mass: 1, tension: 30, friction: 10 },
  });
  return (
    <animated.div>
      {number.to((n) => "$" + parseInt(n).toLocaleString())}
    </animated.div>
  );
};

function App() {
  const oldBillGatesMoney = useSelector(
    (state) => state.products.oldBillGatesMoney
  );
  const billGatesMoney = useSelector((state) => state.products.billGatesMoney);
  return (
    <main className="bg-gray-100 px-3 sm:px-10  xl:px-36 py-3 sm:py-5 ">
      <Header />
      <div className="bg-green-500 rounded-md my-3 sm:my-5 text-white font-semibold py-5 text-center w-full  text-3xl sticky z-1 top-0">
        <Number numOld={oldBillGatesMoney} numNew={billGatesMoney } />
      </div>
      <Products />
      <Fee />
      <footer className="text-center my-10">
        Copyright (c) 2023 Emre Açar
      </footer>
    </main>
  );
}

export default App;
