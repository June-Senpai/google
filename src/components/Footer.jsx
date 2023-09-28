import React from "react"

function Footer() {
  return (
    <footer className="bg-[#171717] text-[#9a999d] w-full mt-auto">
      <h3 className="ml-3 p-2">India</h3>
      <div className="border-t border-[#3c4043] w-full my-1 "></div>
      <div className="flex justify-between items-center p-4">
        <div className="flex gap-6 ml-2">
          <p className="text-sm link-hover cursor-pointer ">About</p>
          <p className="text-sm link-hover cursor-pointer ">Advertising</p>
          <p className="text-sm link-hover cursor-pointer ">Business</p>
          <p className="text-sm link-hover cursor-pointer ">How Search works</p>
        </div>
        <div className="flex gap-6 mr-6">
          <p className="text-sm link-hover cursor-pointer ">Privacy</p>
          <p className="text-sm link-hover cursor-pointer ">Terms</p>
          <p className="text-sm link-hover cursor-pointer ">Settings</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
