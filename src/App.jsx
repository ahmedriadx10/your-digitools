import Hero from "./coponents/hero/Hero";
import Navbar from "./coponents/navbar/Navbar";

const App = () => {
  return (
    <>
 <header>
     <Navbar/>
 </header>

 {/* banner area */}

<Hero/>

    </>
  );
};

export default App;