import React from "react";

// framer motion
import { motion } from "framer-motion";
// varients
import { fadeIn } from "../variants";

const Qualification = () => {
  return (
    <section id="qualification" className="section">
      {/* another time line  */}
      {/* <!-- component --> */}
      <div className="container mx-auto">
        <h2 className="h2 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 mb-12">
          Qualification
        </h2>
        <div className="py-6 flex flex-col justify-center sm:py-12 lg:px-12">
          <div className="py-3  w-full px-2 sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold">
              {/* <!-- Vertical bar running through middle --> */}
              <div className="hidden lg:block w-0.5 bg-[#1597e7c9] absolute h-full left-0 transform -translate-x-1/2"></div>

              {/* <!-- section 1, set by justify-start and sm:pr-8 --> */}
              <div className="lg:mt-0 lg:mb-12">
                <div className="flex flex-col lg:flex-row items-center">
                  <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex justify-start w-full mx-auto items-center "
                  >
                    <div className="w-full lg:pr-16 lg:transform lg:translate-x-[60px]">
                      <div className="bg-white/20 flex flex-col gap-3 backdrop-blur border-[1.5px] border-gray-200 shadow-lg rounded-md p-4">
                        <div>
                          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Bachelor of Science(2014)
                          </h3>
                          <p className="mb-2 text-base font-normal text-gray-600 dark:text-gray-400">
                            Major: Electrical & Electronic Engineering
                          </p>
                          <p className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                            International Islamic University, Chittagong,
                            Bangladesh
                          </p>
                        </div>
                        <div>
                          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                            Master of Science(2023)
                          </h3>
                          <p className="mb-2 text-base font-normal text-gray-600">
                            Major: Electrical & Computer Engineering
                          </p>
                          <p className="block mb-2 text-sm font-normal leading-none text-gray-500 ">
                            South China University of Technology, Guangzhou,
                            China.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <div className="rounded-md bg-[#1597e7] border-white border-4 w-auto h-6 absolute lg:left-0 left-1/2 -translate-y-10 lg:-translate-y-0 transform -translate-x-1/2 flex items-center font-primary font-thin justify-center px-2 py-4 text-white ">
                    Academic
                  </div>
                </div>
              </div>

              {/* <!-- section2, set by justify-end and sm:pl-8 --> */}

              <div className="mt-16 lg:mt-0 lg:mb-12">
                <div className="flex flex-col lg:flex-row items-center">
                  <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex justify-start w-full mx-auto items-center"
                  >
                    <div className="w-full lg:pr-16 lg:transform lg:translate-x-[60px]">
                      <div className="bg-white/20 flex flex-col gap-3 backdrop-blur border-[1.5px] border-gray-200 shadow-lg rounded-md p-4">
                        <div>
                          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                            PLC Based Energy-Efficient Home AutomationSystem
                            with Smart Task Scheduling
                          </h3>
                          <p className="mb-2 text-base font-normal text-gray-600 ">
                            M F Shahriar Khan, Toufiq Ahmed, Israq Aziz, Fahad
                            Bin Alam,
                            <b className="text-black">MD Salah Uddin Bhuiya</b>,
                            M. J. Alam, Rocky Chakma, S. S. Mahtab "PLC Based
                            Energy-Efficient Home AutomationSystem with Smart
                            Task Scheduling
                          </p>
                          <p className="block mb-2 text-sm font-normal leading-none text-gray-500">
                            Published in : 2019 IEEE Sustainable Power and
                            Energy Conference (iSPEC)
                          </p>
                          <button className="mb-2 btn-3 btn-xs">
                            <a
                              target="_blank"
                              href="https://ieeexplore.ieee.org/document/8975223"
                            >
                              View Paper
                            </a>
                          </button>
                        </div>
                        <div>
                          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                            Secure and Transparent KYC for Banking System Using
                            IPFS and Blockchain Technology
                          </h3>
                          <p className="mb-2 text-base font-normal text-gray-600">
                            Abdullah Al Mamun, Sheikh Riad Hasan,
                            <b className="text-black">MD Salah Uddin Bhuiya</b>,
                            M. Shamim Kaiser, Mohammad Abu Yousuf
                          </p>
                          <p className="block mb-2 text-sm font-normal leading-none text-gray-500">
                            Published in : 2020 IEEE Region 10 Symposium
                            (TENSYMP)
                          </p>
                          <button className="mb-2 btn-3 btn-xs">
                            <a
                              target="_blank"
                              href="https://ieeexplore.ieee.org/document/9230987"
                            >
                              View Paper
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <div className="rounded-md bg-[#1597e7] border-white border-4 w-auto h-6 absolute lg:left-0 left-1/2 -translate-y-10 lg:-translate-y-0 transform -translate-x-1/2 flex items-center font-primary font-thin justify-center px-2 py-4 text-white">
                    Publications
                  </div>
                </div>
              </div>

              {/* <!-- section3, set by justify-start and sm:pr-8 --> */}
              <div className="mt-16 lg:mt-0 lg:mb-12">
                <div className="flex flex-col lg:flex-row items-center">
                  <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex justify-start w-full mx-auto items-center"
                  >
                    <div className="w-full lg:pr-16 lg:transform lg:translate-x-[60px]">
                      <div className="bg-white/20 flex flex-col gap-3 backdrop-blur border-[1.5px] border-gray-200 shadow-lg rounded-md p-4">
                        <div>
                          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                            Assistant Engineer (2015 - 2019)
                          </h3>
                          <p className="mb-2 text-base font-normal text-gray-600">
                            BTS installation and commissioning. LOS Survey
                          </p>
                          <p className="block mb-2 text-sm font-normal text-gray-500 ">
                            Company : Tech-Pro Tele Engineering, Dhaka,
                            Bangladesh
                          </p>
                        </div>
                        <div>
                          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                            Article Writing (2016 - 2021)
                          </h3>
                          <p className="mb-2 text-base font-normal text-gray-600">
                            Writing Research Paper & Deservation
                          </p>
                          <p className="block mb-2 text-sm font-normal text-gray-500 ">
                            Company : Optimistic Solutions Ltd, London, UK
                          </p>
                        </div>
                        <div>
                          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                            Internship (2014)
                          </h3>
                          <p className="mb-2 text-base font-normal text-gray-600">
                            Thermal Power Plant Engineering
                          </p>
                          <p className="block mb-2 text-sm font-normal text-gray-500 ">
                            Company : Summit Power Plant Limited, Ashulia,
                            Bangladesh
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <div className="rounded-md bg-[#1597e7] border-white border-4 w-auto h-6 absolute lg:left-0 left-1/2 -translate-y-10 lg:-translate-y-0 transform -translate-x-1/2 flex items-center font-primary font-thin justify-center px-2 py-4 text-white">
                    Job Experience
                  </div>
                </div>
              </div>

              {/* <!-- section 4, set by justify-end and sm:pl-8 --> */}

              <div className="mt-16 lg:mt-0 lg:mb-12">
                <div className="flex flex-col lg:flex-row items-center">
                  <motion.div
                    variants={fadeIn("right", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex justify-start w-full mx-auto items-center"
                  >
                    <div className="w-full lg:pr-16 lg:transform lg:translate-x-[60px]">
                      <div className="bg-white/20 flex flex-col gap-3 backdrop-blur border-[1.5px] border-gray-200 shadow-lg rounded-md p-4">
                        <div>
                          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">
                            Bachelor of Science(2014)
                          </h3>
                          <p className="mb-2 text-base font-normal text-gray-600 ">
                            Major: Electrical & Electronic Engineering
                          </p>
                          <p className="block mb-2 text-sm font-normal leading-none text-gray-500 ">
                            International Islamic University, Chittagong,
                            Bangladesh
                          </p>
                        </div>
                        <div>
                          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                            Master of Science(2023)
                          </h3>
                          <p className="mb-2 text-base font-normal text-gray-600">
                            Major: Electrical & Computer Engineering
                          </p>
                          <p className="block mb-2 text-sm font-normal leading-none text-gray-500 ">
                            South China University of Technology, Guangzhou,
                            China.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <div className="rounded-md bg-[#1597e7] border-white border-4 w-auto h-6 absolute lg:left-0 left-1/2 -translate-y-10 lg:-translate-y-0 transform -translate-x-1/2 flex items-center font-primary font-thin justify-center px-2 py-4 text-white">
                    Courses
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main component  */}
    </section>
  );
};

export default Qualification;
