

function Aligned() {
   return (
      <>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
               {/* Image Section */}
               <div className="lg:w-1/2 w-full order-2 lg:order-1 mb-8 lg:mb-0">
                  <div className="flex justify-center lg:justify-end">
                     <img
                        src="/public/why-img.png"
                        alt="KalPay"
                        className="max-w-full w-64 sm:w-80 lg:w-96"
                     />
                  </div>
               </div>

               {/* Text Section */}
               <div className="lg:w-1/2 w-full order-1 lg:order-2">
                  <div className="text text-center lg:text-left">
                     <span className="text-lg sm:text-xl text-gray-600 font-semibold">
                        What is KalPay?
                     </span>
                     <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6">
                        <span className="text-indigo-600">Kal</span>Pay is a Shariah Aligned Buy Now Pay Later service.
                     </h2>

                     <ul className="list-none space-y-4">
                        <li className="flex items-center">
                           <img
                              src="/public/icon-sm-1.png"
                              alt="icon"
                              className="mr-4 w-6 sm:w-8"
                           />
                           <span className="text-sm sm:text-base">
                              Shop at your favorite store and select KalPay at checkout
                           </span>
                        </li>
                        <li className="flex items-center">
                           <img
                              src="/public/icon-sm-1.png"
                              alt="icon"
                              className="mr-4 w-6 sm:w-8"
                           />
                           <span className="text-sm sm:text-base">
                              Login or Sign up and pay your down payment
                           </span>
                        </li>
                        <li className="flex items-center">
                           <img
                              src="/public/icon-sm-1.png"
                              alt="icon"
                              className="mr-4 w-6 sm:w-8"
                           />
                           <span className="text-sm sm:text-base">
                              That is, it! You have split your payments in 3!
                           </span>
                        </li>
                     </ul>

                     <div className="mt-8 text-center lg:text-left">
                        <ul className="space-y-4 lg:space-y-0 lg:flex lg:space-x-4">
                           <li>
                              <a
                                 href="#"
                                 className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition-all text-sm sm:text-base"
                              >
                                 Join now
                              </a>
                           </li>
                           <li>
                              <a
                                 href="#"
                                 className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition-all text-sm sm:text-base"
                              >
                                 Download Application
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         
      </>
   );
}

export default Aligned;