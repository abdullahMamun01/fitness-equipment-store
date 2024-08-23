import React, { useState } from "react";
import Logo from "../../assets/Logo-removebg-preview.png";
import { Link } from "react-router-dom";
import ProfileModal from "../user/ProfileModal";
import { useAppSelector } from "@/redux/hooks";
import { useToken } from "@/redux/features/auth/authSLice";
import { Heart, Menu, ShoppingCart } from "lucide-react";
import CategoryDropDownMenu from "./CategoryDropDownMenu";
import { useCart } from "@/redux/features/cart/cartSlice";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = (): void => setIsNavOpen(!isNavOpen);

  const token = useAppSelector((state) => useToken(state));
  const cartItem = useAppSelector((state) => useCart(state));
  return (
    <nav className="md:container flex-no-wrap relative flex w-full items-center  justify-between bg-primary text-gray-100 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3 ">
        <button
          className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarSupportedContent1"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation">
          <span className="[&>svg]:w-7 [&>svg]:stroke-white dark:[&>svg]:stroke-neutral-200">
            <Menu />
          </span>
        </button>

        <CategoryDropDownMenu />

        <div className="w-auto md:hidden flex justify-center items-center">
          <img
            src={Logo}
            alt=""
            className="w-[200px]  h-[50px] object-contain"
          />
        </div>
        <div
          className={` ${
            isNavOpen ? "flex flex-2 " : "hidden"
          }  items-center lg:!flex lg:basis-auto max-sm:w-full py-4 max-sm:order-3`}
          id="navbarSupportedContent1">
          <ul className="list-style-none font-medium flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 capitalize">
            <li className="flex">
              <Link
                to="/"
                className="text-gray-200 hover:text-white transition px-2">
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/shop"
                className="text-gray-200 hover:text-white transition px-2">
                Shop
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/"
                className="text-gray-200 hover:text-white transition px-2">
                Accesories
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/"
                className="text-gray-200 hover:text-white transition px-2">
                About
              </Link>
            </li>
            <li className="flex">
              <Link
                to="/dashboard/inventory"
                className="text-gray-200 hover:text-white transition px-2">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        <div className="relative flex items-center">
          <Link className="me-4 text-neutral-600 dark:text-white" to="/cart">
            <span className="w-5">
              <div className="relative inline-flex">
                <ShoppingCart className="text-secondary" />
                {cartItem.length > 0 && (
                  <span className="absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white min-w-[24px] min-h-[24px]">
                    <span> {cartItem.length} </span>
                  </span>
                )}
              </div>
            </span>
          </Link>

          <Link className="me-4 text-neutral-600 dark:text-white" to="/cart">
            <span className="w-5">
              <Heart className="text-secondary" />
            </span>
          </Link>

          <div className="relative md:py-0 py-0">
            {token && (
              <ProfileModal>
                <span className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none">
                  <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                    className="rounded-full"
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                    loading="lazy"
                  />
                </span>
              </ProfileModal>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
