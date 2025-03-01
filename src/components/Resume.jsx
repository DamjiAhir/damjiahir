"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaJs,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Resume() {
  const aboutMe = {
    title: "About Me",
    discription:
      "Commerce student excelling in web development, blending creativity, technology, and entrepreneurial spirit.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Damji Ahir",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+91) 931 6000 849",
      },
      {
        fieldName: "E-mail",
        fieldValue: "damjiahir13@gmail.com",
      },
      {
        fieldName: "Experience",
        fieldValue: "3+ Years",
      },
      {
        fieldName: "Twitter",
        fieldValue: "@damji0707",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Languages",
        fieldValue: "English Hindi Gujrati",
      },
    ],
  };

  const education = {
    icon: <FaJs />,
    title: "My Education",
    discription:
      "Self-taught commerce student mastering web development through Online Courses and YouTube, driven by passion and persistence.",
    info: [
      {
        institude: "Udamy and YouTube",
        degree: "Back-End Development",
        duration: "March,2024 - Present",
      },
      {
        institude: "Udamy and YouTube",
        degree: "Front-end Development",
        duration: "August,2023-March,2024",
      },
      {
        institude: "Udamy",
        degree: "WordPress and Shopify",
        duration: "Feb-June 2023",
      },
      {
        institude: "Google Online Course",
        degree: "Google Search Campaign",
        duration: "2022",
      },
      {
        institude: "Saurashtra University",
        degree: "B.Com",
        duration: "2022-Present",
      },
      {
        institude: "Brahmanand Vidhyalaya",
        degree: "12th Commerce",
        duration: "2021-2022",
      },
    ],
  };

  const skills = {
    title: "My Skills",
    discription:
      "Passionate web developer fusing creativity and code, self-taught through relentless dedication and innovation.",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html5",
      },
      {
        icon: <FaCss3 />,
        name: "css",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaReact />,
        name: "reactJs",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwindcss",
      },
      {
        icon: <FaNodeJs />,
        name: "NodeJs",
      },
      {
        icon: <FaGithub />,
        name: "github",
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-10 xl:py-10 xl:mt-12"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="Skills"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex xl:flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="Skills">Skills</TabsTrigger>
            <TabsTrigger value="Education">Education</TabsTrigger>
            <TabsTrigger value="AboutMe">About Me</TabsTrigger>
          </TabsList>
          {/* {content} */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="Skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-center font-bold text-4xl ">
                  {skills.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-center leading-6 xl:leading-7 ">
                  {skills.discription}
                </p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-5 md:grid-cols-4 xl:gap-[30px]">
                {skills.skillList.map((items, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger
                            aria-label={items.name}
                            className="w-full h-[150px] flex items-center justify-center bg-[#232329] rounded-xl gap-4 text-6xl hover:text-[#00FFFF] transition-all duration-300"
                          >
                            <div>{items.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{items.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            {/* {education} */}
            <TabsContent value="Education" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-center font-bold text-4xl ">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-center leading-6 xl:leading-7 ">
                  {education.discription}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-5">
                    {education.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="h-[184px] bg-[#232329] rounded-xl py-6 px-10 felx justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-[#00FFFF]">
                            {item.duration}
                          </span>
                          <h3 className="max-w-[260px] max-h-[60px] text-xl text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="h-[6px] w-[6px]  rounded-full bg-[#00FFFF] "></span>
                            <p className="text-white/60">{item.institude}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* {aboutme} */}
            <TabsContent value="AboutMe" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-center font-bold text-4xl ">
                  {aboutMe.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-center leading-6 xl:leading-7 ">
                  {aboutMe.discription}
                </p>
              </div>
              <ul className="grid grid-cols-1 mt-9 xl:grid-cols-2 gap-y-6 m-w-[600px] mx-auto xl:mx-0 ">
                {aboutMe.info.map((items, index) => {
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-start xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{items.fieldName}</span>
                      <span className="text-xl">{items.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
