import { FaLongArrowAltRight } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="bg-black flex  items-center h-full">
            <img src="/Images/spinning.gif" alt="" className=""/>
            <div className="z-10">
            <h1 className="text-6xl text-white font-bold p-3 pt-14 drop-shadow-[0_5px_5px_rgb(121,20,20)]">CRAFTING <br/> BRAND IDENTITY <br/> CAPTURING MOMENTS</h1>
            <h3 className="font-semibold text-slate-300 p-3">Since 2006 <span className="text-red-600 text-xl font-bold"> EX-MEDIA</span> has been a trailblazing advertisement agency</h3>
            <button className="border-red-500 border-2 text-red-500 px-5 py-2 m-3 transition ease-in-out duration-1000 hover:-translate-y-1 hover:rounded-md hover:text-white hover:border-white flex items-center justify-center">Read More <FaLongArrowAltRight className="ml-2"/></button>
            </div>
         {/* <img src="/Images/face.png" alt="" className="absolute right-0 bottom-0"/> */}
    </div>
  )
}

export default LandingPage