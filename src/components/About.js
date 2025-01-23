import React from "react";
import GroupImg from "../Assets/AboutImg/GroupImg.svg";
import ArrowImg from "../Assets/ArrowImg.svg";

export default function About() {
  return (
    <section style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}>
      <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-36">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-2">
          <div class="max-w-lg">
            <h2
              class="text-sm font-normal sm:text-sm mb-4"
              style={{ color: "rgba(255, 162, 41, 1)" }}
            >
              WELCOME TO REGISTERKARO.IN
            </h2>

            <h2
              class="text-2xl font-bold sm:text-4xl"
              style={{ color: "rgba(39, 45, 55, 1)" }}
            >
              About{" "}
              <span className="" style={{ color: "rgba(255, 162, 41, 1)" }}>
                Register Karo
              </span>
            </h2>
            <p class="mt-4" style={{ color: "rgba(13, 18, 22, 1)" }}>
              We have been using Intelegencia as our DevOps vendor for our field
              service applications over the last couple of years and I’m
              extremely pleased with their performance, ability to execute, and
              willingness to adapt in our ever changing environment. Perry is an
              outstanding leader who is fanatical about customer satisfaction.
              He has built a solid team which has consistently delivered on
              projects thereby exceeding everyone’s expectations.
            </p>

            <p className="mt-4" style={{ color: "rgba(13, 18, 22, 1)" }}>
              I would strongly recommend their services to any organization that
              is looking for solid, reliable, and predictable outcomes.
            </p>

            <div className="flex flex-row justify-start my-5">
              <button className="flex flex-row items-center">
                <a
                  href="#"
                  className="text-white px-5 py-2 rounded-sm flex items-center"
                  style={{ backgroundColor: "rgba(28, 70, 112, 1)" }}
                >
                  Learn More <img src={ArrowImg} className="ml-2 mt-1" style={{ color: "white" }}/>
                </a>
              </button>
            </div>
          </div>
          <div class="mt-12 md:mt-0">
            <img
              src={GroupImg}
              alt="About Us Image"
              class="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
