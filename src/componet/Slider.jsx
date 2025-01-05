
import Slider from 'react-slick';  // Ensure you have installed 'react-slick' and 'slick-carousel' for styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const sliderContent = [
   {
      heading: "Using KalPay is outstanding experience",
      subheading: "Ive been using KalPay since the past few months now! Glad that I found it. I am a shopaholic and love online shopping but due to low budget sometimes I had to drop my favourite things. Now I can purchase big items while paying in instalments! Its beyond helpful and the customer service is very good",

   },
   {
      heading: "Using KalPay is outstanding experience",
      subheading: "Ive been using KalPay since the past few months now! Glad that I found it. I am a shopaholic and love online shopping but due to low budget sometimes I had to drop my favourite things. Now I can purchase big items while paying in instalments! Its beyond helpful and the customer service is very good",
   
   },
   {
      heading: "Using KalPay is outstanding experience",
      subheading: "Ive been using KalPay since the past few months now! Glad that I found it. I am a shopaholic and love online shopping but due to low budget sometimes I had to drop my favourite things. Now I can purchase big items while paying in instalments! Its beyond helpful and the customer service is very good",

   },
];

function SliderComponent() {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
   };

   return (
      <Slider {...settings}>
         {sliderContent.map((slide, index) => (
            <div key={index} className="bg-[#F6F9FC]">
               <div className="w-1/2 m-auto  mt-28 mb-32">
                  <div className="w-full text-center sm:text-left">
                     <h3 className="text-xl sm:text-xl md:text-2xl font-bold p-2 text-center">
                        {slide.heading}
                     </h3>
                     <p className='text-center mt-7 mb-5'>⭐⭐⭐⭐⭐⭐</p>
                     <p className="text-lg sm:text-xl mt-4 text-center">
                        {slide.subheading}
                     </p>
                  </div>

                  
               </div>
            </div>
         ))}
      </Slider>
   );
}

export default SliderComponent;
