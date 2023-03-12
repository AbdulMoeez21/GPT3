import React from "react";

const Footer = () => {
  return (
    <footer class="h-full p-4 bg-white sm:p-6 footer ">
      <div class="md:flex md:justify-between px-12">
        <div class="px-12 ">
          <span class="self-center text-3xl md:text-4xl  font-semibold whitespace-nowrap  dark:text-white">
            GPT-3
          </span>
          <p className="md:w-96 md:pr-40 pt-2 md:pb-10 pb-12 text-justify md:text-left dark:text-white">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 pl-4 ">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Links
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="" class="hover:underline ">
                  Overons
                </a>
              </li>
              <li class="mb-4">
                <a href="" class="hover:underline ">
                  Social Media
                </a>
              </li>
              <li class="mb-4">
                <a href="" class="hover:underline ">
                  Counters
                </a>
              </li>
              <li class="mb-4">
                <a href="" class="hover:underline ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="" class="hover:underline ">
                  Terms & Conditions
                </a>
              </li>
              <li class="mb-4">
                <a href="" class="hover:underline ">
                  Privacy Policy
                </a>
              </li>
              <li class="mb-4">
                <a href="" class="hover:underline ">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Get in touch
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a href="" class="hover:underline ">
                  Crechterwoord K12 182 DK Alkjkcb
                </a>
              </li>
              <li class="mb-4">
                <a href="" class="hover:underline ">
                  085-132567
                </a>
              </li>
              <li class="mb-4">
                <a href="" class="hover:underline ">
                  info@payme.net
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center sm:flex sm:items-center pt-12">
        <span class=" text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2021 GPT-3. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
