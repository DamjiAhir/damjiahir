"use client";
import Link from "next/link";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socialIcon = [
  { icon: <FaGithub />, path: "https://github.com/DamjiAhir" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/damji-ahir?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icon: <FaTwitter />,
    path: "https://x.com/Damji0707?t=cs9CIXft_2Y_IAEr3O_1dA&s=09",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/damji_ahir_07/profilecard/?igsh=MXY5YnA0bjhpYTJlbg==",
  },
];
const Social = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socialIcon.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyle}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
