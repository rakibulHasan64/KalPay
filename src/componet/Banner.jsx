

function Banner() {
   return (
      <>
         <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 mt-5 mb-6">
               <div className="flex flex-wrap items-center">
                  {/* Text Section */}
                  <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                     <div className="text-center lg:text-left">
                        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-gray-800">
                           Khareedo <br /> Aj Payment  <br /> <span className="text-blue-600">Kal</span>Pay
                        </h1>
                        <p className="text-gray-600 text-xl mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ea aliquam voluptatem. Temporibus consequuntur dignissimos tempore fugit sed aut enim non, accusamus ipsam et, eum numquam tempora voluptatem? Asperiores, culpa!
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                           <a
                              href="#"
                              className="px-6 py-3 bg-red-600 rounded-3xl text-white hover:bg-red-700 transition"
                           >
                              Get Started
                           </a>

                           <a
                              href="#"
                              className="px-4 sm:px-6 py-2 sm:py-3 border border-red-700 text-black rounded-3xl hover:bg-red-600 hover:text-white transition text-sm sm:text-base"
                           >
                              Download Application
                           </a>
                        </div>

                     </div>
                  </div>
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2">
                     <div className="flex justify-center">
                        <img
                           src="/banner-mobile.png"
                           alt="Banner"
                           className="w-full max-w-md"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </>
   );
}

export default Banner;