import React from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import Underwork from "../../../images/underWork.png";
const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl bg-clip-text bg-gradient-to-r text-transparent from-green-300 via-blue-500 to-purple-600">
              Contact Us
            </h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <form
            aria-label="contact-form"
            action=""
            className="max-w-md mx-auto mt-8 mb-0 space-y-4"
          >
            <div>
              <label
                aria-label="contact-email-label"
                htmlFor="email"
                className="sr-only"
              >
                Email
              </label>

              <div className="relative">
                <input
                  aria-label="contact-email-input"
                  type="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter email"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label
                aria-label="contact-name-label"
                htmlFor="name"
                className="sr-only"
              >
                Name
              </label>
              <div className="relative">
                <input
                  aria-label="contact-name-input"
                  type="name"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter name"
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                We won&apos;t spam you. &nbsp;
              </p>

              <button
                type="submit"
                className="inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 object-cover w-full h-full"
            src={Underwork}
            alt="x"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
