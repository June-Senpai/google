import React from "react"

const TwoButtons = () => {
  return (
    <div className="flex justify-center gap-3 mt-6 ">
      <Button text="Google Search" />
      <Button text="I'm Feeling Lucky" />
    </div>
  )
}

export default TwoButtons

function Button({ text }) {
  return (
    <button className="bg-[#2f3034] rounded-lg p-2 px-4 font-[arial] hover:outline outline-1 outline-[#5f6368] ">
      {text}
    </button>
  )
}
