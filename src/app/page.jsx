"use client";
import React, { useRef } from "react";
import ContactForm from "@/components/ContactForm";
import Photo from "@/components/Photo";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

export default function Home() {
  const targetDivRef = useRef(null);
  const scrollToDiv = () => {
    targetDivRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <section className="h-full ">
        <div className="container mx-auto h-full ">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-5 xl:pb- ">
            {/* {text} */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Web Developer</span>
              <h1 className="h1 mb-3 ">
                Hello I&apos;m <br />
                <span className=" text-[#00FFFF]">Damji Ahir</span>
              </h1>
              <p className="max-w-[500px] leading-5 xl:leading-7 mb-5 xl:mb-8 text-white/80">
                Building efficient, user-friendly websites with full-stack
                expertise for seamless digital experiences.
              </p>
              {/* socialLinks */}
              <div className="flex flex-col xl:flex-row gap-3 mt-3 items-center">
                <Button
                  variant="outline"
                  className=" rounded-full flex items-center gap-2 "
                  onClick={scrollToDiv}
                >
                  Contact Me
                </Button>
                <Social
                  containerStyle="flex gap-5"
                  iconStyle="h-9 w-9 border border-[#00FFFF] text-[#00FFFF] rounded-full flex justify-center items-center hover:border-00FFFF hover:text-primary hover:bg-[#00FFFF] transition ease-in-out duration-500"
                />
              </div>
            </div>

            {/* photo */}
            <div className="order-1 xl:order-none  xl:mb-0 xl:mr-12">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
      <section className="sm:pb-8">
        <Resume />
      </section>
      <section>
        <Projects />
      </section>
      <div ref={targetDivRef}>
        <ContactForm />
      </div>
    </>
  );
}
