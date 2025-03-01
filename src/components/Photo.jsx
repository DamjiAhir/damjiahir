"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute ml-12 mt-4 xl:ml-0 xl:mt-0 h-[220px] w-[288px] xl:h-[330px] xl:w-[330px]  mix-blend-lighten"
        >
          <Image
            src="/assets/myImage1.png"
            priority
            quality={100}
            sizes=""
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>
        <motion.svg
          className="ml-16 xl:ml-0 w-[310px] h-[300px] xl:w-[420px] xl:h-[420px] "
          fill="tranparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="202"
            cy="200"
            r="199"
            stroke="#00FFFF"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo;
