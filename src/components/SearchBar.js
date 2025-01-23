import React from "react";
import TickImg from '../Assets/Align to Text.svg'

export default function SearchBar() {
  return (
    <div className="py-10 px-16 gap-20" style={{background:"linear-gradient(96.22deg, #FFA229 9%, #1C4670 59.37%)"}}>
      <div className="mb-10">
        <p className="text-center text-white">1% OF THE INDUSTRY</p>
        <h2 className="text-center text-3xl font-bold text-white">Welcome to your new digital reality. Now.</h2>
      </div>
      <div className="flex justify-center p-2">
        <form className="flex">
          <input 
            className="py-3 px-5 w-[420px] h-[48px] rounded-l-md" 
            type="text" 
            placeholder="Enter Your Mail" 
          />
          <button className="text-white py-3 px-5 rounded-r-md h-[48px]" style={{background: "rgba(255, 162, 41, 1)"}}>Submit</button>
        </form>
      </div>
      <div className="flex flex-row justify-center text-white mt-6">
            <div className="flex flex-row gap-4 mr-12">
                <img src={TickImg}/>

                <span>Instant results</span>
            </div>
            <div className="flex flex-row gap-4 mr-12">
                <img src={TickImg}/>
                <span>User-friendly interface</span>
                
            </div>
            <div className="flex flex-row gap-4 mr-2">
                <img src={TickImg}/>
                <span>Personalized customization</span>
            </div>
      </div>
    </div>
  );
}
