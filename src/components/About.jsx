import {motion} from "framer-motion";
/*
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
/>
*/ 
const About = () => { 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        x: { duration: 1 },
      }}
      className="xl:text-2xl xl:py-6 xl:mb-16 "
    >
      <h2 className="text-pinkishRed text-lg lg:text-2xl ">01. About Me</h2>
      <p className="mt-4 mb-20 xl:py-6 xl:tracking-wider xl:leading-6 xl:ml-12 xl:text-lg md:w-1/2  ">
        A web developer and UI/UX enthusiast, I am currently learning and
        Developing my skills in web development. I am also exploring the latest
        technologies in the field of Technology.
        <br /> <br />
        In my work, I strive to create engaging and user-friendly experiences
        Websites and applications, and I am always looking for upcoming
        Challenges and Opportunities to grow my skills.
      </p>
    </motion.div>
  );
}

export default About;