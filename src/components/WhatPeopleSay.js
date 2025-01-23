import React from "react";
import TestimonialImg from "../Assets/TestimonialImg.svg";

export default function WhatPeopleSay() {
  return (
    <div
      className="max-h-[500px] flex flex-col py-4 px-12"
      style={{ backgroundColor: "rgba(28, 70, 112, 1)" }}
    >
      <div>
        <h1 className="text-white font-bold text-3xl mt-5">
          What peoples says about us{" "}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <div className="flex flex-row justify-between mt-10">
          <div
            className="max-w-[500px] mr-4 rounded-lg p-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          >
            <div className="flex flex-row justify-between">
              <div>
                <img src={TestimonialImg} alt="Testimonial" />
              </div>
              <div class="text-violet-500 flex gap-2">
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>

            <p class="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure sint amet
              occaecat cupidatat non proident ea commodo consequat aute irure
              sint amet occaecat cupidatat non proident
            </p>

            <div class="mt-6 flex items-center gap-2 ">
              <div class="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                <div class="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                  <img
                    alt=""
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    class="inline-block "
                    loading="lazy"
                    //   style="color: transparent;"
                  />
                </div>
              </div>
              <div>
                <p
                  class="leading-relaxed tracking-wide font-bold text-md"
                  style={{ color: "rgba(60, 33, 9, 1)" }}
                >
                  Chris
                </p>
                <p
                  class="text-xs leading-relaxed tracking-wide"
                  style={{ color: "rgba(40, 39, 40, 1)" }}
                >
                  President and CEO, PrintReach, USA
                </p>
              </div>
            </div>
          </div>
          {/* --------2-------- */}

          <div
            className="max-w-[500px] mr-4 rounded-lg p-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          >
            <div className="flex flex-row justify-between">
              <div>
                <img src={TestimonialImg} alt="Testimonial" />
              </div>
              <div class="text-violet-500 flex gap-2">
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>

            <p class="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure sint amet
              occaecat cupidatat non proident ea commodo consequat aute irure
              sint amet occaecat cupidatat non proident
            </p>

            <div class="mt-6 flex items-center gap-2 ">
              <div class="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                <div class="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                  <img
                    alt=""
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    class="inline-block "
                    loading="lazy"
                    //   style="color: transparent;"
                  />
                </div>
              </div>
              <div>
                <p
                  class="leading-relaxed tracking-wide font-bold text-md"
                  style={{ color: "rgba(60, 33, 9, 1)" }}
                >
                  Chris
                </p>
                <p
                  class="text-xs leading-relaxed tracking-wide"
                  style={{ color: "rgba(40, 39, 40, 1)" }}
                >
                  President and CEO, PrintReach, USA
                </p>
              </div>
            </div>
          </div>

          {/* ---------3------------ */}

          <div
            className="max-w-[500px] mr-4 rounded-lg p-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          >
            <div className="flex flex-row justify-between">
              <div>
                <img src={TestimonialImg} alt="Testimonial" />
              </div>
              <div class="text-violet-500 flex gap-2">
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>

            <p class="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure sint amet
              occaecat cupidatat non proident ea commodo consequat aute irure
              sint amet occaecat cupidatat non proident
            </p>

            <div class="mt-6 flex items-center gap-2 ">
              <div class="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                <div class="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                  <img
                    alt=""
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    class="inline-block "
                    loading="lazy"
                    //   style="color: transparent;"
                  />
                </div>
              </div>
              <div>
                <p
                  class="leading-relaxed tracking-wide font-bold text-md"
                  style={{ color: "rgba(60, 33, 9, 1)" }}
                >
                  Chris
                </p>
                <p
                  class="text-xs leading-relaxed tracking-wide"
                  style={{ color: "rgba(40, 39, 40, 1)" }}
                >
                  President and CEO, PrintReach, USA
                </p>
              </div>
            </div>
          </div>
          {/* --------------4-------------- */}

          {/* <div
            className="max-w-[500px] rounded-lg p-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          >
            <div>
              <div class="text-violet-500 flex gap-2">
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>

            <p class="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure sint amet
              occaecat cupidatat non proident ea commodo consequat aute irure
              sint amet occaecat cupidatat non proident
            </p>

            <div class="mt-6 flex items-center gap-2 ">
              <div class="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                <div class="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                  <img
                    alt=""
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    class="inline-block "
                    loading="lazy"
                    //   style="color: transparent;"
                  />
                </div>
              </div>
              <div>
                <p
                  class="leading-relaxed tracking-wide font-bold text-md"
                  style={{ color: "rgba(60, 33, 9, 1)" }}
                >
                  Chris
                </p>
                <p
                  class="text-xs leading-relaxed tracking-wide"
                  style={{ color: "rgba(40, 39, 40, 1)" }}
                >
                  President and CEO, PrintReach, USA
                </p>
              </div>
            </div>
          </div> */}

          {/* -------------5--------------- */}
          {/* 
          <div
            className="max-w-[500px] rounded-lg p-4"
            style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
          >
            <div>
              <div class="text-violet-500 flex gap-2">
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  class="text-yellow-500 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>

            <p class="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure sint amet
              occaecat cupidatat non proident ea commodo consequat aute irure
              sint amet occaecat cupidatat non proident
            </p>

            <div class="mt-6 flex items-center gap-2 ">
              <div class="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-neutral-800">
                <div class="relative inline-block overflow-hidden rounded-lg border-neutral-800">
                  <img
                    alt=""
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    width="50"
                    height="50"
                    decoding="async"
                    data-nimg="1"
                    class="inline-block "
                    loading="lazy"
                    //   style="color: transparent;"
                  />
                </div>
              </div>
              <div>
                <p
                  class="leading-relaxed tracking-wide font-bold text-md"
                  style={{ color: "rgba(60, 33, 9, 1)" }}
                >
                  Chris
                </p>
                <p
                  class="text-xs leading-relaxed tracking-wide"
                  style={{ color: "rgba(40, 39, 40, 1)" }}
                >
                  President and CEO, PrintReach, USA
                </p>
              </div>
            </div>
          </div> */}

          {/* -------------- */}
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-8">
        <span className="dot bg-gray-400 rounded-full w-2 h-2 mx-1"></span>
        <span className="dot bg-gray-400 rounded-full w-2 h-2 mx-1"></span>
        <span className="dot bg-gray-400 rounded-full w-2 h-2 mx-1"></span>
        <span className="dot bg-gray-400 rounded-full w-2 h-2 mx-1"></span>
        <span className="dot bg-gray-400 rounded-full w-2 h-2 mx-1"></span>
      </div>
    </div>
  );
}
