import React from "react";

const footerLink = [
  { id: 1, title: `About`, href: `#` },
  { id: 2, title: `Privacy Policy`, href: `#` },
  { id: 3, title: `Licensing`, href: `#` },
  { id: 4, title: `Contact`, href: `#` },
];

export const Footer = () => {
  return (
    <footer className="inset-x-0 bottom-0 rounded-lg bg-white py-1.5 shadow dark:bg-gray-800">
      <div className="flex w-full max-w-screen-xl items-center justify-between p-2 md:p-4">
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
          .<p className="block md:inline"> All Rights Reserved.</p>
        </span>
        <ul className="flex flex-wrap items-center justify-center text-xs font-medium text-gray-500 dark:text-gray-400 md:text-sm">
          {footerLink.map((footerLink) => (
            <li key={footerLink.id}>
              <a
                href={footerLink.href}
                className="mr-2 text-xs hover:text-black hover:underline md:mr-4 md:text-sm"
              >
                {footerLink.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
