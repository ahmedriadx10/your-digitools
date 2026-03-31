import { use, useState } from "react";
import Products from "./products/Products";
import Carts from "./carts/Carts";

const ProductsManagement = ({dataPromise,carts,setCarts}) => {
 
const productsData=use (dataPromise)


  const [products,setProducts]=useState('products')
 
  return (
    <section className="py-30  max-w-300 mx-auto w-[90%]">
      

<div className="text-center space-y-4 max-w-xl mx-auto w-[90%] mb-10">
<h4 className="text-(--primaryColor) text-3xl sm:text-4xl md:text-5xl font-extrabold">Premium Digital Tools</h4>
<p className="text-(--primaryContent)">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>

<div className="max-w-max rounded-full border border-zinc-200 p-1 mx-auto flex gap-5">
<button className={`btn rounded-full btn-ghost ${products==='products'? 'bg-linear-(--primaryGradient) text-white font-bold':''} `} onClick={()=>setProducts('products')}>Products</button>
<button className={`btn rounded-full btn-ghost ${products==='cart'? 'bg-linear-(--primaryGradient) text-white font-bold':''}`} onClick={()=>setProducts('cart')}>Cart({carts.length})</button>
</div>

</div>


{products==='products'?<Products productsData={productsData} carts={carts} setCarts={setCarts} /> : <Carts carts={carts} setCarts={setCarts}  />}





    </section>
  );
};

export default ProductsManagement;