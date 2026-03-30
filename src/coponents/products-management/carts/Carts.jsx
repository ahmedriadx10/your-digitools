import CartCard from "../../ui/CartCard";

const Carts = ({carts,setCarts}) => {
  


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
 <button className="btn rounded-full w-full bg-linear-(--primaryGradient) text-white font-bold">Proceed to Checkout</button>
</div>

      </div>
    )
  }


  return (
    <div className="">
     


    </div>
  );
};

export default Carts;