import React from "react";
import logo from "@/logo.svg";

function Logo() {
  return (
    <a href="/" className="flex items-center justify-center">
      <img className="w-10 h-10" src={logo} alt="" />
      <span>Test app</span>
    </a>
  );
}

export default Logo;
