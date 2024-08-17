import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import PriceFilterAction from "./PriceFilterAction";
import CategoryFilter from "./CategoryFilter";

export default function Filter() {
  return (
    <div className="grid grid-cols-2 gap-2 ">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-[90px] mx-3">
            <SlidersHorizontal  className="text-primary text-[7px]" /> <span className="ml-1">Filter</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="text-left">Filter Products</SheetTitle>
            <SheetDescription>
              <CategoryFilter />
              <PriceFilterAction />
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4"></div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
