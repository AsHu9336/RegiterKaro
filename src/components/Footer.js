import React from "react";
import FooterImg from "../Assets/FooterArrowImg.svg";
import Twiter from "../Assets/Twiter.svg";
import Fb from "../Assets/Fb.svg";
import Insta from "../Assets/Insta.svg";
import Pintrest from "../Assets/Pintrest.svg";

export default function Footer() {
  return (
    <footer class="w-full" style={{ backgroundColor: "rgba(1, 27, 91, 1)" }}>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
          <div class="col-span-full mb-2 lg:col-span-2 lg:mb-0">
            <p
              class="py-4 px-8 lg:max-w-xs text-center lg:text-left"
              style={{ color: "rgba(170, 181, 205, 1)", fontSize: "16px" }}
            >
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div class="px-8 flex justify-center lg:justify-start gap-4 mt-5">
              <img src={Fb} alt="Fb" className="w-6 h-6 mr-2" />
              <img src={Insta} alt="Insta" className="w-6 h-6 mr-2" />
              <img src={Twiter} alt="Twiter" className="w-6 h-6 mr-2" />

              <img src={Pintrest} alt="Pintrest" className="w-6 h-6 mr-2" />
            </div>
          </div>

          <div class="lg:mx-auto text-left ">
            <h4
              class="text-md font-medium mb-7"
              style={{ color: "rgba(255, 162, 41, 1)" }}
            >
              START A BUSINESS
            </h4>
            <ul class="text-sm  transition-all duration-500">
              <li class="mb-6">
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Features
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Solutions
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          <div class="lg:mx-auto text-left ">
            <h4
              class="text-md font-medium mb-7"
              style={{ color: "rgba(255, 162, 41, 1)" }}
            >
              GOVERMENT REGISTRATION
            </h4>
            <ul class="text-sm  transition-all duration-500">
              <li class="mb-6">
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Partners
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Community
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  App
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div class="lg:mx-auto text-left">
            <h4
              class="text-md  font-medium mb-7"
              style={{ color: "rgba(255, 162, 41, 1)" }}
            >
              COMPLIANCE & TAX
            </h4>
            <ul class="text-sm  transition-all duration-500">
              <li class="mb-6">
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Channels
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Scale
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Watch the Demo
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Our Competition
                </a>
              </li>
            </ul>
          </div>

          <div class="lg:mx-auto text-left">
            <h4
              class="text-md font-medium mb-7"
              style={{ color: "rgba(255, 162, 41, 1)" }}
            >
              BIS & CDSCO
            </h4>
            <ul class="text-sm  transition-all duration-500">
              <li class="mb-6">
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  About Us
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  News
                </a>
              </li>
              <li class="mb-6">
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="javascript:;"
                  style={{ color: "rgba(170, 181, 205, 1)" }}
                >
                  Media Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="py-7 border-gray-200">
          <img src={FooterImg} class="mx-auto mb-4" />
          <h1
            class="text-md text-center mb-4"
            style={{ color: "rgba(170, 181, 205, 1)" }}
          >
            © 2024 Registerkaro. All Rights Reserved.
          </h1>
        </div>
      </div>
    </footer>
  );
}
