import Hero from "./coponents/hero/Hero";
import Navbar from "./coponents/navbar/Navbar";
import Status from "./coponents/status/Status";
import Steps from "./coponents/steps/Steps";

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

    </>
  );
};

export default App;