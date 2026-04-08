"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsShieldLockFill } from "react-icons/bs";
import SliderBtn from "./SliderBtn";

const projectsList = [
  {
    num: "01",
    title: "Avadh Kitchen Equipments",
    category: "Industrial B2B Ecosystem",
    description:
      "A high-performance mobile solution for Rajkot's leading industrial kitchen manufacturer. I engineered an enterprise-grade inventory system that tracks specialized heavy machinery, reducing manual stock errors by 40% and streamlining client quotations.",
    stack: ["React Native", "Next.js", "MongoDB"],
    fileName: "avadh-inventory.tsx",
    codeSnippet: `export const EquipmentTracker = () => {
  const [stock, setStock] = useInventory('avadh_central');

  /* Handle specialized industrial hardware scaling */
  return stock
    .filter(item => item.category === 'heavy_duty')
    .map(unit => <AssetCard key={unit.id} data={unit} />);
};`
  },
  {
    num: "02",
    title: "Rajkot Watch Hub",
    category: "Marketplace Automation",
    description:
      "A localized order management engine specifically optimized for the high-volume retail landscape of Rajkot. I built a custom admin architecture that handles the complete order lifecycle—from secure intake to automated dispatch logs.",
    stack: ["PHP", "MySQL", "JavaScript"],
    fileName: "order-controller.php",
    codeSnippet: `public function syncRetailOrder($payload) {
  $local_tax = 18.00; // Local Compliance
  
  $db->prepare("INSERT INTO rajkot_sales (item, status) VALUES (?, ?)")
     ->execute([$payload->watch_id, 'processing']);
     
  return Response::json(['status' => 'synchronized']);
}`
  },
  {
    num: "03",
    title: "AI Multi-Channel Agent",
    category: "Workflow Engineering",
    description:
      "An AI-driven automation pipeline utilizing n8n to connect WhatsApp and Telegram. I integrated OpenAI to analyze customer intent, allowing the system to automatically capture orders and update CRMs 24/7 without human intervention.",
    stack: ["n8n", "OpenAI API", "WhatsApp Cloud"],
    fileName: "ai-webhook.json",
    codeSnippet: `{
  "node": "n8n-nodes-base.openAi",
  "parameters": {
    "resource": "chat",
    "prompt": "Extract order details from WhatsApp msg",
    "channels": ["Telegram", "WhatsApp"]
  },
  "security": "Encrypted_Webhook_Active"
}`
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(projectsList[0]);

  const handleSlideChange = (swiper) => {
    const currentSlideIndex = swiper.activeIndex;
    setProjects(projectsList[currentSlideIndex]);
  };

  return (
    <>
      {/* Component-Specific Cyber Scrollbar Styles */}
      <style>{`
        .cyber-scrollbar::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }
        .cyber-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 255, 255, 0.05);
          border-radius: 10px;
        }
        .cyber-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 255, 0.4);
          border-radius: 10px;
        }
        .cyber-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 255, 0.9);
        }
      `}</style>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="min-h-[80vh] flex justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">

            {/* Animated Left Content Column */}
            <div className="w-full xl:w-[50%] xl:h-[450px] flex flex-col xl:justify-center order-2 xl:order-none relative pt-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={projects.num}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col gap-[20px]"
                >

                  {/* Outline Number - Fixed Clipping */}
                  <div className="text-8xl leading-none font-extrabold text-transparent font-outline-2 select-none pt-2 pb-2">
                    {projects.num}
                  </div>

                  {/* Category & Title */}
                  <div>
                    <h3 className="text-[#00FFFF] font-mono text-sm tracking-widest uppercase mb-2">
                      // {projects.category}
                    </h3>
                    <h2 className="text-[42px] text-white font-bold leading-tight capitalize">
                      {projects.title}
                    </h2>
                  </div>

                  {/* Description with Custom Scrollbar */}
                  <p className="text-white/70 max-w-[450px] text-lg leading-relaxed max-h-[110px] overflow-y-auto pr-4 cyber-scrollbar">
                    {projects.description}
                  </p>

                  {/* Tech Stack */}
                  <ul className="flex flex-wrap gap-3 mt-2">
                    {projects.stack.map((item, index) => {
                      return (
                        <li
                          className="text-sm font-medium text-[#00FFFF] bg-[#00FFFF]/10 px-3 py-1.5 rounded border border-[#00FFFF]/20"
                          key={index}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>

                  <div className="border-b border-white/10 w-full my-2"></div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Slider Column (IDE Mockup) */}
            <div className="w-full xl:w-[50%] mt-8 xl:mt-0 relative">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                className="xl:h-[460px] pb-12 xl:pb-0"
              >
                {projectsList.map((project, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="h-[400px] xl:h-[460px] w-full rounded-xl flex flex-col bg-[#111115] border border-white/10 overflow-hidden shadow-2xl relative group">

                        {/* IDE Header */}
                        <div className="h-12 bg-[#1c1c22] border-b border-white/5 flex items-center justify-between px-4 w-full">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                          </div>
                          <div className="text-[12px] text-white/40 font-mono tracking-widest bg-black/40 px-3 py-1 rounded">
                            {project.fileName}
                          </div>
                        </div>

                        {/* Code Area */}
                        <div className="flex-1 relative p-6 overflow-hidden bg-[#0d0d0f] flex flex-col justify-center">

                          {/* Security Badge */}
                          <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#00FFFF]/10 border border-[#00FFFF]/30 px-3 py-1.5 rounded backdrop-blur-sm z-20">
                            <BsShieldLockFill className="text-[#00FFFF] text-xs" />
                            <span className="text-[10px] text-[#00FFFF] font-mono font-bold tracking-widest uppercase">Secure</span>
                          </div>

                          {/* Plain Text Code Snippet with Scrollbar */}
                          <pre className="z-10 w-full overflow-x-auto cyber-scrollbar pb-4">
                            <code className="text-[#00FFFF]/80 font-mono text-[14px] leading-loose">
                              {project.codeSnippet}
                            </code>
                          </pre>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}

                {/* Slider Controls */}
                <SliderBtn
                  containerStyle="flex gap-3 absolute right-0 bottom-0 z-20 w-full justify-end px-2 xl:px-0"
                  btnStyle="text-[20px] w-[45px] h-[45px] bg-[#1c1c22] border border-[#00FFFF]/50 flex items-center justify-center text-[#00FFFF] hover:bg-[#00FFFF] hover:text-[#1c1c22] transition-all duration-300 rounded"
                />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Projects;