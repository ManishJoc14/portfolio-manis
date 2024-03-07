"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "./../../../public/projects";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ container: ref });
  const x = useTransform(scrollYProgress, [0, 1], [0, "100%"]);
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center ">
          My Works
        </div>
        <div className="sticky top-0  flex h-screen gap-4 items-center">
          <div className="flex">
            {projects.map((project) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color} `}
                key={project.id}
              >
                <div className="flex flex-col gap-8 text-white ">
                  <h1>{project.title}</h1>
                  <div className="relative">
                    <Image src={project.img} alt="projectImage" fill />
                  </div>
                  <p>{project.desc}</p>
                  <Link href={project.link}>
                    <button>See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
