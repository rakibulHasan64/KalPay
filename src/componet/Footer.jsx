import { FaArrowRight } from "react-icons/fa";


function Footer() {
   return (
      <>
         <footer className="bg-slate-50 text-gray-800  py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               {/* Top Section */}
               <div className="border-b border-gray-700 pb-8">
                  <div className="flex flex-wrap -mx-4">
                     {/* Logo and Subscription */}
                     <div className="w-full lg:w-5/12 px-4 mb-6 lg:mb-0">
                        <div className="mb-6">
                           <a href="index.html">
                              <img
                                 src="/public/logo.png"
                                 alt="logo"
                                 className="w-32"
                              />
                           </a>
                        </div>
                        <form
                           id="subscribe"
                           className="flex items-center relative"
                        >
                           <input
                              className="w-full p-3 border border-rose-500 rounded-3xl shadow-2xl bg-white placeholder-gray-400 text-gray-800 focus:outline-none"
                              id="subscriber_email"
                              type="email"
                              placeholder="Enter your Email to subscribe"
                           />
                           <button
                              type="submit"
                              className="p-4 bg-red-600 rounded-full hover:bg-blue-700 transition-all absolute right-0"
                           >

                              <FaArrowRight className="text-white" />
                              {/* <i className="fas fa-arrow-right text-black absolute"></i> */}
                           </button>
                        </form>

                        <p className="text-gray-400 text-sm mt-2">
                           Subscribe for updates
                        </p>
                        <div className="mt-4">
                           <a
                              href="#"
                              className="inline-block px-6 py-2 bg-red-600 text-white rounded-3xl transition-all"
                           >
                              Download Application
                           </a>
                        </div>
                     </div>

                     {/* Quick Links Columns */}
                     {[
                        {
                           title: "Quick Links",
                           links: [
                              { text: "Home", href: "index.html" },
                              { text: "Are you a business?", href: "business.html" },
                              { text: "About", href: "about.html" },
                           ],
                        },
                        {
                           title: "Quick Links",
                           links: [
                              { text: "Contact Us", href: "contact.html" },
                              { text: "FAQ", href: "https://kalpayfinancials.com/privacy-policy.html" },
                              { text: "Terms & Conditions", href: "https://kalpayfinancials.com/terms.html" },
                              { text: "Privacy Policy", href: "https://kalpayfinancials.com/privacy-policy.html" },
                           ],
                        },
                        {
                           title: "Quick Links",
                           links: [
                              { text: "Link One", href: "#" },
                              { text: "Link Two", href: "#" },
                              { text: "Link Three", href: "#" },
                           ],
                        },
                     ].map((column, idx) => (
                        <div key={idx} className="w-full lg:w-2/12 px-4 mb-6 lg:mb-0">
                           <h4 className="font-bold mb-4">{column.title}</h4>
                           <ul className="space-y-2">
                              {column.links.map((link, index) => (
                                 <li key={index}>
                                    <a
                                       href={link.href}
                                       className="hover:text-blue-500"
                                    >
                                       {link.text}
                                    </a>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Bottom Section */}
               <div className="flex flex-wrap justify-between items-center pt-6">
                  <p className="text-gray-400 text-sm">
                     &copy; {new Date().getFullYear()} KalPay All Rights Reserved.
                  </p>
                  <ul className="flex space-x-4">
                     {[
                        {
                           href: "https://www.instagram.com/kal.pay/",
                           icon: "fab fa-instagram",
                        },
                        {
                           href: "https://www.facebook.com/kalpayfinancials/",
                           icon: "fab fa-facebook-f",
                        },
                        {
                           href: "https://www.linkedin.com/company/kalpayfinancials/",
                           icon: "fab fa-linkedin-in",
                        },
                        {
                           href: "https://twitter.com/KalPayPK",
                           icon: "fab fa-twitter",
                        },
                     ].map((social, index) => (
                        <li key={index}>
                           <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-blue-500"
                           >
                              <i className={social.icon}></i>
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </footer>

         
      </>
   );
}

export default Footer;