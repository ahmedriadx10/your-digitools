import ListTick from "../../ui/ListTick";
import ProductCard from "../../ui/ProductCard";

const Products = ({productsData}) => {
 
 
 
  return (
    <section className="sm:grid gap-8 grid-cols-2 lg:grid-cols-3">



{productsData.map((product)=><ProductCard key={product.id} productData={product} />)}





    </section>
  );
};

export default Products;