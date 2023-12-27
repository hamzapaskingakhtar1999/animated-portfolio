import Image from "next/image";
import React from "react";
import Developer from "../assets/developer.png";
import Link from "next/link";

import { GoLinkExternal } from "react-icons/go";
import AnimatedText from "@/components/AnimatedText";

const Home = () => {
  return (
    <div className="flex items-center justify-between w-4/5  m-auto p-0">
      <div className="w-1/2">
        <Image src={Developer} className="w-full h-1/2" />
      </div>
      <div className="w-1/2 flex flex-col items-center self-center">
        <AnimatedText
          text="Turning Vision Into Reality With Code And Design."
          className="text-6xl text-left"
        />
        <p className="my-4 text-base font-medium">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects which
          showcase my expertise in ReactJS and Web Development
        </p>
        <div className="flex items-center self-start mt-2 gap-3">
          <Link
            href="/"
            download={true}
            className="flex gap-2 items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
          >
            Resume
            <GoLinkExternal size={20} />
          </Link>
          <Link
            className="flex items-center bg-red-500 text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-red-500 border-2 border-solid border-transparent hover:border-red-500"
            href="mailto:hamzapaskingakhtar@gmail.com"
            target={"_blank"}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
