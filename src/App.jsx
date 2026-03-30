import Footer from "./coponents/footer/Footer";
import Hero from "./coponents/hero/Hero";
import Navbar from "./coponents/navbar/Navbar";
import Pricing from "./coponents/pricing/Pricing";
import Status from "./coponents/status/Status";
import Steps from "./coponents/steps/Steps";
import Workflow from "./coponents/workflow/Workflow";

const App = () => {
  return (
    <>
 <header>
     <Navbar/>
 </header>

 {/* banner area */}

<Hero/>

{/* status area */}
<Status/>

{/* products management area */}



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