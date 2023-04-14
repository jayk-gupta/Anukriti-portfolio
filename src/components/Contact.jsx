const Contact = () => { 
  return (
    <div className="hidden md:flex md:fixed md:flex-col md:space-y-2 md:items-center md:top-[75vh] md:left-10">
      <div className="">
        <a href="https://twitter.com/_anukritirathor">
          <i className="fa-brands fa-twitter text-lg  hover:text-pinkishRed hover:transition-all duration-500 ease-in hover:relative bottom-[0.2rem]"></i>
        </a>
      </div>
      <div className="">
        <a href="https://www.linkedin.com/in/anukriti-rathore-a4a8a2215/">
          <i className="fa-brands fa-linkedin-in text-lg  hover:text-pinkishRed hover:transition duration-700 ease-in hover:relative bottom-[0.2rem]"></i>
        </a>
      </div>
      <div className="">
        <i className="fa-brands fa-github text-lg hover:text-pinkishRed hover:transition-all duration-500 ease-in hover:relative bottom-[0.2rem]"></i>
      </div>
      <div className="line h-5 w-1 bg-white"></div>
    </div>
  );
}

export default Contact;