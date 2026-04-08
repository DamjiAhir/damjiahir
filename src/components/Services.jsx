"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight, BsCodeSlash, BsPhone, BsRobot } from "react-icons/bs";

const services = [
    {
        num: "01",
        title: "Web Development",
        description:
            "Building scalable, secure, and highly responsive full-stack web applications tailored to your business needs using Next.js and the MERN stack.",
        icon: <BsCodeSlash />,
        href: "/contact",
    },
    {
        num: "02",
        title: "App Development",
        description:
            "Crafting seamless, cross-platform mobile experiences for iOS and Android with React Native, optimized for blazing-fast performance.",
        icon: <BsPhone />,
        href: "/contact",
    },
    {
        num: "03",
        title: "AI & Automation",
        description:
            "Designing intelligent workflow pipelines using n8n and AI agents to automate order processing, integrate CRMs, and save you hundreds of hours.",
        icon: <BsRobot />,
        href: "/contact",
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group bg-[#1c1c22] p-8 rounded-2xl border border-white/5 hover:border-[#00FFFF]/50 transition-all duration-500 shadow-lg relative overflow-hidden"
                            >
                                {/* Subtle Hover Glow Background */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FFFF]/5 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                                {/* Top Row: Number & Arrow */}
                                <div className="w-full flex justify-between items-center z-10">
                                    <div className="text-5xl font-extrabold text-transparent font-outline-2 group-hover:font-outline-hover transition-all duration-500">
                                        {service.num}
                                    </div>

                                </div>

                                {/* Icon */}
                                <div className="text-4xl text-[#00FFFF] mt-2 group-hover:scale-110 transition-transform duration-500 origin-left">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h2 className="text-[32px] font-bold text-white group-hover:text-[#00FFFF] transition-colors duration-500 leading-tight">
                                    {service.title}
                                </h2>

                                {/* Description */}
                                <p className="text-white/60 leading-relaxed text-[15px]">
                                    {service.description}
                                </p>

                                {/* Decorative Bottom Line */}
                                <div className="w-0 h-[2px] bg-[#00FFFF] group-hover:w-full transition-all duration-500 absolute bottom-0 left-0"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;