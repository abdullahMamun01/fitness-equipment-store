import { Heart, Menu, Search, WalletCards } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo-removebg-preview.png";
import { useAppSelector } from "@/redux/hooks";
import { useToken } from "@/redux/features/auth/authSLice";
const Header = () => {
  const token = useAppSelector((state) => useToken(state));
  return (
    <header className="bg-white">
      <div className="border py-3 w-full md:px-6 px-3">
        <div className="flex justify-between">
          <div className="ml-6 flex flex-1 gap-x-3">
            <div className="w-auto max-sm:w-[120px] flex justify-center items-center">
              <img
                src={Logo}
                alt=""
                className="md:w-[200px] md:h-[50px] w-[150px] h-[30px] object-contain"
              />
            </div>

            <div className="w-full">
              <form className="max-w-2xl mx-auto">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search className="w-6 h-6 text-primary" />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-primary rounded-lg bg-gray-50 0"
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-4 py-2 ">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="ml-2 flex max-sm:hidden">
            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
              <WalletCards className="w-5 h-5" />
              <span className="text-sm font-medium text-primary">Orders</span>
            </div>

            <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100  max-sm:hidden">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Favorites</span>
            </div>

            {!token && (
              <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100  max-sm:hidden">
                <span className="text-sm font-medium">
                  <Link to="/auth/login">Sign in</Link>
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between"></div>
      </div>
    </header>
  );
};

export default Header;
