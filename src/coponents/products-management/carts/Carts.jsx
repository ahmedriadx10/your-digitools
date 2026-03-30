import CartCard from "../../ui/CartCard";
import empthyCartImg from '../../../assets/images/empthy-cart.png'
const Carts = ({carts,setCarts}) => {
  

  const handleCheckout=()=>{
    setCarts([])
  }

  if(carts.length>0){


    return (
      <div className="rounded-2xl border border-zinc-200 p-10">

<div>
  <h6 className="text-2xl font-bold text-(--primaryColor)">Your Cart</h6>
</div>

<div className="py-6 space-y-4">
  
{/* carts */}

{carts.map((item)=><CartCard key={item.id} cartData={item} carts={carts} setCarts={setCarts} />)}

</div>

<div className="flex justify-between items-centerj">
  {/* total price */}
<p className="text-(--primaryContent)">Total:</p>

<p className="text-(--primaryColor) text-2xl font-bold">${carts.reduce((acc,int)=>acc+int.price,0)} </p>

</div>

<div className="mt-6">
{/* proceed to checkout btn */}
 <button className="btn rounded-full w-full bg-linear-(--primaryGradient) text-white font-bold" onClick={handleCheckout} >Proceed to Checkout</button>
</div>

      </div>
    )
  }


  return (
    <div className=" py-10">
     
     <div>
<div><img src={empthyCartImg} alt="empthy cart image" className="w-30 h-auto mx-auto" /></div>
<h2 className="text-3xl font-semibold text-neutral-600 text-center mt-3">Your cart is empthy</h2>

     </div>


    </div>
  );
};

export default Carts;