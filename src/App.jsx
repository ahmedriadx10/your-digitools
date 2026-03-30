import Hero from "./coponents/hero/Hero";
import Navbar from "./coponents/navbar/Navbar";
import Status from "./coponents/status/Status";

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

    </>
  );
};

export default App;