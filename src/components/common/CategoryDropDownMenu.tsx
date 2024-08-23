import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Dumbbell,
  DumbbellIcon,
  Menu,
  PaintRoller,
  RollerCoaster,
  Sofa,
} from "lucide-react";
import CategoryFilter from "../filter/CategoryFilter";
import { Link } from "react-router-dom";
export default function CategoryDropDownMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="max-sm:hidden flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-secondary text-primary py-2 px-4  hover:bg-secondary hover:text-primary">
            <Menu className="w-5 h-5" />
            <span className="text-sm font-medium">All Categories</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <DropDownItem />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem></NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function DropDownItem() {
  return (
    <div
      className="  shadow-md py-3 divide-y divide-gray-300 divide-dashed transition duration-300  w-[600px]"
      style={{ width: "300px" }}>
      <Link
        to="/"
        className="flex items-center px-6 py-3 transition text-primary">
        <Dumbbell />
        <span className="ml-6 text-primary text-sm">Dumbbell</span>
      </Link>

      <Link
        to="/"
        className="flex items-center px-6 py-3 transition text-primary">
        <RollerCoaster />
        <span className="ml-6 text-primary text-sm">RollerCoaster</span>
      </Link>
      <Link
        to="/"
        className="flex items-center px-6 py-3 transition text-primary">
        <PaintRoller />
        <span className="ml-6 text-primary text-sm">PaintRoller</span>
      </Link>
      <Link
        to="/"
        className="flex items-center px-6 py-3 transition text-primary">
        <DumbbellIcon />
        <span className="ml-6 text-primary text-sm">Dumbbell</span>
      </Link>
      
    </div>
  );
}
