import React from "react";
import AppStoreImg from '../Assets/AppStore.svg';
import GoogleApp from '../Assets/GoogleApp.svg';
import  PhoneImg from '../Assets/PhoneImg.svg';

export default function ManageServices() {
  return (
    <div className="max-h-[500px] flex flex-row py-4 px-12" style={{backgroundColor:"rgba(28, 70, 112, 1)"}}>
      <div className="flex-1 text-left px-8 py-4 ">
        <h1 className="text-white font-extrabold text-3xl px-16 mb-4">Manage Your Services by your Mobile Phone</h1>
        <p className="font-normal text-lg px-16 mb-4" style={{color:"rgba(170, 181, 205, 1)"}} >
          Download our app to manage and track your services. Our app enables
          you to stay in touch with our experts and aids you in tracking your
          progress.{" "}
        </p>
        <p className="text-white font-medium px-16 mb-4">Get the App</p>
        <div className="flex px-16">
            <img src={AppStoreImg} alt="AppStore" />
            <img src={GoogleApp} alt="GoogleApp" />
        </div>
      </div>
      <div className="flex-1 overflow-hidden" >
        <img src={PhoneImg} alt="Phone"  />
      </div>
    </div>
  );
}
