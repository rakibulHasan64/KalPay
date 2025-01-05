

function Kalpay() {
   return (
      <>
         <section className="container mx-auto py-16 px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-4">Why choose KalPay?</h2>
               <p className="text-lg text-gray-700 mb-6">
                  KalPay’s buy now pay later is the easiest way to shop for all your favorite stores in one place. With just a few clicks, you can have everything that's on your list at home before too long!
               </p>
               <h3 className="text-2xl font-semibold mb-4">Grow Your Business</h3>
               <p className="text-lg text-gray-700">
                  Our pricing is as simple and transparent as it can get. With no hidden costs or sign-up charges.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {/* Increase your sales */}
               <div className="text-center transform transition-all duration-300 hover:scale-105 hover:bg-slate-300 hover:shadow-lg rounded-md">
                  <div className="mb-4">
                     <img src="/public/icon3.png" alt="Increase sales" className="mx-auto w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Increase your sales</h3>
                  <p className="text-gray-600">
                     We will help you increase your sales by increasing your average order value by 25% and decrease your shopping cart abandonment rate.
                  </p>
               </div>

               {/* No risk */}
               <div className="text-center transform transition-all duration-300 hover:scale-105 hover:bg-slate-300 hover:shadow-2xl  rounded-md">
                  <div className="mb-4">
                     <img src="/public/icon3.png" alt="No risk" className="mx-auto w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No risk</h3>
                  <p className="text-gray-600">
                     We take on all the repayment risk. You don’t have to worry about anything.
                  </p>
               </div>

               {/* Get paid in 3 working days */}
               <div className="text-center transform transition-all duration-300 hover:scale-105 hover:bg-slate-300 hover:shadow-lg rounded-md">
                  <div className="mb-4">
                     <img src="/public/icon3.png" alt="Get paid in 3 working days" className="mx-auto w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Get paid in 3 working days</h3>
                  <p className="text-gray-600">
                     We will disburse the amount within 3 working days.
                  </p>
               </div>

               {/* Shariah Aligned */}
               <div className="text-center transform transition-all duration-300 hover:scale-105 hover:bg-slate-300 hover:shadow-lg rounded-md">
                  <div className="mb-4">
                     <img src="/public/icon3.png" alt="Shariah Aligned" className="mx-auto w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Shariah Aligned</h3>
                  <p className="text-gray-600">
                     We strictly follow all Islamic Finance principles.
                  </p>
               </div>
            </div>
         </section>

         
      </>
   );
}

export default Kalpay;