import ProductCard from "@/components/ProductCard/ProductCard";
import ShopBySideBar from "@/components/SideBar/ShopBySideBar";
import { notFound } from "next/navigation";

const productsData = ["","","","","","","","","","","","","","","","",];

export default function Page({ params }: { params: { category: string } }) {

  const products = productsData.map((data, idx)=>{
    return <ProductCard key={idx} className="flex items-center justify-center" />;
  });

  return (
    <div className="flex flex-[2] sm:min-w-[38rem] md:min-w-[46rem] lg:min-w-[62rem] xl:min-w-[78rem] 2xl:min-w-[94rem] rounded border border-slate-300 bg-slate-50 min-h-screen">
      <ShopBySideBar />
      <div className="flex-[2] lg:grid-cols-2 2xl:grid-cols-3 grid m-11 h-min gap-11">
        {products}
      </div>
    </div>
  );
}
