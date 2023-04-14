import {motion } from "framer-motion";

const Skills = () => {
  return (
       <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        x: { duration: 1 },
      }}
    
      id="skills-section" className=" md:py-4 md:mb-16">
      <h2 className="text-pinkishRed text-lg xl:text-2xl mb-4">02. Skills</h2>
      <p className="mt-4 mb-20">
        <p className="md:mb-6 md:ml-16">HTML</p>
        <p className="md:mb-6 md:ml-16">CSS</p>
        <p className="md:mb-6 md:ml-16">Javascript</p>
        <p className="md:mb-6 md:ml-16">UI Design</p>
        <p className="md:mb-6 md:ml-16">UX Design</p>
      </p>
    </motion.div>
  );
};

export default Skills;
