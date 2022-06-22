import React from "react";
import Link from "next/link";
import BrandLogo from "../../../images/BrandLogo";
const Navbar = () => {
  return (
    <header
      aria-label="landing-navbar-header"
      className="text-gray-600  body-font"
    >
      <div className="container mx-auto flex row p-5 justify-between items-center">
        <Link passHref href="/">
          <div
            aria-label="landing-brand-link"
            className="flex row cursor-pointer"
          >
            <BrandLogo
              aria-label="landing-brand-logo"
              width="2em"
              height="2em"
            />
            <h1
              aria-label="landing-brand-name"
              className="hidden md:block ml-3 text-base whitespace-nowrap lg:text-2xl font-extrabold text-transparent text-teal-500"
            >
              Pattern Bay
            </h1>
          </div>
        </Link>
        <nav
          aria-label="landing-nav"
          className="md:ml-auto flex flex-wrap items-center text-base justify-center"
        >
          {/* <Link passHref href="/about">
            About
          </Link>
          &nbsp; &nbsp; &nbsp; */}
          <Link passHref href="/contact">
            <h2
              aria-label="landing-contact-page-link"
              className="text-base lg:text-2xl font-extrabold text-transparent text-teal-500  cursor-pointer"
            >
              Contact
            </h2>
          </Link>
          &nbsp; &nbsp; &nbsp;
          <Link passHref href="/bay">
            <button className="flex items-center justify-between px-3 py-1 lg:px-5 lg:py-3 transition-colors bg-indigo-500 border border-indigo-600 rounded-lg hover:bg-transparent group focus:outline-none focus:ring">
              <span className="font-medium text-white transition-colors group-active:text-indigo-500 group-hover:text-indigo-600">
                Go to bay
              </span>

              <span className="flex-shrink-0 p-2 ml-4 text-indigo-600 bg-white border border-current rounded-full group-active:text-indigo-500">
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>

            {/* <button
              aria-label="landing-app-page-link"
              className="inline-block p-[2px] text-black rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
            >
              <span className="whitespace-nowrap block px-8 py-3 text-base lg:text-2xl font-bold from-pink-400 to-yellow-500 bg-gradient-to-t bg-white rounded-full hover:bg-transparent hover:bg-gradient-to-tr">
                Go to Bay
              </span>
            </button> */}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
