import React from "react";

export const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 m-4 rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2024{" "}
          <a href="https://github.com/gajda-w" className="hover:text-black hover:underline">
            Gajda™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="me-4 hover:text-black hover:underline  md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="me-4 hover:text-black hover:underline md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="me-4 hover:text-black hover:underline md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-black hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
