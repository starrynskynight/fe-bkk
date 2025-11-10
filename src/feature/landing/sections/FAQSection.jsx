import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import dummyFAQ from "../data/dummyFAQ.json";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative px-6 py-16 bg-[#0E1947]">
      <div className="max-w-7xl mx-auto justify-center ">
        <h2 className="max-w-xs md:max-w-[780px] text-3xl md:text-[36px] font-bold mb-8 md:mb-18 tracking-[-1px] md:tracking-[-3px] text-center mx-auto text-white">
            Pertanyaan yang Sering Diajukan
        </h2>

        <div className="gap-10 items-start">
          <div className="space-y-3">
            {dummyFAQ.map((faq, index) => (
              <div
                key={index}
                className="border border-[#CFCFCF] rounded-[10px] p-4 shadow-sm cursor-pointer bg-white"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-semibold text-lg md:text-xl">{faq.question}</h3>
                  <span className="text-xl font-bold text-[#1B1139]">
                    <AnimatePresence mode="wait" initial={false}>
                      {openIndex === index ? (
                        <motion.span
                          key="minus"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaMinus />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="plus"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaPlus />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-2 text-[#1B1139] text-sm md:text-lg font-medium">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
