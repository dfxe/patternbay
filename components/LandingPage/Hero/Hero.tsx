import React from "react";
import Link from "next/link";
import Image from "next/image";
import Jungle from "../../../images/ptt.png";
function Hero() {
  return (
    <section className="text-white bg-gradient-to-b from-gray-900 via-indigo-400 to-indigo-400">
      <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-gray-700 via-blue-500 to-purple-600">
            Understand User Flow.
            <span className="sm:block">Increase Conversion.</span>
          </h1>

          <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link passHref href="/bay">
              <button className="inline-block p-[2px] text-black rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring">
                <span className="block text-black px-8 py-3 text-2xl font-bold from-pink-400 to-yellow-500 bg-gradient-to-t  rounded-full hover:text-white hover:bg-transparent hover:bg-gradient-to-tr">
                  Go to Bay
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
