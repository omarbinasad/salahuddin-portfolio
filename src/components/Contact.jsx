import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { AiFillMail, AiOutlinePhone } from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0scmqe1",
        "template_g5v5h6k",
        form.current,
        "kdjN4eLkgyxij3F7c"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="section w-full">
      <div className="container mx-auto mb-5">
        {/* <h2 className="h2 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 mb-10">
          Let's Get In Touch
        </h2> */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            {/* <h4 className="h4 tracking-widest text-transparent bg-clip-text text-center bg-gradient-to-r from-cyan-600 to-blue-700">
              Contact Information
            </h4> */}
            <h2 className="h2 text-center sm:text-start text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-700 mb-10">
              Let's Get In Touch
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <IoMdCall className="border rounded-sm p-1 border-[#1597e7] text-[35px] text-black" />
                <p className="text-[#1597e7] text-[16px] sm:text-lg">
                  <span className="text-black">Phone Number :</span> +86
                  13268314090
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <AiFillMail className="border rounded-sm p-1 border-[#1597e7] text-[35px] text-black" />
                <p className="text-[#1597e7] text-[16px] sm:text-lg">
                  <span className="text-black ">Email :</span>{" "}
                  salah_177@yahoo.com
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <SiGooglescholar className="border rounded-sm p-1 border-[#1597e7] text-[35px] text-black" />
                <p className="text-[#1597e7] text-[16px] sm:text-lg ">
                  <span className="text-black ">Google Scholer Profile :</span>
                  <a
                    className="text-[#1597e7]"
                    href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=u_Cx-9QAAAAJ"
                  >
                    Link
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid md:gap-6">
                <motion.div
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="grid md:grid-row-2 md:gap-6"
                >
                  <div className="md:flex md:gap-5">
                    <div className="relative z-0 w-full mb-2 group">
                      <input
                        type="text"
                        name="user_name"
                        id="user_name"
                        className="py-5 bg-black/5 px-3 block w-full text-sm text-gray-900  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#1597e7] peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="user_name"
                        className="pl-3 peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1597e7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                      >
                        Your Name
                      </label>
                    </div>
                    <div className="relative z-0 w-full mb-2 group">
                      <input
                        type="email"
                        name="user_email"
                        id="user_email"
                        className="py-5  bg-black/5 px-3 block w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#1597e7] peer"
                        placeholder=" "
                        required
                      />
                      <label
                        for="user_email"
                        className="pl-3 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1597e7] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                      >
                        Your Email
                      </label>
                    </div>
                  </div>
                  <div className="relative z-0 w-full mb-2 group">
                    <input
                      type="number"
                      name="user_number"
                      id="user_number"
                      className="py-5 bg-black/5 px-3 block w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#1597e7] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="user_number"
                      className="pl-3 peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1597e7] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                    >
                      Your Contact Number
                    </label>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("right", 0.3)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.7 }}
                  className="grid md:grid-row-2 md:gap-6"
                >
                  <div className="relative z-0 w-full mb-6 group">
                    <textarea
                      resize-none
                      type="text"
                      name="message"
                      id="message"
                      className="block bg-black/5 py-5 px-3 w-full h-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#1597e7] peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="message"
                      className="pl-3 peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#1597e7] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                    >
                      Message
                    </label>
                  </div>
                </motion.div>
              </div>
              <button className="btn btn-sm float-right">Submite</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
