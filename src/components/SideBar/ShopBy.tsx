import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

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

export default function ShopBy({
  shopByCategoryData,
}: {
  shopByCategoryData: ShopByCategoryData;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className=" hover:no-underline">
          Category
        </AccordionTrigger>
        <AccordionContent>
          {shopByCategoryData.type === "checkbox" ? (
            <div className="my-[-1rem]">
              {shopByCategoryData.categoryOptions.map(
                (categoryOption: string, idx: number) => {
                  return (
                    <div className="flex items-center space-x-2 my-4" key={idx}>
                      <Checkbox id={categoryOption} />
                      <label
                        htmlFor={categoryOption}
                        className="hover:cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 truncate"
                      >
                        {categoryOption}
                      </label>
                    </div>
                  );
                }
              )}
            </div>
          ) : (
            <div className="flex flex-col">
              <div className="flex justify-between">
                <div>min</div>
                <div>{` - `}</div>
                <div>max</div>
              </div>
              <Slider
                defaultValue={[50]}
                max={100}
                step={2}
                className={cn("w-full min-h-5")}
              />
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
