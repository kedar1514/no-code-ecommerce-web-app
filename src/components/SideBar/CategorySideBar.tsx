import React from "react";
import SideBarItem from "./SideBarItem";

const categoryNames: string[] = ["Processor", "Graphics Card", "Cabinet"];

const CategorySideBar: React.FC<{ className?: string }> = ({
  className,
}: {
  className?: string;
}) => {
  const sideBarItems: JSX.Element[] = categoryNames.map((categoryName, idx) => (
    <SideBarItem key={idx} categoryName={categoryName} />
  ));

  return (
    <div className={`${className} border rounded bg-slate-100 p-2 w-52`}>
      {sideBarItems}
    </div>
  );
};

export default CategorySideBar;
