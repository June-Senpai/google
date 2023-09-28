import Footer from "@/components/Footer"
import GoogleLinkNavbar from "@/components/GoogleLinkNavbar"
import Language from "@/components/Language"
import Search from "@/components/Search"
import TwoButtons from "@/components/TwoButtons"

export default function Home() {
  return (
    <div className="">
      <GoogleLinkNavbar />
      <Search />
      <TwoButtons />
      <Language />
    </div>
  )
}
