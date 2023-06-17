import React from "react";
// image
import image from "../assets/salahuddin.jpg";
import image2 from "../assets/salahuddin3.png";
import {} from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// framer motion
import { motion } from "framer-motion";
// varients
import { fadeIn } from "../variants";
// link
import { Link } from "react-scroll";
import { useEffect } from "react";
import gsap from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from "gsap";
import { useRef } from "react";

const Banner = () => {
  let innerContainer = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".image-container:after");
  let tl = new TimelineLite();
  useEffect(() => {
    tl.to(innerContainer, 1, { css: { visibility: "visible" } }).to(
      imageReveal,
      1.4,
      { width: "0%", ease: Power2.easeInOut }
    );
  });
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] section flex items-center"
    >
      <div className="container mx-auto">
        <div
          ref={(el) => (innerContainer = el)}
          className="innerContainer flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12"
        >
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left mt-10">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="text-gray-800 text-[50px] font-bold leading-[0.8] lg:text-[60px] xl:text-[85px] mb-8"
            >
              SALAH <span>UDDIN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-10 text-[20px] sm:text-[25px] lg:text-[30px] xl:text-[35px] font-secondary leading-1"
            >
              <span className="mr-4 text-cyan-600">--- Expert on</span>
              <TypeAnimation
                sequence={[
                  "Machine Learning",
                  2000,
                  "Deep Learning",
                  2000,
                  "Data Analysis",
                  4000,
                ]}
                speed={50}
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-8 mx-auto lg:mx-0"
            >
              <button className="btn btn-sm sm:btn-lg">
                <Link smooth={true} spy={true} to="contact">
                  Contact Me
                </Link>
              </button>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1PIUbkjqVYJHQyeoIeZf3975xjyTdR8fx/view?fbclid=IwAR1AXwDWylOQIEOdBqNUvDfabh2nhK9VfAWnyaKh7XVwy6e3eyPtCFxFKuQ"
              >
                <button className="btn-2 btn-sm sm:btn-lg ml-2">Resume</button>
              </a>
            </motion.div>
          </div>
          {/* image */}
          <>
            <motion.div
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="image-container relative lg:flex flex-1 mx-auto max-w-[320px] lg:max-w-[402px] mb-16 lg:mb-0 "
            >
              <img
                ref={(el) => (image = el)}
                className="rounded-sm "
                src={image2}
                alt="my-photo"
              />
            </motion.div>
          </>
        </div>
      </div>
    </section>
  );
};

export default Banner;
