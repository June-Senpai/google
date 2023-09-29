"use client"
import { useEffect, useRef, useState, forwardRef } from "react"
import Image from "next/image"
let hoverTimeout

export default function GoogleLinkNavbar() {
  const profileRef = useRef()
  const [isProfileClicked, setIsProfileClicked] = useState(false)
  const [hoverCardVisibleObj, setHoverCardVisibleObj] = useState({
    appsInfo: false,
    accountInfo: false,
  })

  useEffect(() => {
    const onClickOutsideProfile = (e) => {
      console.log(e.target)
      if (profileRef?.current && !profileRef?.current.contains(e.target)) {
        setIsProfileClicked(false)
      }
    }

    document.addEventListener("click", onClickOutsideProfile)

    return () => {
      document.removeEventListener("click", onClickOutsideProfile)
    }
  }, [])

  function expandProfile(e) {
    e.stopPropagation()
    setIsProfileClicked(!isProfileClicked)
  }

  const onHover = (type) => {
    hoverTimeout = setTimeout(() => {
      setHoverCardVisibleObj({
        ...hoverCardVisibleObj,
        [type]: true,
      })
    }, 1000)
  }

  const cancelHover = (type) => {
    clearTimeout(hoverTimeout)
    setHoverCardVisibleObj({
      ...hoverCardVisibleObj,
      [type]: false,
    })
  }

  return (
    <nav className="flex justify-end gap-2 mt-6 text-sm cursor-pointer">
      <div className="font-[arial] flex gap-4 mr-2 ">
        <span className="link-hover">Gmail</span>
        <span className="link-hover">Images</span>
      </div>
      <div
        onMouseLeave={() => cancelHover("appsInfo")}
        onMouseEnter={() => onHover("appsInfo")}
        className="group relative ">
        <svg
          viewBox="0 0 24 24"
          focusable="false"
          className="h-10 w-10 text-white -mt-3 flex items-center hover:bg-[#2f3034] rounded-full p-2 ">
          <path
            fill="var(--fill-color)"
            d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
        </svg>
        {hoverCardVisibleObj.appsInfo ? (
          <p className="mt-1 bg-[#2f3034] absolute w-24 p-1 pl-2 rounded-lg -right-6 group-hover:opacity-100 opacity-0 hidden group-hover:block group-hover:delay-1000">
            Google apps
          </p>
        ) : null}
      </div>
      <div
        onMouseLeave={() => cancelHover("accountInfo")}
        onMouseEnter={() => onHover("accountInfo")}
        className="group">
        <div className=" hover:bg-[#2f3034] h-12 w-12 mr-4 -mt-4 rounded-full flex justify-center items-center relative">
          <Image
            src="https://www.rimweb.in/forums/uploads/monthly_2017_09/K.png.77196845ac98613a98ff47a806706d7e.png"
            alt="profile"
            width={35}
            height={35}
            className="rounded-full"
            onClickCapture={expandProfile}
          />

          {hoverCardVisibleObj.accountInfo ? (
            <p className="absolute top-12 rounded-lg right-2 bg-[#2f3034] flex-col items-center justify-center p-2  z-20 ">
              <span className="">Google Account </span>
              <br />
              <span className="text-gray-400"> Keshav Juneja </span>
              <br />
              <span className="text-gray-400"> keshav01juneja@gmail.com </span>
            </p>
          ) : null}
        </div>
      </div>
      {isProfileClicked && <Profile ref={profileRef} />}
    </nav>
  )
}

const Profile = forwardRef(function Profile(_, ref) {
  return (
    <div
      ref={ref}
      className="absolute cursor-auto top-16 mr-5 h-72 w-96 rounded-3xl bg-[#282a2c] right-0 p-4 z-10">
      <div className="flex justify-center">
        <span className="text-center">keshav01juneja@gmail.com</span>
        <svg
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 50 50"
          className="">
          <path
            fill="gray"
            d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
        </svg>
      </div>
    </div>
  )
})
