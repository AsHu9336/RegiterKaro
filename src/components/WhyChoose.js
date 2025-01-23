import React from "react";
import ConfidentImg from "../Assets/WhyChoose/Confident.svg";
import ExpertCAImg from "../Assets/WhyChoose/Expert CA.svg";
import NoHiddenFeeImg from "../Assets/WhyChoose/NohiddenFee.svg";
import GuarantedImg from "../Assets/WhyChoose/Guaranted Satisfaction.svg";

export default function WhyChoose() {
  return (
    <div className="px-24 py-16">
      <div className="flex flex-row">
        <div className="flex-1">
          <div class="">
            <p class="text-sm mb-4" style={{ color: "rgba(235, 141, 21, 1)" }}>
              WHY REGISTERKARO.IN
            </p>
            <h1 class="text-3xl mb-4 font-bold text-black dark:text-white ">
              Why Choose Register Karo
            </h1>
            <p
              className="text-[15px] font-normal"
              style={{ color: "rgba(13, 19, 22, 1)" }}
            >
              It is with consistent services and results that build trust with
              the people and that in turn help us to serve the business better.
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-row px-4 py-2">
            {/* ------1------- */}
          <div
            className="flex-1 px-4 py-4 rounded-lg mx-2"
            style={{ backgroundColor: "rgba(254, 243, 239, 1)" }}
          >
            <div className="flex justify-center items-center">
              <img src={ConfidentImg} alt="Confident" className="" />
            </div>
            <div className="text-center my-3">
              <h1 className="text-center text-xl font-medium my-2">
                Confidential & Safe
              </h1>
              <p style={{ color: "rgba(102, 102, 102, 1)" }}>
                All your private information is safe with us
              </p>
            </div>
          </div>

          {/* ------2------ */}
          <div
            className="flex-1 px-4 py-4 rounded-lg mx-2"
            style={{ backgroundColor: "rgba(241, 251, 243, 1)" }}
          >
            <div className="flex justify-center items-center">
              <img src={NoHiddenFeeImg} alt="Expert CA" className="" />
            </div>
            <div className="text-center my-3">
              <h1 className="text-xl font-medium my-2">No Hidden Fee</h1>
              <p style={{ color: "rgba(102, 102, 102, 1)" }}>
                Everything is put before you with no hidden charges or
                conditions
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-row px-4 py-2">
        {/* ------3------ */}
        <div className="flex flex-1 flex-row  px-4 py-2">
          <div className="flex-1 px-4 py-4 rounded-lg mx-2"></div>
          <div
            className="flex-1 px-4 py-4 rounded-lg mx-2"
            style={{ backgroundColor: "rgba(237, 243, 255, 1)" }}
          >
            <div className="flex justify-center items-center">
              <img src={GuarantedImg} alt="Confident" className="" />
            </div>
            <div className="text-center my-3">
              <h1 className="text-xl font-medium my-2">
                Guaranteed Satisfaction
              </h1>
              <p style={{ color: "rgba(102, 102, 102, 1)" }}>
                We ensure that you stay 100% satisfied with our offered services
              </p>
            </div>
          </div>
        </div>
        {/* -----44444----- */}
        <div className="flex flex-1 flex-row px-4 py-2">
          <div
            className="flex-1 px-4 py-4 rounded-lg mx-2"
            style={{ backgroundColor: "rgba(251, 241, 251, 1)" }}
          >
            <div className="flex justify-center items-center">
              <img src={ExpertCAImg} alt="Confident" className="" />
            </div>
            <div className="text-center my-3">
              <h1 className="text-xl font-medium my-2">No Hidden Fee</h1>
              <p style={{ color: "rgba(102, 102, 102, 1)" }}>
                Prompt support from our in-house expert professionals
              </p>
            </div>
          </div>
          <div
            className="flex-1 px-4 py-4 rounded-lg mx-2"
            style={{ backgroundColor: "rgba(254, 243, 239, 1)" }}
          >
            <div className="flex justify-center items-center">
              <img src={ConfidentImg} alt="Confident" className="" />
            </div>
            <div className="text-center my-3">
              <h1 className="text-xl font-medium my-2">Confidential & Safe</h1>
              <p style={{ color: "rgba(102, 102, 102, 1)" }}>
                All your private information is safe with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
