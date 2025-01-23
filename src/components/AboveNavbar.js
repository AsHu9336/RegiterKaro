import React from "react";
import callImg from "../Assets/CallLogo.svg";
import emailImg from "../Assets/emailLogo.svg";
import Twiter from '../Assets/Twiter.svg'
import Fb from '../Assets/Fb.svg'
import Insta from '../Assets/Insta.svg';
import Pintrest from '../Assets/Pintrest.svg'

export default function AboveNavbar() {
  return (
    <div
      className="flex flex-row justify-between py-2 px-10"
      style={{ backgroundColor: "rgba(28, 70, 112, 1)" }}
    >
      <div className="flex-1"></div>
      <div className="flex flex-row flex-1 justify-around text-white pl-96">
        <div className="flex flex-row items-center mr-1">
          <img className="mr-2" src={emailImg} alt="Email" />
          <h1>www.registerkaro.in |</h1>
        </div>
        <div className="flex flex-row items-center mr-1">
          <img className="mr-2" src={callImg} alt="Call" />
          <p>+918447746183 |</p>
        </div>
        <div className="flex flex-row px-4 justify-center items-center">
            <img src={Twiter} alt="Twiter" className="w-4 h-4 mr-2" />
            <img src={Fb} alt="Fb" className="w-4 h-4 mr-2" />
            <img src={Insta} alt="Insta" className="w-4 h-4 mr-2"/>
            <img src={Pintrest} alt="Pintrest" className="w-4 h-4 mr-2" />

        </div>
      </div>
    </div>
  );
}
