import Image from "next/image"

export default function GoogleLinkNavbar() {
  return (
    <nav className="flex justify-end gap-2 mt-6 text-sm cursor-pointer">
      <div className="font-[arial] flex gap-4 mr-2 ">
        <span className="link-hover">Gmail</span>
        <span className="link-hover">Images</span>
      </div>
      <div className="group relative ">
        <svg
          viewBox="0 0 24 24"
          focusable="false"
          className="h-10 w-10 text-white -mt-3 flex items-center hover:bg-[#2f3034] rounded-full p-2 "
        >
          <path
            fill="var(--fill-color)"
            d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"
          ></path>
        </svg>
        <p className="bg-[#2f3034] absolute w-24 p-1 pl-2 rounded-lg -right-6 group-hover:opacity-100 opacity-0 group-hover:delay-1000">
          Google apps
        </p>
      </div>
      <div className="group hover:bg-[#2f3034] h-12 w-12 mr-4 -mt-4 rounded-full flex justify-center items-center relative">
        <Image
          src="https://www.rimweb.in/forums/uploads/monthly_2017_09/K.png.77196845ac98613a98ff47a806706d7e.png"
          alt="profile"
          width={35}
          height={35}
          className="rounded-full"
        />
        <p className="absolute top-12 rounded-lg right-2 bg-[#2f3034] flex-col items-center justify-center p-2 group-hover:opacity-100 opacity-0 transition-all  group-hover:delay-1000 ">
          <span className="">Google Account </span>
          <br />
          <span className="text-gray-400"> Keshav Juneja </span>
          <br />
          <span className="text-gray-400"> keshav01juneja@gmail.com </span>
        </p>
      </div>
    </nav>
  )
}
