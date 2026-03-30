import { useState } from "react";
import Footer from "./coponents/footer/Footer";
import Hero from "./coponents/hero/Hero";
import Navbar from "./coponents/navbar/Navbar";
import Pricing from "./coponents/pricing/Pricing";
import Status from "./coponents/status/Status";
import Steps from "./coponents/steps/Steps";
import Workflow from "./coponents/workflow/Workflow";
import ProductsManagement from "./coponents/products-management/ProductsManagement";

const dataLoader=async ()=>{
  const res=await fetch('/digitools.json')
  return res.json()
}

const dataPromise=dataLoader()


const App = () => {

  const [carts,setCarts]=useState([])

  return (
    <>
 <header>
     <Navbar carts={carts}/>
 </header>

 {/* banner area */}

<Hero/>

{/* status area */}
<Status/>

{/* products management area */}

<ProductsManagement dataPromise={dataPromise}  carts={carts} setCarts={setCarts} />


{/* steps section */}


  <Steps/>


  {/* pricing section */}

  <Pricing/>

  {/* workflow area */}

  <Workflow/>

{/* footer section */}

<Footer/>
    </>
  );
};

export default App;