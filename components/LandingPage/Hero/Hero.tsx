import React from "react";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <aside className="p-12  sm:p-16 lg:p-24">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-sm font-medium text-gray-500">
          Stand out among peers.
        </p>

        <div className="mt-2 text-3xl font-bold sm:text-5xl">
          <p>Pattern Bay. </p>
          <p className="text-indigo-500">Make your portfolio pop.</p>
        </div>

        <div className="mt-8 sm:items-center sm:justify-center sm:flex">
          <a
            href=""
            className="block px-5 py-3 font-medium text-white bg-indigo-500 rounded-lg shadow-xl hover:bg-indigo-700"
          >
            Start free trial
          </a>

          <a
            href=""
            className="block px-5 py-3 mt-4 font-medium text-blue-500 rounded-lg hover:text-blue-600 sm:mt-0"
          >
            Schedule a demo
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Hero;
