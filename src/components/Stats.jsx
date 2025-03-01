"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Years of Experience" },
  { num: 18, text: "Projects Compeleted" },
  { num: 7, text: "Technoligies Mastered" },
  { num: 500, text: "Code Commited" },
];
function Stats() {
  return (
    <section className="mt-6 p-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto0">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-[6px] sm:gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-2xl sm:text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
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
