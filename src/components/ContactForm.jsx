"use client";
import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "(+91) 9316000849" },
  {
    icon: <FaEnvelope />,
    title: "E-Mail",
    description: "damjiahir13@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Rajkot, Gujarat - 360002, India",
  },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phonenumber: "",
          message: "",
        });
      } else {
        setSuccess("Failed to send. Please try again.");
      }
    } catch (error) {
      setSuccess("Network error. Please try again later.");
    } finally {
      setLoading(false);

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[50px] xl:gap-[30px]">

          {/* Form Section */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-6 p-10 bg-[#1c1c22] rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle Background Glow */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00FFFF]/5 rounded-full blur-[60px] pointer-events-none"></div>

              <div>
                <h1 className="text-4xl font-bold text-[#00FFFF] mb-3">
                  Let&apos;s Work Together
                </h1>
                <p className="text-white/60 leading-relaxed max-w-[90%]">
                  Looking to build a secure web application or automate your business workflows? Fill out the form below, and I&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  required
                  className="bg-[#27272c] border-none text-white focus:ring-1 focus:ring-[#00FFFF]/50 placeholder:text-white/40 h-12"
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                  required
                  className="bg-[#27272c] border-none text-white focus:ring-1 focus:ring-[#00FFFF]/50 placeholder:text-white/40 h-12"
                />
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  required
                  className="bg-[#27272c] border-none text-white focus:ring-1 focus:ring-[#00FFFF]/50 placeholder:text-white/40 h-12"
                />
                <Input
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-[#27272c] border-none text-white focus:ring-1 focus:ring-[#00FFFF]/50 placeholder:text-white/40 h-12"
                />
              </div>

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                className="bg-[#27272c] border-none text-white focus:ring-1 focus:ring-[#00FFFF]/50 placeholder:text-white/40 min-h-[150px] resize-none"
              />

              <div className="flex flex-col sm:flex-row gap-4 items-center mt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto h-12 px-8 bg-[#00FFFF] hover:bg-white text-[#1c1c22] font-bold tracking-wide rounded-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <FaSpinner className="animate-spin text-lg" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>

                {/* Notification Pill */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${success.includes("successfully")
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}
                  >
                    {success}
                  </motion.div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex-1 flex items-center order-1 xl:order-none xl:justify-end mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8 w-full max-w-[400px]">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 group cursor-default">
                    {/* Icon Box */}
                    <div className="w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] bg-[#1c1c22] border border-white/5 group-hover:border-[#00FFFF]/30 text-[#00FFFF] rounded-xl flex items-center justify-center transition-all duration-300 shadow-lg group-hover:bg-[#00FFFF]/5">
                      <div className="text-[24px] xl:text-[28px] group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                    </div>

                    {/* Text Details */}
                    <div className="flex-1">
                      <p className="text-white/50 text-sm mb-1 uppercase tracking-wider font-medium">
                        {item.title}
                      </p>
                      <h3 className="text-lg xl:text-xl font-medium text-white group-hover:text-[#00FFFF] transition-colors duration-300">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
}