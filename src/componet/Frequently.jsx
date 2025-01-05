import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Frequently() {
   const [openIndex, setOpenIndex] = useState(null);

   const toggleAnswer = (index) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   const faqs = [
      {
         question: "What is KalPay?",
         answer:
            "KalPay is Pakistan’s biggest Buy Now and Pay Later service, allowing you to split your payments into 3 monthly instalments.",
      },
      {
         question: "How are instalments divided?",
         answer:
            "Customers are required to pay a 1/3 down payment which is also the 1st instalment followed by 2 monthly instalments.",
      },
      {
         question: "Am I eligible to use KalPay?",
         answer:
            "All Pakistani nationals with a computerized CNIC, smartphone, verifiable phone number, and email are eligible to use KalPay.",
      },
      {
         question: "Is my payment information safe?",
         answer:
            "At KalPay, security is our number one priority. We abide by all regulations to ensure your data, especially your credit card details, are safe.",
      },
      {
         question: "Is there any cost of using KalPay?",
         answer:
            "KalPay is completely free for all our customers. Unless you’re late on your payments after which there is a 'late payment penalty' after several reminders and a cushion period.",
      },
      {
         question: "What is the minimum and maximum credit limit that I can use?",
         answer:
            "Our minimum credit limit is Rs. 1,500/- and maximum is Rs. 15,000/-. However, if you need to request for credit limit enhancement, you can contact us at success@kalpayfinancials.com.",
      },
   ];

   return (
      <section className="py-16">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="section-title text-center mb-12">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked <span className="text-indigo-600">Questions</span>
               </h2>
               <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
                  Whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived zebras vex.
               </p>
            </div>

            <div className="faq-content">
               <ul className="space-y-4 sm:space-y-6">
                  {faqs.map((faq, index) => (
                     <li
                        key={index}
                        className={`border border-red-500 rounded-lg overflow-hidden ${openIndex === index ? "bg-gray-100" : ""
                           }`}
                     >
                        <button
                           className="w-full text-left px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition-all"
                           onClick={() => toggleAnswer(index)}
                        >
                           <span className="text-sm sm:text-base md:text-lg font-medium">
                              {faq.question}
                           </span>
                           {openIndex === index ? (
                              <FaChevronUp className="text-white w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full p-2 shadow-lg transition-all duration-300" />
                           ) : (
                              <FaChevronDown className="text-white w-8 h-8 sm:w-10 sm:h-10 bg-red-600 rounded-full p-2 shadow-lg transition-all duration-300" />
                           )}
                        </button>
                        {openIndex === index && (
                           <div className="px-4 sm:px-6 py-3 bg-white">
                              <p className="text-sm sm:text-base">{faq.answer}</p>
                           </div>
                        )}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
}

export default Frequently;
