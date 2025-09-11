"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import SliderBtn from "./SliderBtn";

const projectsList = [
  {
    num: "01",
    title: "Project 1",
    category: "FrontEnd",
    discription:
      "Create dynamic, responsive, and visually appealing user interfaces.",
    stack: [
      { name: "Html5" },
      { name: "Css3" },
      { name: "JavaScript" },
      { name: "ReactJs" },
    ],
    image: "/assets/Screenshot 2025-07-09 114842.png",
    github: "https://github.com/DamjiAhir/mediprime",
    liveweb: "https://mediprime-phi.vercel.app/",
  },
  {
    num: "02",
    title: "Project 2",
    category: "Full-Stack",
    discription:
      "Develop end-to-end applications with server-side rendering and a rich UI.",
    stack: [{ name: "NextJs" }, { name: "Tailwind.css" }, { name: "Shadcn" }],
    image: "/assets/fullstack.png",
    github: "https://github.com/DamjiAhir",
    liveweb: "https://github.com/DamjiAhir",
  },
  {
    num: "03",
    title: "Project 3",
    category: "Backend",
    discription:
      "Handle server-side logic, API development, and database interactions.",
    stack: [{ name: "NodeJS" }, { name: "ExpressJs" }, { name: "MongoDB" }],
    image: "/assets/backend.png",
    github: "https://github.com/DamjiAhir/mediprime",
    liveweb: "https://mediprime-phi.vercel.app/",
  },
];
const Projects = () => {
  const [projects, setProjects] = useState(projectsList[0]);

  const handleSlideChange = (swiper) => {
    const currentSlideIndex = swiper.activeIndex;
    setProjects(projectsList[currentSlideIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[450px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[25px] h-[50%]">
              {/* uotlinenum */}
              <div className="text-8xl leading-none font-extrabold text-transparent font-outline-2">
                {projects.num}
              </div>
              {/* category */}

              <h2 className="text-[42px] text-white font-bold leading-none hover:text-[#00FFFF] transition-all duration-500  capitalize ">
                {projects.category} Project
              </h2>
              {/* discription*/}
              <p className="text-white/60 max-w-[400px] capitalize">
                {projects.discription}
              </p>
              {/* Stacke */}
              <ul className="flex gap-3">
                {projects.stack.map((items, index) => {
                  return (
                    <li
                      className="text-lg sm:text-xl text-[#00FFFF]"
                      key={index}
                    >
                      {items.name}
                      {/* invertedcoma */}
                      {index !== projects.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/60"></div>
              {/* buttons */}
              <div className="flex gap-3">
                <Link href={projects.liveweb} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        aria-label={projects.title}
                        className="h-[70px] w-[70px] rounded-full flex justify-center items-center group  bg-white/5"
                      >
                        <BsArrowUpRight className=" text-3xl hover:text-[#00FFFF]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={projects.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        aria-label={projects.title}
                        className="h-[70px] w-[70px] rounded-full flex justify-center items-center group  bg-white/5"
                      >
                        <BsGithub className=" text-3xl hover:text-[#00FFFF]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px]"
            >
              {projectsList.map((project, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute w-full h-full top-0 bottom-0 z-10 bg-black/10"></div>
                      {/* image */}
                      <div className="relative h-full w-full">
                        <Image
                          src={project.image}
                          fill
                          sizes=""
                          alt=""
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <SliderBtn
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyle="text-[22px] w-[44px] h-[44px] bg-[#00FFFF] flex items-center justify-center text-black hover:bg-[#00b7b7] transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
