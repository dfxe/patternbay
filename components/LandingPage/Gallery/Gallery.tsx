import React from "react";
import Image from "next/image";
import Underwork from "../../../images/underWork.png";
const Gallery = (): JSX.Element => {
  return (
    <section className="text-gray-600 body-font  ">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-black lg:w-1/3 lg:mb-0 mb-4">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably heard
            of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <a href="" className="block overflow-hidden rounded-2xl">
                <Image
                  className="object-cover w-full h-56"
                  src={Underwork}
                  alt="sssss"
                />

                <div className="p-4 bg-gray-900">
                  <p className="text-xs text-gray-500">website.com</p>

                  <h5 className="text-sm text-white">How to</h5>

                  <p className="mt-1 text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </a>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <a href="" className="block overflow-hidden rounded-2xl">
                <Image
                  className="object-cover w-full h-56"
                  src={Underwork}
                  alt="sssss"
                />

                <div className="p-4 bg-gray-900">
                  <p className="text-xs text-gray-500">website.com</p>

                  <h5 className="text-sm text-white">How to</h5>

                  <p className="mt-1 text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </a>
            </div>
            <div className="md:p-2 p-1 w-full">
              <a href="" className="block overflow-hidden rounded-2xl">
                <Image
                  className="object-cover w-full h-56"
                  src={Underwork}
                  alt="sssss"
                />

                <div className="p-4 bg-gray-900">
                  <p className="text-xs text-gray-500">website.com</p>

                  <h5 className="text-sm text-white">How to</h5>

                  <p className="mt-1 text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <a href="" className="block overflow-hidden rounded-2xl">
                <Image
                  className="object-cover w-full h-56"
                  src={Underwork}
                  alt="sssss"
                />

                <div className="p-4 bg-gray-900">
                  <p className="text-xs text-gray-500">website.com</p>

                  <h5 className="text-sm text-white">How to</h5>

                  <p className="mt-1 text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </a>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <a href="" className="block overflow-hidden rounded-2xl">
                <Image
                  className="object-cover w-full h-56"
                  src={Underwork}
                  alt="sssss"
                />

                <div className="p-4 bg-gray-900">
                  <p className="text-xs text-gray-500">website.com</p>

                  <h5 className="text-sm text-white">How to</h5>

                  <p className="mt-1 text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </a>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <a href="" className="block overflow-hidden rounded-2xl">
                <Image
                  className="object-cover w-full h-56"
                  src={Underwork}
                  alt="sssss"
                />

                <div className="p-4 bg-gray-900">
                  <p className="text-xs text-gray-500">website.com</p>

                  <h5 className="text-sm text-white">How to</h5>

                  <p className="mt-1 text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
