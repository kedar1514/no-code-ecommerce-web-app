import CategorySideBar from "@/components/SideBar/CategorySideBar";
import { cn } from "@/lib/utils";

export default function Page() {
  const widthClassNames = "sm:min-w-[38rem] md:min-w-[46rem] lg:min-w-[62rem] xl:min-w-[78rem] 2xl:min-w-[94rem]";
  return (
    <div className={cn(widthClassNames," flex rounded border border-slate-300 bg-slate-50")}>
      <CategorySideBar />
      <div className="">main content</div>
    </div>
  );
}
