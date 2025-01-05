import Aligned from "../Aligned";
import Banner from "../Banner";
import Customers from "../Customers";
import Footer from "../Footer";
import Frequently from "../Frequently";
import Hero from "../Hero";
import Kalpay from "../Kalpay";
import Navber from "../Navber";
import SliderComponent from "../Slider";

function AllLayout() {
   return (
      <>
         <div className="">
            <Navber />
            <Banner />
            <Hero />
            <Aligned />
            <Kalpay />
            <Customers />
            <SliderComponent />
            <Frequently />

            <Footer />
         </div>
         
      </>
   );
}

export default AllLayout;