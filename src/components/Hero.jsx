import './Hero.css';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 2,
        x: { duration: 1 },
      }}
      id="section-hero"
      className="pb-32 md:pb-96 "
    >
      {/* <!-- background image --> */}
      <div id="back-ground" className="-z-50">
        <img
          className="anu -z-50 w-[30rem]  md:w-[38rem]  md:top-0 md:right-[-3rem] lg:top-[-4rem] lg:right-0 lg:w-[36rem] xl:w-[50rem]"
          src="            "
          alt=""
        />
      </div>
      {/* <!-- Name --> */}
      <div
        id="content"
        className="mt-[24rem] w-72  mx-auto flex flex-col items-center md:w-full md:py-12 md:mt-48  md:items-start"
      >
        <h1
          id="name"
          className="text-4xl text-white  hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pinkishRed to-violet-500 transition-all duration-500 ease-in-out z-50 md:text-4xl lg:text-8xl mb-4"
        >
          Anukriti Rathore
        </h1>
        <p
          id="intro-para"
          className="text-center z-50 text-gray-300 text-sm md:text-xs lg:text-base xl:text-base lg:text-center"
        >
          Hello, my name is Anukriti, nice to meet you!
        </p>
      </div>
    </motion.div>
  );
}

export default Hero;
