import React from "react";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  Weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-Mono",
});

export const metadata = {
  title: "Damji Ahir",
  description: "",
  keywords: [],
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.png', 
    shortcut: '/favicon.ico', 
    apple: '/apple-icon.png', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
