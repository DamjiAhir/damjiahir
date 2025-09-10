"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FaDownload } from "react-icons/fa";

function Header() {
  return (
    <header className=" py-4 xl:py-10 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="font-normal sm:font-semibold text-3xl sm:text-3xl">
            Damji Dangar<span className="ml-1 text-[#00FFFF] font-medium">.</span>
          </h1>{" "}
        </Link>

        <Button  onClick={() => {
    const link = document.createElement("a");
    link.href = "/Damji Ahir.pdf";
    link.download = "Damji Ahir.pdf"; // filename after download
    link.click();
  }} variant="outline" className='rounded-full'>
          <span>DOWNLOAD CV</span>
          <FaDownload />
        </Button>
      </div>
    </header>
  );
}

export default Header;
