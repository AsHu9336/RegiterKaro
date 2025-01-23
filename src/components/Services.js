import React from "react";
import FourthImg from "../Assets/Services/Annual.svg";
import FirstImg from "../Assets/Services/CompanyFormation.svg";
import SecondImg from "../Assets/Services/CompanyService.svg";
import ThirdImg from "../Assets/Services/VirtualServices.svg";
import FifthImg from "../Assets/Services/Payroll.svg";
import SixthImg from "../Assets/Services/BookKeeping.svg";
import ArrowImg from '../Assets/ArrowImg.svg'
export default function Services() {
  return (
    <section
      id="new-features"
      class="py-4 bg-white sm:py-4 lg:py-4"
      style={{ backgroundColor: "rgba(250, 250, 250, 1)" }}
    >
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
          <p
            class="mt-4 text-base leading-7 sm:mt-8"
            style={{ color: "rgba(235, 141, 21, 1)" }}
          >
            WELCOME TO REGISTERKARO.IN
          </p>
          <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-3xl xl:text-3xl">
            Explore Our Services
          </h2>
        </div>
        <div class="grid grid-cols-1 mt-5 mb-5 text-center sm:mt-8 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-12 xl:mb-12">
          <div class="md:p-8 lg:p-14 flex flex-col justify-center items-center">
            <div class="w-14 h-14  flex justify-center items-center">
              <img src={FirstImg} />
            </div>
            <h3 class="mt-12 text-xl font-bold text-gray-900">
              Company Formation
            </h3>
            <p class="mt-5 text-base text-gray-600">
              Build web-based solutions that enhance customer experience.
            </p>
            <div className="flex flex-row justify-center pt-5">
              <button className="flex flex-row items-center">
                <a
                  href="#"
                  className="font-bold px-5 py-2 rounded-sm flex items-center justify-center"
                  style={{ color: "rgba(0, 16, 56, 1)" }}
                >
                  Learn More <img src={ArrowImg} className="ml-2 mt-1" />
                </a>
              </button>
            </div>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
            <div class="w-14 h-14  flex justify-center items-center">
              <img src={SecondImg} />
            </div>
            <h3 class="mt-12 text-xl font-bold text-gray-900">
              Company Secretarial Services
            </h3>
            <p class="mt-5 text-base text-gray-600">
              Make data-driven decisions and utilize technology to reach
              business goals.
            </p>
            <div className="flex flex-row justify-center pt-5">
              <button className="flex flex-row items-center">
                <a
                  href="#"
                  className="font-bold px-5 py-2 rounded-sm flex items-center justify-center"
                  style={{ color: "rgba(0, 16, 56, 1)" }}
                >
                  Learn More <img src={ArrowImg} className="ml-2 mt-1" />
                </a>
              </button>
            </div>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
            <div class="w-14 h-14  flex justify-center items-center">
              <img src={ThirdImg} />
            </div>
            <h3 class="mt-12 text-xl font-bold text-gray-900">
              Virtual Office Address
            </h3>
            <p class="mt-5 text-base text-gray-600">
              Foster customer relationships by effectively serving your market.
            </p>
            <div className="flex flex-row justify-center pt-5">
              <button className="flex flex-row items-center">
                <a
                  href="#"
                  className="font-bold px-5 py-2 rounded-sm flex items-center justify-center"
                  style={{ color: "rgba(0, 16, 56, 1)" }}
                >
                  Learn More <img src={ArrowImg} className="ml-2 mt-1" />
                </a>
              </button>
            </div>
          </div>

          <div class="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
            <div class="w-14 h-14  flex justify-center items-center">
              <img src={FourthImg} />
            </div>
            <h3 class="mt-12 text-xl font-bold text-gray-900">
              Annual Compliance Services
            </h3>
            <p class="mt-5 text-base text-gray-600">
              Turn your ideas into modern products with our design experts.
            </p>
            <div className="flex flex-row justify-center pt-5">
              <button className="flex flex-row items-center">
                <a
                  href="#"
                  className="font-bold px-5 py-2 rounded-sm flex items-center justify-center"
                  style={{ color: "rgba(0, 16, 56, 1)" }}
                >
                  Learn More <img src={ArrowImg} className="ml-2 mt-1" />
                </a>
              </button>
            </div>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
            <div class="w-14 h-14  flex justify-center items-center">
              <img src={FifthImg} />
            </div>
            <h3 class="mt-12 text-xl font-bold text-gray-900">
              Payroll Services
            </h3>
            <p class="mt-5 text-base text-gray-600">
              Expand your business across the globe with minimal effort.
            </p>
            <div className="flex flex-row justify-center pt-5">
              <button className="flex flex-row items-center">
                <a
                  href="#"
                  className="font-bold px-5 py-2 rounded-sm flex items-center justify-center"
                  style={{ color: "rgba(0, 16, 56, 1)" }}
                >
                  Learn More <img src={ArrowImg} className="mt-1 ml-2" />
                </a>
              </button>
            </div>
          </div>

          <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
            <div class="w-14 h-14  flex justify-center items-center">
              <img src={SixthImg} />
            </div>
            <h3 class="mt-12 text-xl font-bold text-gray-900">
              Bookkeeping Services
            </h3>
            <p class="mt-5 text-base text-gray-600">
              Steering user behaviours with creative design, data insights &
              technology.
            </p>
            <div className="flex flex-row justify-center pt-5">
              <button className="flex flex-row items-center">
                <a
                  href="#"
                  className="font-bold px-5 py-2 rounded-sm flex items-center justify-center"
                  style={{ color: "rgba(0, 16, 56, 1)" }}
                >
                  Learn More <img src={ArrowImg} className="mt-1 ml-2" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center my-8">
        <button className="flex flex-row items-center">
          <a
            href="#"
            className="text-white px-5 py-2 rounded-md flex items-center"
            style={{ backgroundColor: "rgba(28, 70, 112, 1)" }}
          >
            See All Services
          </a>
        </button>
      </div>
    </section>
  );
}
