"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Brain from "@/components/Brain";

const AboutPage = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0 lg:w-2/3 xl:1/2 ">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center ">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>

            {/* BIOGRAPHY DESCRIPTION */}
            <p className="text-lg">
              I am a software engineer with a passion for creating and
              developing web applications. I have a strong foundation in
              computer science and software engineering, with a focus on
              front-end development.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              A quick learner and a problem solver.
            </span>

            {/* BIOGRAPHY SIGN */}
            <div className="self-end">
              <Image
                className=""
                src="/mySignature.png"
                alt="signature"
                height={300}
                width={300}
              />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* SKILL LIST */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
            </div>
            {/* SKILL SCROLL SVG */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </svg>
          </div>

          {/* EXPERIENCE CONATAINER */}
          <div className="flex flex-col col-gap-12 justify-center pb-48">
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/* EXPERIENCE LIST */}

            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48 ">
              {/* LEFT */}
              <div className="w-1/3">
                {/* JOB TITLE */}
                <div className="bg-white p-3 rounded-b-lg rounded-s-lg font-semibold">
                  Senior JavaScript Engineer
                </div>
                {/* JOB DESCRIPTION */}
                <div className="p=3 text-sm italic">
                  My current employment. Way better than the position before!
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2024 - Present
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Google
                </div>
              </div>

              {/* CENTER */}
              <div className="w-1/6">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* CIRCLE */}
                  <div className="absolute -left-2 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white"></div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-1/3"></div>
            </div>

            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48 ">
              {/* LEFT */}
              <div className="w-1/3"></div>

              {/* CENTER */}
              <div className="w-1/6">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* CIRCLE */}
                  <div className="absolute -left-2 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white"></div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-1/3">
                {/* JOB TITLE */}
                <div className="bg-white p-3 rounded-b-lg rounded-s-lg font-semibold">
                  Senior JavaScript Engineer
                </div>
                {/* JOB DESCRIPTION */}
                <div className="p=3 text-sm italic">
                  My current employment. Way better than the position before!
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2024 - Present
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Google
                </div>
              </div>
            </div>

            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48 ">
              {/* LEFT */}
              <div className="w-1/3">
                {/* JOB TITLE */}
                <div className="bg-white p-3 rounded-b-lg rounded-s-lg font-semibold">
                  Senior JavaScript Engineer
                </div>
                {/* JOB DESCRIPTION */}
                <div className="p=3 text-sm italic">
                  My current employment. Way better than the position before!
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2024 - Present
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                  Google
                </div>
              </div>

              {/* CENTER */}
              <div className="w-1/6">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* CIRCLE */}
                  <div className="absolute -left-2 w-5 h-5 rounded-full ring-4 ring-red-400 bg-white"></div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-1/3"></div>
            </div>
          </div>
        </div>

        {/* SVG CONTAINER */}
        <div className="hidden lg:block sticky top-0 w-1/3 xl:w-1/2 z-30">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
