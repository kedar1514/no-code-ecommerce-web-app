"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function SideBarItem({
  categoryName,
}: {
  categoryName: string;
}) {
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/${categoryName}`);
  };
  return (
    <div
      className="flex flex-row justify-between items-center p-2 hover:cursor-pointer hover:bg-slate-200"
      onClick={() => handleOnClick()}
    >
      <div>{`${categoryName}`}</div>
      <div>{`>`}</div>
    </div>
  );
}
