

// function
const Nav = () => {
  return (
    <nav
      className=" flex w-11/12 mx-auto  py-6  justify-between items-center z-50 md:w-11/12  md:py-6 md:px-0 lg:py-6 
    xl:py-6 xl:px-0 "
    >
      <div>
        {/* <!-- ----logo ------> */}
        <a>
          <img
            src="./public/static/images/ar-high-resolution-logo-color-on-transparent-background.png"
            className="w-10 hover:hue-rotate-60 md:w-12 xl:w-16"
            alt="logo"
            id="logo"
          />
        </a>
      </div>
      {/* <!------------------ Menu items -----------> */}
      <div
        className="hidden text-sm text-white space-x-4 md:flex md:space-x-8 md:mr-40 lg:px-6 lg:text-xl  xl:space-x-16  xl:mr-60  xl:text-2xl z-50"
        id="navigation"
      >
        <a
          href="#"
          className=" hover:text-pinkishRed nav-item transition-all duration-500 ease-in text-inherit"
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-pinkishRed nav-item transition-all duration-500 ease-in text-inherit"
        >
          My Skills
        </a>
        <a
          href="#"
          className="hover:text-pinkishRed nav-item transition-all duration-500 ease-in text-inherit"
        >
          Projects
        </a>
        <a
          href="#"
          className="hover:text-pinkishRed nav-item transition-all duration-500 ease-in text-inherit"
        >
          Blog
        </a>
      </div>
      {/* <!-- Get in Touch --> */}
      <div>
        <a
          href="#"
          className="hidden lg:visible border-[1px] py-2 px-1 text-[0.8rem] md:block z-[100] md:px-2 md:py-1 md:text-sm lg:text-lg lg:px-4 lg:py-2 lg:block lg:hover:bg-pinkishRed  lg:hover:cursor-pointer lg:hover:transition-all duration-500 ease-in-out "
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
};

export default Nav;
