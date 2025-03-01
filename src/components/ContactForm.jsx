"use client";
import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const info = [
  { icon: <FaPhoneAlt />, title: "Phone", discription: "(+91) 9316000849" },
  {
    icon: <FaEnvelope />,
    title: "E-Mail",
    discription: "damjiahir13@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    discription: "Gharana Kutch Gujrat-370150",
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
        setSuccess("success!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phonenumber: "",
          message: "",
        });
      } else {
        setSuccess("Failed to send the message. Try again later.");
      }
    } catch (error) {
      setSuccess("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none ">
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h1 className="text-4xl font-bold text-[#00ffff]">
                Let's Work Together
              </h1>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                omnis dicta, laborum magni sint.
              </p>
              {/* inputs */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  type="text"
                  placeholder="Last Name"
                />
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email address"
                />
                <Input
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  type="text"
                  placeholder="Phone number"
                />
              </div>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                type="text"
                placeholder="Type your message here..."
              />
              <div className="flex gap-4 items-center">
                <Button
                  type="submit"
                  disabled={loading}
                  variant="outline"
                  className="max-w-40 bg-[#00ffff] hover:bg-[#00b7b7] text-black rounded-xl"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                <h6
                  className={
                    success === "success!" ? "text-green-500" : "text-red-500"
                  }
                >
                  {success}
                </h6>
              </div>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center order-1 xl:order-none xl:justify-end mb-8 xl:mb-0">
            <ul className="flex flex-col gap-5 sm:gap-10">
              {info.map((items, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="h-[52px] w-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] text-[#00ffff] rounded-xl flex items-center justify-center ">
                      <div className="text-[28px]">{items.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{items.title}</p>
                      <h3 className="text-xl">
                        {items.discription}
                        {success}
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
