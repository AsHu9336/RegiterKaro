import React from "react";
import HeaderImg from "../Assets/HeaderImg.svg";
import ClientImg from "../Assets/ClientImg.svg";
import FinancialImg from "../Assets/FinancialImg.svg";
import VideoImg from "../Assets/VideoImg.svg";
import OneStarImg from '../Assets/1star.svg'
import FiveStarImg from '../Assets/5star.svg'
import ArrowBoardImg from '../Assets/ArrowBoardImg.svg'
export default function header() {
  return (
    <div
      className="max-h-[550px] flex flex-row justify-between px-20 py-16 relative"
      style={{
        backgroundImage:
          "linear-gradient(113.91deg, #FFFFFF 8%, rgba(255, 240, 220, 0.67) 28%, rgba(237, 246, 255, 0.7) 36%)",
      }}
    >
      <div className="flex-1">
        <div className="flex flex-col mb-4">
            {/* <img src={OneStarImg} alt="OneStarImg" /> */}
          <h1 className="font-semibold text-sm flex flex-row gap-2"><img src={OneStarImg} alt="OneStarImg" />Google Rating<img src={FiveStarImg} alt="FiveStarImg" /></h1>
          {/* <img src={FiveStarImg} alt="FiveStarImg" /> */}
        </div>
        <h1 className="font-medium text-5xl">Your trusted partner</h1>
        <h1 className="font-medium text-5xl">for compliance business needs</h1>
        <p
          className="font-normal mt-10 mb-10"
          style={{ color: "rgba(79, 79, 79, 1)" }}
        >
          An online business compliance platform that helps entrepreneurs and
          other individuals with various, registrations, tax filings, and other
          legal matters.
        </p>
        <div className="flex flex-row gap-8 mt-4 mb-8">
          <div className="">
            <h1
              className="font-extrabold text-xl"
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              4.5+
            </h1>
            <p>Customer Rating</p>
          </div>
          <div className="flex flex-row gap-2">
            <img src={ClientImg} alt="ClientImg" />
            <div>
              <h1
                className="font-extrabold text-xl"
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                20,000+
              </h1>
              <p>Clients</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <img src={FinancialImg} alt="FinancialImg" />
            <div>
              <h1
                className="font-extrabold text-xl"
                style={{
                  display: "inline-block",
                  background:
                    "linear-gradient(127.81deg, #FFA229 10%, #1C4670 68%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                99.8%
              </h1>
              <p>Financial Stability</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <button className="flex flex-row items-center">
            <a
              href="#"
              className="text-white text-md font-bold px-6 py-2 rounded-sm flex items-center"
              style={{ backgroundColor: "rgba(28, 70, 112, 1)" }}
            >
              Talk An Expert
            </a>
          </button>
          <button className="flex flex-row items-center">
            <a
              href="#"
              className="text-black  font-semibold px-5 py-2 rounded-sm flex items-center"
            >
              <img src={VideoImg} alt="VideoImg" className="mr-2" />
              See How it Works
            </a>
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src={HeaderImg} alt="HeaderImg" />
        <img src={ArrowBoardImg} alt="ArrowBoardImg" className="absolute bottom-0 right-0" />
        <div className="absolute right-0 top-1/4 transform -translate-y-1/4">
            <p className="font-medium text-sm rounded-l-md bg-white py-4 px-8 mb-4">Annual Compliance</p>
            <p className="font-medium text-sm rounded-l-md bg-white py-4 px-8 mb-4">Payroll Services</p>
            <h1 className="font-medium text-sm rounded-l-md bg-white py-4 px-8 mb-4">Company Formation</h1>
            <h1 className="font-medium text-sm rounded-l-md bg-white py-4 px-8">Annual Compliance</h1>
        </div>
      </div>
    </div>
  );
}
