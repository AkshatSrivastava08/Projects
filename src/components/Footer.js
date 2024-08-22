import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bottom-0 left-0 z-20 w-full bg-white flex p-4 justify-between items-center">
      <h1 className="text-[20px] font-black cursor-pointer">
        myCrypto<span className="text-blue-800">Tracker </span>
      </h1>
      <div className="flex text-[30px] gap-3">
        <FaXTwitter />
        <FaLinkedin  color="#0077B5" />
        <FaYoutube color="red" />
        <FaGithub color="#171515" />
      </div>
    </div>
  );
};

export default Footer;