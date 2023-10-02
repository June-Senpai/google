"use client"
import { useState } from "react"
import Image from "next/image"

export default function Search() {
  const [isExpanded, setIsExpanded] = useState(false)

  function expandSearchBar() {
    setIsExpanded(!isExpanded)
  }

  return (
    <main className="flex flex-col items-center justify-center mt-32 px-4 sm:px-0">
      <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
        alt=""
        width={272}
        height={92}
        className="h-full"
        priority
      />
      <div
        onClick={expandSearchBar}
        className={`group/search flex items-center mt-4 w-full max-w-xl bg-[#202124] border-[#5f6368] border-2 p-2 rounded-3xl hover:bg-[#303134] hover:border-[#303134] focus-within:border-[#303134] focus-within:bg-[#303134] `}>
        {/* search icon */}
        <svg
          focusable="false"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6 ml-1">
          <path
            fill="#9aa0a6"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          type="text"
          className={` focus:bg-[#303134] w-full bg-[#202124] focus:outline-none ml-4 group-hover/search:bg-[#303134] `}
        />
        {/* Mic icon */}
        <div className="flex gap-3 items-center">
          <div className="group/icon relative">
            <Image
              src="/mic.png"
              width={40}
              height={40}
              alt=""
              className="cursor-pointer  "
            />

            <IconHoverText text="Search by voice" />
          </div>
          {/* Camera icon */}
          <div className="group/icon relative">
            <Image
              src="/camera.png"
              width={40}
              height={40}
              alt=""
              className="cursor-pointer"
            />
            <IconHoverText text="Search by image" />
          </div>
        </div>
      </div>
    </main>
  )
}

function IconHoverText({ text }) {
  return (
    <div className="">
      <span
        className="h-0 w-0 absolute border-8 ml-2 z-30 -mt-[2px] border-solid border-l-transparent
border-r-transparent border-t-transparent opacity-0 group-hover/icon:opacity-100 border-[#202124] "></span>
      <span
        className="h-0 w-0 absolute border-8 ml-2 z-0 -mt-[4px] border-solid border-l-transparent
  border-r-transparent border-t-transparent opacity-0 group-hover/icon:opacity-100 border-[#5f6368] "></span>
      <span className="absolute text-sm bg-[#202124] z-20 border w-32 h-8 flex items-center justify-center text-gray-400 mt-3 -ml-12 opacity-0 group-hover/icon:opacity-100 border-[#5f6368] ">
        {text}
      </span>
    </div>
  )
}

function TrendingSearch() {
  return <div className=""></div>
}
