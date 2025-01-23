import React from "react";
import FirstImg from "../Assets/Position/FirstImg.png";
import SecondImg from "../Assets/Position/SecondImg.svg";
import ThirdImg from "../Assets/Position/ThirdImg.svg";
import FourthImg from "../Assets/Position/FourthImg.svg";
import CoinbaseImg from "../Assets/Company/CoinbaseImg.svg";
import SlackImg from "../Assets/Company/Slack.svg";
import SpotifyImg from "../Assets/Company/Spotify.svg";
import DropboxImg from '../Assets/Company/DropboxImg.svg'
import ZoomImg from '../Assets/Company/ZoomImg.svg'
import WebflowImg from '../Assets/Company/WebflowImg.svg'
export default function Company() {
  return (
    <div
      class="max-w-full py-16 px-32"
      style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
    >
      <div class="flex flex-wrap justify-around items-center -mx-4 ">
        <div className="flex flex-row">
          <div>
            <img src={CoinbaseImg} />
          </div>
        </div>
        <div className="flex flex-row">
          <div >
            <img src={SpotifyImg} />
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <img src={SlackImg} />
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <img src={DropboxImg} />
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <img src={WebflowImg} />
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <img src={ZoomImg} />
          </div>
        </div>
      </div>
    </div>
  );
}
