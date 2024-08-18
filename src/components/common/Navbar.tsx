import React, { useState } from "react";
import Logo from "../../assets/Logo-removebg-preview.png";
import { Link } from "react-router-dom";
import ProfileModal from "../user/ProfileModal";
import { useAppSelector } from "@/redux/hooks";
import { useToken } from "@/redux/features/auth/authSLice";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] =
    useState<boolean>(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] =
    useState<boolean>(false);

  const toggleNav = (): void => setIsNavOpen(!isNavOpen);
  const toggleFirstDropdown = (): void =>
    setIsFirstDropdownOpen(!isFirstDropdownOpen);
  const token = useAppSelector((state) => useToken(state));

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        <div className="">
          <img src={Logo} alt="" className="w-[100] h-[50px]" />
        </div>
        <div
          className={`!visible ${
            isNavOpen ? "flex" : "hidden"
          }  items-center lg:!flex lg:basis-auto max-sm:w-full py-4`}
          id="navbarSupportedContent1">
          <ul className="list-style-none font-medium me-auto flex flex-col ps-0 lg:flex-row text-[18px] ">
            <li className="mb-4 lg:mb-0 lg:pe-2">
              <a
                className=" transition duration-200 hover:text-secondary hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#">
                Accessories
              </a>
            </li>
            <li className="mb-4 lg:mb-0 lg:pe-2">
              <a
                className="transition duration-200 hover:text-secondary hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#">
                Outlet
              </a>
            </li>
            <li className="mb-4 lg:mb-0 lg:pe-2">
              <a
                className=" transition duration-200 hover:text-secondary hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#">
                Tools
              </a>
            </li>
            <li className="mb-4 lg:mb-0 lg:pe-2">
              <a
                className="transition duration-200 hover:text-secondary hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#">
                Cardio
              </a>
            </li>
          </ul>
        </div>

        <div className="relative flex items-center">
          <Link className="me-4 text-neutral-600 dark:text-white" to="/cart">
            <span className="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
              </svg>
            </span>
          </Link>

          <div
            className="relative"
            onMouseEnter={toggleFirstDropdown}
            onMouseLeave={toggleFirstDropdown}>
            <a
              className="me-4 flex items-center text-neutral-600 dark:text-white"
              href="#"
              id="dropdownMenuButton1"
              role="button"
              aria-expanded={isFirstDropdownOpen}>
              <span className="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute -mt-4 ms-2.5 rounded-full bg-danger px-[0.35em] py-[0.15em] text-[0.6rem] font-bold leading-none text-white">
                1
              </span>
            </a>
          </div>

          <div className="relative py-4">
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
