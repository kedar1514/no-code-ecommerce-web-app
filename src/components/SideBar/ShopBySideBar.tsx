import React from "react";
import SideBarItem from "./SideBarItem";
import ShopBy from "./ShopBy";

interface CheckboxOption {
  name: string;
  type: "checkbox";
  categoryOptions: string[];
}

interface RangeOption {
  name: string;
  type: "range";
  min: number;
  max: number;
}

type ShopByCategoryData = CheckboxOption | RangeOption;

type ShopByCategoryDataArray = ShopByCategoryData[];

const shopByCategoryDataArray: ShopByCategoryDataArray = [
  {
    name: "Brand",
    type: "checkbox",
    categoryOptions: ["AMD", "Nvidia"],
  },
  {
    name: "Series",
    type: "checkbox",
    categoryOptions: [
      "A8 APU",
      "Athlon APU",
      "Core i3 (10th Gen)",
      "Core i3 (12th Gen)",
      "Core i3 (13th Gen)",
      "Core i3 (14th Gen)",
      "Core i3 (6th Gen)",
      "Core i3 (8th Gen)",
      "Core i3 (9th Gen)",
      "Core i5 (10th Gen)",
      "Core i5 (11th Gen)",
      "Core i5 (12th Gen)",
      "Core i5 (13th Gen)",
      "Core i5 (14th Gen)",
      "Core i5 (8th Gen)",
      "Core i5 (9th Gen)",
      "Core i7 (10th Gen)",
      "Core i7 (11th Gen)",
      "Core i7 (12th Gen)",
      "Core i7 (13th Gen)",
      "Core i7 (14th Gen)",
      "Core i7 (8th Gen)",
      "Core i7 (9th Gen)",
      "Core i9 (10th Gen)",
      "Core i9 (11th Gen)",
      "Core i9 (12th Gen)",
      "Core i9 (13th Gen)",
      "Core i9 (14th Gen)",
      "Core i9 (9th Gen)",
      "Pentium Dual Core",
      "Pentium Gold",
      "Ryzen 3",
      "Ryzen 3 PRO",
      "Ryzen 5",
      "Ryzen 5 PRO",
      "Ryzen 7",
      "Ryzen 7 PRO",
      "Ryzen 9",
      "Ryzen Threadripper",
      "Ryzen Threadripper PRO",
    ],
  },
  {
    name: "Price",
    type: "range",
    min: 1000,
    max: 10000,
  },
];

const ShopBySideBar: React.FC<{ className?: string }> = ({
  className,
}: {
  className?: string;
}) => {
  const sideBarItems: JSX.Element[] = shopByCategoryDataArray.map(
    (shopByCategoryData: ShopByCategoryData, idx: number) => (
      <ShopBy key={idx} shopByCategoryData={shopByCategoryData} />
    )
  );

  return (
    <div className={`${className} flex-[1] border rounded bg-slate-100 p-2 sm:max-w-[10rem] md:max-w-[11rem] lg:max-w-[12rem] xl:max-w-[13rem] 2xl:max-w-[14rem]`}>
      <div className="flex items-center justify-center">
        <h2>Shop by</h2>
      </div>
      {sideBarItems}
    </div>
  );
};

export default ShopBySideBar;
