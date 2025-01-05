

function Customers() {
   return (
      <>
         <div className=" text-center mb-12 mt-24">
            <h2 className="text-3xl font-bold">
               <span className="text-indigo-600">What</span> our customers are saying
            </h2>
         </div>

         {/* Testimonial Content */}
         <div className="container mx-auto">
            
               <div className="flex flex-wrap justify-center">
                  {/* Testimonial Author 1 */}
                  <div className="sm:w-1/2 lg:w-1/4 px-4 mb-8">
                     <div className="flex items-center gap-3 text-center">
                        <div className=" mb-4">
                           <img src="/public/hamza.png" alt="Mahnoor Qaiser" className="mx-auto rounded-full w-16" />
                        </div>
                              <p className="font-semibold">Mahnoor Qaiser</p>
                     </div>
                  </div>

                  {/* Testimonial Author 2 */}
                  <div className="sm:w-1/2 lg:w-1/4 px-4 mb-8">
                     <div className="flex items-center gap-3 text-center">
                        <div className=" mb-4">
                           <img src="/public/hamza.png" alt="Mahnoor Qaiser" className="mx-auto rounded-full w-16" />
                        </div>
                        <p className="font-semibold">Mahnoor Qaiser</p>
                     </div>
                  </div>
                  
                  {/* Testimonial Author 3 */}
                  <div className="sm:w-1/2 lg:w-1/4 px-4 mb-8">
                     <div className="flex items-center gap-3 text-center">
                        <div className=" mb-4">
                           <img src="/public/hamza.png" alt="Mahnoor Qaiser" className="mx-auto rounded-full w-16" />
                        </div>
                        <p className="font-semibold">Mahnoor Qaiser</p>
                     </div>
                  </div>
                  
                  {/* Testimonial Author 4 */}
                  <div className="sm:w-1/2 lg:w-1/4 px-4 mb-8">
                     <div className="flex items-center gap-3 text-center">
                        <div className=" mb-4">
                           <img src="/public/hamza.png" alt="Mahnoor Qaiser" className="mx-auto rounded-full w-16" />
                        </div>
                        <p className="font-semibold">Mahnoor Qaiser</p>
                     </div>
                  </div>
               </div>
            </div>
         
         
      </>
   );
}

export default Customers;