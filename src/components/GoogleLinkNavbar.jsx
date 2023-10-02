"use client"
import { appIcons } from "./appsIcon"
import { useEffect, useRef, useState, forwardRef } from "react"
import Image from "next/image"
let hoverTimeout

export default function GoogleLinkNavbar() {
  const profileRef = useRef()
  const [isProfileClicked, setIsProfileClicked] = useState(false)
  const [isAppsClicked, setIsAppsClicked] = useState(false)
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

  function expandApps(e) {
    e.stopPropagation()
    if (isProfileClicked) {
      setIsProfileClicked(false)
    }
    setIsAppsClicked(!isAppsClicked)
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
      <div onClickCapture={expandApps} className="group relative ">
        <div
          onMouseLeave={() => cancelHover("appsInfo")}
          onMouseEnter={() => onHover("appsInfo")}>
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            className="h-10 w-10 text-white -mt-3 flex items-center hover:bg-[#2f3034] rounded-full p-2 ">
            <path
              fill="var(--fill-color)"
              d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
          </svg>
        </div>
        {hoverCardVisibleObj.appsInfo ? (
          <p className="mt-1 bg-[#2f3034] absolute w-24 p-1 pl-2 rounded-lg -right-6 group-hover:opacity-100 opacity-0 hidden group-hover:block group-hover:delay-1000">
            Google apps
          </p>
        ) : null}
        {isAppsClicked && <GoogleApps appIcons={appIcons} />}
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
      {isProfileClicked && (
        <Profile expandProfile={expandProfile} ref={profileRef} />
      )}
    </nav>
  )
}

function GoogleApps(props) {
  const { appIcons } = props

  return (
    <div className="absolute cursor-auto h-96 overflow-y-scroll overflow-x-hidden w-96 z-50 right-0 bg-gray-900 rounded-3xl border-[10px] border-[#2f3034]">
      <div className="grid gap-4 grid-cols-3 p-10">
        {appIcons.map((iconObj) => {
          const { icon, name } = iconObj

          return (
            <div
              key={name}
              className="flex cursor-pointer flex-col items-center hover:bg-slate-800 p-4 rounded-3xl">
              <div className="relative w-10 h-10">{icon}</div>
              <span className="text-center text-ellipsis overflow-hidden whitespace-nowrap w-[60px]">
                {name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Profile = forwardRef(function Profile(props, ref) {
  const { expandProfile } = props

  return (
    <div
      ref={ref}
      className="absolute cursor-auto top-16 mr-5 w-96 rounded-3xl bg-[#282a2c] right-0 p-4 z-10">
      <div className="grid grid-cols-3">
        <span className="col-start-2 place-self-center col-end-3 text-center">
          keshav01juneja@gmail.com
        </span>
        {/* close button */}
        <div
          onClick={expandProfile}
          className="cursor-pointer place-self-end  hover:bg-gray-400 rounded-full">
          <svg x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
            <path
              fill="gray"
              d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
          </svg>
        </div>
      </div>
      <div className="flex justify-center mt-5 relative">
        <Image
          src="https://www.rimweb.in/forums/uploads/monthly_2017_09/K.png.77196845ac98613a98ff47a806706d7e.png"
          alt="profile"
          width={60}
          height={60}
          className="rounded-full"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 48 48"
          className="absolute top-10 ml-12 bg-black rounded-full hover:bg-gray-600 ">
          <path
            fill="white"
            // className="text-white"
            d="M 36 5.0097656 C 34.205301 5.0097656 32.410791 5.6901377 31.050781 7.0507812 L 8.9160156 29.183594 C 8.4960384 29.603571 8.1884588 30.12585 8.0253906 30.699219 L 5.0585938 41.087891 A 1.50015 1.50015 0 0 0 6.9121094 42.941406 L 17.302734 39.974609 A 1.50015 1.50015 0 0 0 17.304688 39.972656 C 17.874212 39.808939 18.39521 39.50518 18.816406 39.083984 L 40.949219 16.949219 C 43.670344 14.228094 43.670344 9.7719064 40.949219 7.0507812 C 39.589209 5.6901377 37.794699 5.0097656 36 5.0097656 z M 36 7.9921875 C 37.020801 7.9921875 38.040182 8.3855186 38.826172 9.171875 A 1.50015 1.50015 0 0 0 38.828125 9.171875 C 40.403 10.74675 40.403 13.25325 38.828125 14.828125 L 36.888672 16.767578 L 31.232422 11.111328 L 33.171875 9.171875 C 33.957865 8.3855186 34.979199 7.9921875 36 7.9921875 z M 29.111328 13.232422 L 34.767578 18.888672 L 16.693359 36.962891 C 16.634729 37.021121 16.560472 37.065723 16.476562 37.089844 L 8.6835938 39.316406 L 10.910156 31.521484 A 1.50015 1.50015 0 0 0 10.910156 31.519531 C 10.933086 31.438901 10.975086 31.366709 11.037109 31.304688 L 29.111328 13.232422 z"></path>
        </svg>
      </div>
      <div className="text-2xl flex mt-2 justify-center">Hi, Keshav!</div>
      <div className="mx-8 mt-6">
        <button className="text-lg flex justify-center hover:bg-gray-700 bg w-full max-w-lg text-blue-200 border-2 border-gray-500 rounded-full mt-2">
          Manage your Google Account
        </button>
      </div>
      <div className="flex justify-center gap-2 items-center mt-8 text-sm ">
        <div>Privacy Policy</div>
        <div className="flex items-center w-1 h-1 bg-white rounded-full"></div>
        <div>Terms of Service</div>
      </div>
    </div>
  )
})
