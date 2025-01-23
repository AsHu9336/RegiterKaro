import React, { useEffect, useState } from "react";
import FaqArrowImg from '../Assets/FaqArrow.svg';

export default function Faq() {
  const [openAnswer, setOpenAnswer] = useState(null);


  const toggleAnswer = (answerId) => {
    setOpenAnswer(openAnswer === answerId ? null : answerId);
  };

  return (
    // <div class="h-screen">
    <section class="w-full px-10 mx-auto py-5 sm:py-10">
      <div class="flex items-center justify-center flex-col gap-y-2 py-5">
        <p
          class="text-sm font-normal"
          style={{ color: "rgba(235, 141, 21, 1)" }}
        >
          FAQ
        </p>
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-medium">
          Frequent Ask Questions
        </h2>
      </div>
      <div class="w-full px-5 md:px-4 xl:px-2 py-4">
        <div class="mx-auto w-full max-w-7xl border border-slate-400/20 rounded-lg bg-white">
          <div class="border-b shadow-md border-[#0A071B]/10 mb-2">
            <button
              class="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-medium text-slate-800 focus:outline-none p-5"
              onClick={() => toggleAnswer(1)}
              style={{ color: "rgba(13, 19, 22, 1)" }}
            >
              <span>
                Can I recover deleted files from desktop with this software?
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] ${
                  openAnswer === 1 ? "rotate-0" : "rotate-180"
                }`}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </button>
            <div
              class={`answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium ${
                openAnswer === 1 ? "block" : "hidden"
              }`}
              id="answer-1"
            >
              We offer shared hosting, VPS hosting, dedicated server hosting,
              and cloud hosting plans.
            </div>
          </div>
          <div class="border-b shadow-md border-[#0A071B]/10 mb-2">
            <button
              class="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-medium text-slate-800 focus:outline-none p-5"
              onClick={() => toggleAnswer(2)}
              style={{ color: "rgba(13, 19, 22, 1)" }}
            >
              <span>
                Can I recover deleted files from desktop with this software?
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] ${
                  openAnswer === 2 ? "rotate-0" : "rotate-180"
                }`}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </button>
            <div
              class={`answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium ${
                openAnswer === 2 ? "block" : "hidden"
              }`}
              id="answer-2"
            >
              We guarantee an uptime of 99.9% for all our hosting services.
            </div>
          </div>
          <div class="border-b shadow-md border-[#0A071B]/10 mb-2">
            <button
              class="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-medium text-slate-800 focus:outline-none p-5"
              onClick={() => toggleAnswer(3)}
              style={{ color: "rgba(13, 19, 22, 1)" }}
            >
              <span>
                Can I recover deleted files from desktop with this software?
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] ${
                  openAnswer === 3 ? "rotate-0" : "rotate-180"
                }`}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </button>
            <div
              class={`answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium ${
                openAnswer === 3 ? "block" : "hidden"
              }`}
              id="answer-3"
            >
              Yes, we offer free website migration assistance for new customers.
            </div>
          </div>
          <div class="border-b shadow-md border-[#0A071B]/10">
            <button
              class="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-medium text-slate-800 focus:outline-none p-5"
              onClick={() => toggleAnswer(4)}
              style={{ color: "rgba(13, 19, 22, 1)" }}
            >
              <span>
                Can I recover deleted files from desktop with this software?
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-[#5B5675] ${
                  openAnswer === 4 ? "rotate-0" : "rotate-180"
                }`}
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
              </svg>
            </button>
            <div
              class={`answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium ${
                openAnswer === 4 ? "block" : "hidden"
              }`}
              id="answer-4"
            >
              We employ advanced security measures including firewalls, DDoS
              protection, and regular security audits.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center my-10">
        <button className="flex flex-row items-center">
          <a
            href="#"
            className="text-white px-5 py-2 rounded-sm flex items-center"
            style={{ backgroundColor: "rgba(28, 70, 112, 1)" }}
          >
            Show More
            <img src={FaqArrowImg} alt="Faq Arrow" className="ml-2" />
          </a>
        </button>
      </div>
    </section>
    // </div>
  );
}
