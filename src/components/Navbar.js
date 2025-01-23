import React from "react";
import CompanyLogoImg from "../Assets/CompanyLogoImg.svg";
export default function Navbar() {
  return (
    <header class="bg-white">
      <div class="mx-auto  px-4 sm:px-6 lg:px-20">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block text-teal-600" href="#">
              <img src={CompanyLogoImg} alt="Company Logo" />
            </a>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a class="font-semibold text-md" href="#">
                    {" "}
                    Home{" "}
                  </a>
                </li>

                <li>
                  <a class="font-semibold text-md" href="#">
                    {" "}
                    Our Services{" "}
                  </a>
                </li>

                <li>
                  <a class="font-semibold text-md" href="#">
                    {" "}
                    Blog{" "}
                  </a>
                </li>

                <li>
                  <a class="font-semibold text-md" href="#">
                    {" "}
                    Contact Us{" "}
                  </a>
                </li>
                <li>
                  <a class="font-semibold text-md" href="#">
                    {" "}
                    About Us{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <button class="px-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <div class="sm:flex sm:gap-4">
                <a
                  class="rounded-md px-5 py-2.5 text-sm font-medium text-white shadow" style={{backgroundColor:"rgba(255, 162, 41, 1)"}}
                  href="#"
                >
                  Talk to Expert
                </a>

                
              </div>

              <div class="block md:hidden">
                <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
