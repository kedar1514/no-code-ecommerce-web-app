import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex z-10 justify-center items-center bg-slate-400 w-screen h-20 bg-transparent backdrop-filter backdrop-blur-lg fixed">
      <div>
        <Image alt="logo" src="./logo.svg" width={50} height={50}/>
      </div>
      <div className="mx-4">
        <Input />
      </div>
      <div>account</div>
    </header>
  );
}
