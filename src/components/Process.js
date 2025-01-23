import React from "react";
import FirstImg from "../Assets/Position/FirstImg.png";
import SecondImg from "../Assets/Position/SecondImg.png";
import ThirdImg from "../Assets/Position/ThirdImg.png";
import FourthImg from "../Assets/Position/FourthImg.svg";

export default function Process() {
    return (
        
        <div
            class="max-w-full p-4"
            style={{ backgroundColor: "rgba(255, 162, 41, 1)" }}
        >
            <div class="flex flex-wrap justify-around items-center -mx-4 py-8 px-12">
                <div className="flex flex-row">
                    <div className=" p-3 rounded-full" style={{backgroundColor:"rgba(235, 87, 87, 1)"}}>
                        <img src={FirstImg} />
                    </div>
                    <div className="flex justify-center items-center">
                        <span class="ml-4 text-base font-semibold text-gray-900">
                            Fill Up Application Form
                        </span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className=" p-3 rounded-full" style={{backgroundColor:"rgba(39, 174, 96, 1)"}}>
                        <img src={SecondImg} />
                    </div>
                    <div className="flex justify-center items-center">
                        <span class="ml-4 text-base font-semibold text-gray-900">
                        Make Online Payment
                        </span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className=" p-3 rounded-full" style={{backgroundColor:"rgba(242, 153, 74, 1)"}}>
                        <img src={ThirdImg} />
                    </div>
                    <div className="flex justify-center items-center">
                        <span class="ml-4 text-base font-semibold text-gray-900">
                        Executive will Process Application
                        </span>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div>
                        <img src={FourthImg} />
                    </div>
                    <div className="flex justify-center items-center">
                        <span class="ml-4 text-base font-semibold text-gray-900">
                        Get Confirm Mail
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
