import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 transition-colors duration-500"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 lg:-ml-42 md:-ml-24 sm:ml-0 transition-all duration-500">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold  dark:text-white mb-4 leading-tight">
            Mohd Aman
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-purple-600 dark:text-[#8245ec] leading-tight">
            <span className="text-gray-900 dark:text-white">I am a </span>
            <ReactTypingEffect
              text={["Fullstack Developer", "UI/UX Designer", "Coder", "DevOps Enthusiast"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-purple-600 dark:text-[#8245ec]">
                  {cursor}
                </span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-700 dark:text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer specializing in scalable web
            applications using the MERN stack, with experience in building
            efficient front-end and back-end systems. Familiar with DevOps tools
            including Linux, Docker, Jenkins, CI/CD, and Kubernetes for
            deployment and optimization.
          </p>

          <a
            href="https://drive.google.com/file/d/1reC9OysU-zg914NX2a_SrFGb_rLinIr2/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow: "0 0 5px #8245ec, 0 0 10px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end lg:-mr-28 md:mr-24 sm:mr-0 transition-all duration-500">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[28rem] md:h-[28rem] border-4 border-purple-600 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Mohd Aman"
              className="w-full h-full -mt-3 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
