import React from "react";
// IntersectionObserver hook
import { useInView } from "react-intersection-observer";
// framer motion
import { motion } from "framer-motion";
// varients
import { fadeIn } from "../variants";
// images
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import django from "../assets/icons/django.png";
import python from "../assets/icons/python.png";
import c from "../assets/icons/c.png";
import pytorch from "../assets/icons/pytorch.png";
import numPy from "../assets/icons/numPy.png";
import mongoDb from "../assets/icons/mongoDb.png";
import matPlotLib from "../assets/icons/matplotlib.png";
import matLab from "../assets/icons/matlab.png";
import tF from "../assets/icons/tf.png";
import pandas from "../assets/icons/pandas.png";
import mySql from "../assets/icons/mySql.png";
import networkX from "../assets/icons/networkX.png";
import seaBorn from "../assets/icons/seaborn.png";
import nodeJs from "../assets/icons/nodeJs.png";
// import bootstrap from "../assets/bootstrap.png";
// import tailwind from "../assets/tailwind.png";
// import framerMotion from "../assets/framer.png";
// import next from "../assets/next.png";
// import firebase from "../assets/firebase.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section id="about" className="section pt-0" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-y-10 lg:flex-row lg:items-center lg:gap-x-10 lg:gap-y-0 min-h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.2 }}
            className="flex-auto lg:w-1/2 bg-about bg-contain bg-no-repeat h-[560px] bg-center"
          ></motion.div>
          {/* text */}
          <div className="flex-auto lg:w-1/2">
            <motion.h2
              variants={fadeIn("", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="h2 text-center sm:text-start text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700"
            >
              About me.
            </motion.h2>
            <motion.p
              variants={fadeIn("", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.2 }}
              className="text-gray-900 text-[22px] text-justify mb-6"
            >
              To leverage my skills in engineering and passion for AI research
              to pursue a challenging career as an AI Researcher. Seeking
              opportunities to work with cutting-edge technologies and
              collaborate with experts to drive innovation and make significant
              contributions to the field of artificial intelligence.
            </motion.p>

            <div className="flex flex-col">
              <div className="flex-1 mb-2">
                <h4 className="h4 text-center sm:text-start tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700">
                  Skills
                </h4>
              </div>
              {/* skills */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-4 lg:grid-cols-4 justify-items-center lg:justify-items-start gap-4"
              >
                {/* skills list */}
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur-xl 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={c} alt="skill-image" className="w-full" />
                  </motion.div>
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    C
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={matLab} alt="skill-image" className="w-full" />
                  </motion.div>{" "}
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    Matlab
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={js} alt="skill-image" className="w-full" />
                  </motion.div>{" "}
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    JavaScript
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={react} alt="skill-image" className="w-full" />
                  </motion.div>
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    React
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={nodeJs} alt="skill-image" className="w-full" />
                  </motion.div>
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    Node.js
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={django} alt="skill-image" className="w-full" />
                  </motion.div>
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    Django
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={python} alt="skill-image" className="w-full" />
                  </motion.div>
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    Python
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-5"
                  >
                    <img src={pytorch} alt="skill-image" className="w-full" />
                  </motion.div>{" "}
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    PyTorch
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={tF} alt="skill-image" className="w-full" />
                  </motion.div>{" "}
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    TensorFlow
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={mongoDb} alt="skill-image" className="w-full" />
                  </motion.div>{" "}
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    MongoDB
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={numPy} alt="skill-image" className="w-full" />
                  </motion.div>{" "}
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    NumPy
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img
                      src={matPlotLib}
                      alt="skill-image"
                      className="w-full"
                    />
                  </motion.div>{" "}
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    Matplotlib
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={pandas} alt="skill-image" className="w-full" />
                  </motion.div>{" "}
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    Pandas
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={mySql} alt="skill-image" className="w-full" />
                  </motion.div>{" "}
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    MySQL
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={networkX} alt="skill-image" className="w-full" />
                  </motion.div>{" "}
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    NetworkX
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group relative flex cursor-pointer rounded-md bg-black/5 border-2 border-white backdrop-blur 
              shadow-lg w-16 h-16 md:w-18 md:h-18 xl:w-25 xl:h-25 object-contain p-3"
                  >
                    <img src={seaBorn} alt="skill-image" className="w-full" />
                  </motion.div>{" "}
                  <p className="mt-2 text-black text-sm w-[max-content]">
                    Seaborn
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
