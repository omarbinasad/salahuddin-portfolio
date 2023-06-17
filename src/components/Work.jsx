import React, { useEffect, useState } from "react";
// icon
import { BsCode, BsEye, BsCodeSlash } from "react-icons/bs";
// framer motion
import { motion, AnimatePresence } from "framer-motion";
// varients
import { fadeIn } from "../variants";
// btns
// import { btns } from "../Data";
// Tiltjs
import Title from "react-vanilla-tilt";
// projects from data
import { projects } from "../Data";

const Work = () => {
  const [filterProjects, setFilterProjects] = useState([]);
  useEffect(() => {
    setFilterProjects(projects);
  }, []);
  // const handleClick = (e) => {
  //   let btnType = e.target.value;
  //   const newFilterProjects = projects.filter(
  //     (project) => project.value === btnType
  //   );
  //   btnType !== "All"
  //     ? setFilterProjects(newFilterProjects)
  //     : setFilterProjects(projects);
  // };
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <h2 className="h2 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 mb-10">
          My Projects
        </h2>
        {/* <div className="flex flex-wrap gap-8 justify-center mb-10">
          {btns.map((btn) => {
            return (
              <button
                className=" text-black rounded border px-3 py-1 cursor-pointer"
                onClick={handleClick}
                key={btn.id}
                value={btn.value}
              >
                {btn.name}
              </button>
            );
          })}
        </div> */}
        <AnimatePresence>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-7 "
            // layout
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // viewport={{ once: true, amount: 0.7 }}
            // transition={{ duration: 1 }}
          >
            {filterProjects &&
              filterProjects.map((filterProject) => {
                return (
                  // <motion.div> --> <Title>
                  <motion.div
                    key={filterProject.id}
                    layout
                    initial={{ scale: 0, opacity: 0 }}
                    // animate={{ scale: 1, opacity: 1 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.6 }}
                    className=" relative cursor-pointer items-center justify-center overflow-hidden p-6 bg-white bg-opacity-[0.1] border border-gray-200 rounded-lg card-shadow backdrop-filter backdrop-blur-sm"
                  >
                    <div className="flex flex-col gap-3 h-full justify-between items-start">
                      <a href="#">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                          {filterProject.name}
                        </h5>
                      </a>
                      <p className="font-normal text-gray-800 ">
                        {filterProject.techs}
                      </p>
                      <p className="text-gray-600 text-[16px] text-justify leading-6">
                        {filterProject.description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center btn-3 btn-xs"
                      >
                        See Details
                        <svg
                          aria-hidden="true"
                          className="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </motion.div>

                  // <motion.div
                  //   key={filterProject.id}
                  //   layout
                  //   initial={{ scale: 0, opacity: 0 }}
                  //   // animate={{ scale: 1, opacity: 1 }}
                  //   whileInView={{ scale: 1, opacity: 1 }}
                  //   viewport={{ once: true, amount: 0.7 }}
                  //   transition={{ duration: 0.6 }}
                  //   className="border-4 group relative cursor-pointer items-center justify-center overflow-hidden "
                  // >
                  //   <div className="h-96 w-full">
                  //     <motion.img
                  //       className="w-full object-cover bg-top transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  //       src={filterProject.image}
                  //       alt=""
                  //     />
                  //   </div>
                  //   <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></motion.div>
                  //   <motion.div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                  //     <h1 className="top-1/3 group-hover:top-auto  group-hover:relative absolute font-dmserif text-2xl font-bold text-white">
                  //       {filterProject.name}
                  //     </h1>
                  //     <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  //       {filterProject.description}
                  //     </p>
                  //     <div className="flex gap-4">
                  //       <button className="rounded bg-white py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60">
                  //         <a href={filterProject.liveLink} target="_blank">
                  //           <BsCodeSlash />
                  //         </a>
                  //       </button>
                  //       <button className="rounded bg-white py-2 px-3.5 font-com text-sm capitalize text-black shadow shadow-black/60">
                  //         <a href={filterProject.liveLink} target="_blank">
                  //           <BsEye />
                  //         </a>
                  //       </button>
                  //     </div>
                  //   </motion.div>
                  // </motion.div>
                );
              })}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Work;
