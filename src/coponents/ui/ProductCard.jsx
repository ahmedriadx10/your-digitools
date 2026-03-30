import { useState } from "react";
import ListTick from "./ListTick";
import { toast } from "react-toastify";


const ProductCard = ({ productData, carts, setCarts }) => { 
  const { name, description, price, period, tag, features, icon,id } = productData;
   const findDataInsideCart=carts.find((item)=>item.id===id)

  const [addedCart, setAddedCart] = useState(!!findDataInsideCart);

 

 



   
  const handleCartAdd = () => {
    
     

    if(findDataInsideCart){
      
      toast.error('Products already added')
      
      return
    }




setCarts([...carts,productData])
setAddedCart(!addedCart)
toast.success('Add to cart successfull')
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
          className={`btn  w-full rounded-full text-white font-bold ${addedCart?"bg-green-500":'bg-linear-(--primaryGradient)'} `}
          onClick={handleCartAdd}
        >
          {addedCart? <span className="inline-flex items-center">        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 me-2 inline-block text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Added to cart</span></span> : <span>Buy Now</span>}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
