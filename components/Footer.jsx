import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg flex justify-around py-5">
      <span>2023 © All Rights Reserved.</span>
      <div className="flex items-center justify-center">
        Build With <span className="text-primary text-2xl px-1">&#9825; </span>
        By Hamza
      </div>
      <Link href="/">Say Hello</Link>
    </footer>
  );
};

export default Footer;
