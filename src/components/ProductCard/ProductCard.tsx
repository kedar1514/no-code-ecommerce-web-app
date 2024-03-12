import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ProductCard({className}) {
  return (
    <div className={className}>
      <Card className="w-full">
        {/* <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader> */}
        <CardContent className="flex flex-col justify-center items-center min-h-[15rem] bg-green-100">
          <Image src="/logo.svg" width={50} height={50}/>
          <div>10th Gen Intel Core i3-10100 Desktop Processor</div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
