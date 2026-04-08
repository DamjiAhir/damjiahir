"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Years of Experience" },
  { num: 18, text: "Projects Completed" },
  { num: 7, text: "Technologies Mastered" },
  { num: 500, text: "Code Commits" },
];

function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start group"
              >
                {/* Number with Cyan Glow Effect */}
                <div className="flex items-center">
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={1}
                    className="text-4xl xl:text-6xl font-extrabold text-[#00FFFF] drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
                  />
                  <span className="text-3xl xl:text-5xl font-extrabold text-[#00FFFF] ml-1 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
                    +
                  </span>
                </div>

                {/* Text Label */}
                <p
                  className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                    } leading-snug text-white/70 group-hover:text-white transition-colors duration-300 font-medium`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats; 