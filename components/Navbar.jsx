"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";

import Facebook from "../assets/social-icons/facebook.svg";
import Github from "../assets/social-icons/github.svg";
import Instagram from "../assets/social-icons/instagram.svg";
import Linkedin from "../assets/social-icons/linkedin.svg";
import Image from "next/image";

import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  /*   console.log(pathname);
  console.log(href); */

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`group-hover:w-full  ease duration-300 h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className="flex flex-row gap-5 justify-center items-center">
        <motion.a
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target={"_blank"}
        >
          <Image src={Facebook} height={30} width={30} />
        </motion.a>
        <motion.a
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target={"_blank"}
        >
          <Image src={Github} height={30} width={30} />
        </motion.a>
        <motion.a
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target={"_blank"}
        >
          <Image src={Instagram} height={30} width={30} />
        </motion.a>
        <motion.a
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          target={"_blank"}
        >
          <Image src={Linkedin} height={30} width={30} />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
