"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "./../../../public/projects";
import Image from "next/image";
import Link from "next/link";

const styles = {
  RedToBlue: "linear-gradient(to right, #fde3e4, #93c5fd)",
  BlueToViolet: "linear-gradient(to right, #93c5fd, #c4b5fd)",
  VioletToPurple: "linear-gradient(to right,#c4b5fd, #d8b4fe)",
  PurpleToSky: "linear-gradient(to right, #d8b4fe,#67e8f9)",
  SkyToGreen: "linear-gradient(to right, #67e8f9,#65799b)",
  GreenToRed: "linear-gradient(to right, #65799b, #5e2563)",
};

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[700vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center ">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div className="flex" style={{ x }}>
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-100 to-red-100 " />
            {projects.map((project) => (
              <div
                style={{ background: styles[project.color] }}
                className={`h-screen w-screen flex items-center justify-center1`}
                key={project.id}
              >
                <div className="flex flex-col gap-8 text-white ">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {project.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[380px]">
                    <Image src={project.img} alt="projectImage" fill />
                  </div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl-w[600px]">
                    {project.desc}
                  </p>
                  <div className="flex justify-end">
                    <Link href={project.codelink} target="_blank" className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                        See Code
                      </button>
                    </Link>
                    <Link href={project.demolink} target="_blank" className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center text-center mt-20">
        <h1 className="text-6xl sm:text-8xl">Do you have projects?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120, 0 a 60,60 0 0,1 -120,0"
              />
            </defs>
            <text fill="#000">
              <textpath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textpath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className=" cursor-pointer flex items-center justify-center w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full bg-black text-white  "
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
