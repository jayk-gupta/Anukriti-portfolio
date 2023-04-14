import {motion} from "framer-motion";
const Footer = () => {
  return (
    <footer>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        x: { duration: 1 },
      }}
      
        className="w-11/12 flex flex-col gap-12 md:flex-row md:gap-40   justify-between border-t-[1px]  border-gray-400 pt-16 md:pb-4 mx-auto">
        <div id="text" className="flex flex-col space-y-6">
          <p className="w-full">
            Working in development and design has given me a stronger sense of
            the extraordinary in my digital work.
          </p>
          <h3 className="text-gray-400 text-sm">
            @Anukriti Rathore. All rights reserved 2023
          </h3>
        </div>
        <div id="social-links" className="flex flex-col gap-2">
          <a href="#" className="hover:text-pinkishRed transition-all 700ms">
            Twitter
          </a>
          <a href="#" className="hover:text-pinkishRed transition-all 700ms">
            Linkedin
          </a>
          <a href="#" className="hover:text-pinkishRed transition-all 700ms">
            GitHub
          </a>
          <a href="#" className="hover:text-pinkishRed transition-all 700ms pb-6">
            Email
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
