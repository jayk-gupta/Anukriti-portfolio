
import { motion } from "framer-motion";
const Projects = () => { 
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        x: { duration: 1 },
      }}
      id="projects"
      className=" py-4"
    >
      <h2 className="text-pinkishRed text-lg  xl:text-2xl">03. Projects</h2>
      <div className="w-11/12 flex flex-col mt-12 mb-20  gap-6 md:grid mx-auto md:mx-0 md:grid-cols-3 md:space-x-4  xl:ml-16">
        {/* <!-- 1 --> */}
        <div
          id="project-1"
          className="flex flex-col space-y-6 
          hover:bg-[#2c2c2c]
           bg-[#222222] p-6 rounded border-[1px] border-pinkishRed"
        >
          <a className="hover:cursor-pointer">
            {" "}
            <h3 className=" text-lg md:text-xl text-pinkishRed">
              Twitter clone
            </h3>
          </a>
          <p className="text-sm">
            Build Twitter clone using HTML,CSS and Javascript.
          </p>
          <div id="tech" className="flex space-x-4 text-gray-400">
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
          </div>
        </div>
        {/* <!-- 2 --> */}
        <div
          id="project-2"
          className="flex flex-col space-y-6
                   hover:bg-[#2c2c2c]
           bg-[#222222] p-6 rounded border-[1px] border-pinkishRed"
        >
          <a className="hover:cursor-pointer">
            {" "}
            <h3 className=" text-lg md:text-xl text-pinkishRed">
              Netflix clone
            </h3>
          </a>
          <p className="text-sm">
            Build Netflix clone using HTML,CSS and Javascript.
          </p>
          <div id="tech" className="flex space-x-4 text-gray-400">
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
          </div>
        </div>
        {/* <!-- 3 --> */}
        <div
          id="project-3"
          className="flex flex-col space-y-6
                   hover:bg-[#2c2c2c]
           bg-[#222222] p-6 rounded border-[1px] border-pinkishRed"
        >
          <a className="hover:cursor-pointer">
            <h3 className=" text-lg md:text-xl text-pinkishRed">
              E-commerce site
            </h3>
          </a>
          <p className="text-sm">
            Build a E-commerce clone using HTML,CSS and Javascript.
          </p>
          <div id="tech" className="flex space-x-4 text-gray-400">
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
          </div>
        </div>
      </div>
    </motion.div>
  ); 
}

export default Projects;