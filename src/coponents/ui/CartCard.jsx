
const CartCard = ({cartData,carts,setCarts}) => {

  const {icon,name,price,id}=cartData

const handleCartRemove=()=>{

  const filterDataWithoutIt= carts.filter((item)=>item.id!==id)

  setCarts(filterDataWithoutIt)


}


  return (
    <div className="flex justify-between p-5 rounded-2xl bg-[#F9FAFC]">
      
      <div className="flex items-center gap-4 ">
         <span className="border border-zinc-100 rounded-full  w-14 h-14 text-3xl inline-flex justify-center items-center">
          {icon}


        </span>

        <div>
  <h6 className="text-(--primaryColor) text-xl font-semibold">{name}</h6>
  <p className="text-(--primaryContent) font-medium">${price}</p>
</div>

      </div>

<button className="btn btn-ghost text-[#FF3980] font-bold" onClick={handleCartRemove}>Remove</button>

    </div>
  );
};

export default CartCard;