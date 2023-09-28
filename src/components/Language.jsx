import React from "react"

const Language = () => {
  const languages = [
    "हिन्दी",
    "বাংলা",
    "తెలుగు",
    "मराठी",
    "தமிழ்",
    "ગુજરાતી",
    "ಕನ್ನಡ",
    "മലയാളം",
    "ਪੰਜਾਬੀ",
  ]
  return (
    <div className="text-center mt-6 text-sm ">
      <span className="text-[#bdc1c6]">Google offered in: </span>
      {languages.map((lang, index) => (
        <a
          key={index}
          className="text-blue-400 text-sm px-1 cursor-pointer link-hover "
        >
          {lang}
        </a>
      ))}
    </div>
  )
}

export default Language
