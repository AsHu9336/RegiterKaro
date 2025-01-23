import React from "react";
import GroupImg from "../Assets/AboutImg/GroupImg.svg";
import BulbIcon from "../Assets/VideoSectionImg/BulbIcon.svg";
import VideoIcon from "../Assets/VideoSectionImg/VideoIcon.svg";
import MsgIcon from "../Assets/VideoSectionImg/MsgIcon.svg";

export default function VideoSection() {
  return (
    <section style={{ backgroundColor: "rgba(28, 70, 112, 1)" }}>
      <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-36">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
          <div class="max-w-lg">
            <h2
              class="text-2xl font-bold sm:text-4xl"
              style={{ color: "rgba(255, 255, 255, 1)" }}
            >
              0ur Video Introductions
            </h2>
            <p class="mt-4" style={{ color: "rgba(170, 181, 205, 1)" }}>
              Velit purus egestas tellus phasellus. Mattis eget sed faucibus
              magna vulputate pellentesque a diam tincidunt apis dui.
            </p>
            <div className="mt-10 ">
              <div className="flex flex-row gap-4 mb-4">
                <div>
                  <img src={BulbIcon}  
                  alt="Bulb Icon"/>
                </div>
                <div>
                    
                    <h2 className="font-bold" style={{color: "rgba(255, 255, 255, 1)"}}>Explore ideas together</h2>
                    <p style={{ color: "rgba(170, 181, 205, 1)"}}> Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div>
                  <img src={MsgIcon} 
                  alt="Msg Icon"/>
                </div>
                <div>
                    <h2 className="font-bold" style={{color: "rgba(255, 255, 255, 1)"}}>Bring those ideas to life</h2>
                    <p style={{ color: "rgba(170, 181, 205, 1)"}}>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 md:mt-0">
            <img
              src={VideoIcon}
              alt="Video Icon"
              class="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
