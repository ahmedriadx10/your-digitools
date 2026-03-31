import ListTick from "../../ui/ListTick";
import ProductCard from "../../ui/ProductCard";

const Products = ({productsData,carts,setCarts}) => {
 
 
 
  return (
    <section className=" grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">



{productsData.map((product)=><ProductCard key={product.id} productData={product} carts={carts} setCarts={setCarts} />)}





    </section>
  );
};

export default Products;