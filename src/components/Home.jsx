import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen">
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#a217fe]">Premkumar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#a217fe]">I’m a</span>
            <Typewriter
              options={{
                strings: [
                  "Developer.",
                  "Designer."
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
           "Aspiring Full Stack Developer specialized in the modern JavaScript ecosystem. Proficient in crafting modular frontend components with React and styling with Tailwind CSS, supported by a portfolio of functional web projects. Distinguished by advanced design proficiency in Adobe Creative Suite, allowing for rapid prototyping and high-fidelity visual development. Eager to contribute to a fast-paced team and grow within a full-stack environment."
          </p>

          {/* Contact Information */}
          <div className=" flex flex-col space-y-4 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold ">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#a217fe]" size={20} />
              <span>Tirupur</span>
            </div>
            <div className="flex  items-center gap-3">
              <FaPhoneAlt className="text-[#a217fe]" size={20} />
              <span>+916369340852</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#a217fe]" size={20} />
              <span>premkumar200305@gmail.com</span>
            </div>
          </div>
          {/* Button */}
          <div className="bg-[#a217fe] px-5 py-2 rounded-2xl font-bold ">
            <a href="/Premkumar M.pdf" download>Download CV</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="order-1 justify-center lg:order-2 flex lg:justify-end items-center">
          <img
            className="w-[75%]  rounded-[50px]"
            src="/profile.webp"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
