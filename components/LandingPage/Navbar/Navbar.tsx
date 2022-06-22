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
              className="hidden md:block ml-3 text-base whitespace-nowrap lg:text-2xl bg-clip-text bg-gradient-to-r font-extrabold text-transparent from-green-300 via-blue-500 to-purple-600"
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
              className="text-base lg:text-2xl bg-clip-text bg-gradient-to-r font-extrabold text-transparent from-green-300 via-blue-500 to-purple-600 cursor-pointer"
            >
              Contact
            </h2>
          </Link>
          &nbsp; &nbsp; &nbsp;
          <Link passHref href="/bay">
            <button
              aria-label="landing-app-page-link"
              className="inline-block p-[2px] text-black rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
            >
              <span className="whitespace-nowrap block px-8 py-3 text-base lg:text-2xl font-bold from-pink-400 to-yellow-500 bg-gradient-to-t bg-white rounded-full hover:bg-transparent hover:bg-gradient-to-tr">
                Go to Bay
              </span>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
