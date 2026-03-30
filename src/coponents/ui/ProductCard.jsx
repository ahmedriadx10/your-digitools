import { useState } from "react";
import ListTick from "./ListTick";


const ProductCard = ({ productData, carts, setCarts }) => {


  const [addedCart, setAddedCart] = useState(false);

 

  const { name, description, price, period, tag, features, icon } = productData;

  const handleCartAdd = () => {
    setAddedCart(!addedCart);

setCarts([...carts,productData])

  };

  return (
    <div className="p-6 border border-zinc-200 rounded-2xl">
      <div className="space-y-4">
        <span className="border border-zinc-100 rounded-full  w-14 h-14 text-3xl inline-flex justify-center items-center">
          {icon}
        </span>

        <h2 className="text-(--primaryColor) font-bold text-2xl">{name}</h2>
        <p className="text-(--primaryContent) leading-5">{description}</p>

        <h6>
          <span className="text-(--primaryColor) text-2xl font-bold">
            ${price}
          </span>
          <span className="text-(--primaryContent)">/{period}</span>
        </h6>

        <ul className="space-y-2">
          {features.map((li, i) => (
            <ListTick key={i} text={li} />
          ))}
        </ul>

        <button
          className={`btn bg-linear-(--primaryGradient) w-full rounded-full text-white font-bold  `}
          onClick={handleCartAdd}
        >
          {addedCart ? "Added to cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
