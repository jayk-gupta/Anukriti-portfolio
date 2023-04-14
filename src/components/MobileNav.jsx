import React, { useState } from "react";
import { motion } from "framer-motion";

const MobileNav = () => {
  const [IsOpen, setIsOpen] = useState(false);
  
  const clickHandler = () => {
    setIsOpen( !IsOpen);
   }
  return (
    <motion.div>
      <motion.div 
        className=" h-screen w-1/2 text-xl text-white flex flex-col items-center bg-black p-4 space-y-6 absolute top-0 right-0 z-[60] pt-24"
        style={{ visibility: IsOpen ? "visible" : "hidden" }}
        initial={{  opacity : 1 }} animate={{ opacity: IsOpen ? 1 : 0 }} transition={{ duration: 0.5 }}
      >
        <a href="#" className=" text-inherit ">
          About
        </a>
        <a href="#" className="  text-inherit">
          My Skills
        </a>
        <a href="#" className="  text-inherit">
          Projects
        </a>
        <a href="#" className="  text-inherit">
          Blog
        </a>
      </motion.div>
      <button className="md:hidden absolute top-0 right-0 z-[70] m-4" onClick={clickHandler}>
        <i className="fa-solid fa-bars text-white text-2xl"></i>
      </button>
    </motion.div>
  );
}
 
export default MobileNav;