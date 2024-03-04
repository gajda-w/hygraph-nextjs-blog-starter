import React from "react";

export const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 m-4 rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between p-2 md:p-4">
        <span className="text-center text-xs text-gray-500 dark:text-gray-400 md:text-sm">
          © 2024{" "}
          <a
            href="https://github.com/gajda-w"
            target="_blank"
            rel="noopener noreferrer" // Added for security reasons
            className="hover:text-black hover:underline"
          >
            Gajda™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center text-xs font-medium text-gray-500 dark:text-gray-400 md:text-sm">
          <li>
            <a href="#" className="mr-2 hover:text-black hover:underline md:mr-4">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-2 hover:text-black hover:underline md:mr-4">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-2 hover:text-black hover:underline md:mr-4">
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
