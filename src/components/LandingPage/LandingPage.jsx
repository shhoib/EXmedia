import { FaLongArrowAltRight } from "react-icons/fa";
import Container from "../Container";
import WhatWeDo from "../WhatWeDo/WhatWeDo";
import Footer from "../footer/Footer";
import { useCallback } from "react";

const LandingPage = () => {

  const sendMessage = useCallback(()=>{
    window.open('https://wa.me/9605155858', '_blank');
  },[])

  
  return (
    <div className="relative">
      <img src="/Images/exlogo.png" alt="" className="w-20 fixed top-4 left-8 z-30"/>
      <div className="fixed right-10 bottom-8 w-20 z-30">
        <img src="/Images/wChat.png" alt="" className="absolute bottom-20 opacity-0 hover:opacity-100 transition-opacity" />
        <img src="/Images/whatsapp.png" alt=""  className=" cursor-pointer opacity-100  transition-opacity"onClick={sendMessage}
         onMouseEnter={(e) => e.target.previousSibling.classList.remove('opacity-0')} onMouseLeave={(e) => e.target.previousSibling.classList.add('opacity-0')} />
      </div>

     <div className="bg-black flex flex-col md:flex-row lg:flex-row items-center justify-center md:gap-28 h-full relative">
            {/* <img src="/Images/spinning.gif" alt="" className="absolute bottom-20 md:relative md:bottom-0 hover:scale-125 hover:cursor-pointer transition-all"/> */}
            <img src="/Images/back.png" alt="" className="md:w-auto w-2/6 hidden sm:block" />
            <div className="bg-[url('/Images/back.png')] md:bg-[url('/Images/blueBG.gif')] bg-no-repeat z-10 flex flex-col items-center justify-center text-center md:text-start md:items-start p-14">
            <h1 className="text-4xl md:text-5xl text-white font-bold p-3 pt-14 drop-shadow-[0_5px_5px_rgb(91,20,20)]">CRAFTING <br/> BRAND IDENTITY <br/> CAPTURING MOMENTS</h1>
            <h1 className="font-semibold text-slate-300 p-3">Since 2006 <span className="text-red-600 text-xl font-bold"> EX-MEDIA</span> has been a trailblazing advertisement agency</h1>
            <button className="border-red-500 border-2 text-red-500 px-5 py-2 m-3 transition ease-in-out duration-1000 hover:-translate-y-1 hover:rounded-md hover:text-white hover:border-white flex items-center justify-center">Read More <FaLongArrowAltRight className="ml-2"/></button>
            </div>
     </div>

     <div className="bg-gradient-to-b from-black to-zinc-950 flex flex-col items-center pb-7 pt-10">
          <div className="overflow-hidden w-fit flex items-center justify-center rounded-md relative before:absolute before:bg-red-500 before:w-[120%] before:h-1/2 before:animate-[spin_6s_ease-in-out_infinite] after:absolute after:inset-[2px] mt-7 px-4 py-2  after:bg-black after:rounded-md">
             <h1 className="text-3xl md:text-5xl relative font-bold text-white  rounded-lg z-10">Who <span className="text-5xl md:text-6xl text-red-600">We</span> Are</h1>
          </div>

         <Container>
            <div className="flex items-center">
             <div className="flex flex-col items-center">
               <h6 className="text-white p-6">Since 2006, <span className="text-red-600 font-bold">Exmedia</span> has been a trailblazing Advertisement agency, driving brand success through innovation, creativity, and strategic excellence. With an illustrious history, we've honed our craft to deliver impactful campaigns that transcend conventional boundaries. From dynamic visuals to compelling narratives,
                 our diverse expertise in advertising, design, and branding has fueled the growth of numerous clients. We're not just an agency; we're your partners in shaping brand legacies. With a deep understanding of market dynamics, consumer behavior, and emerging trends, Exmedia is your compass to navigate the ever-evolving advertising landscape, ensuring your brand remains at the forefront of industry innovation.
                 <br/><br/> Based on our strategy work, we create distinctive brand Your Ultimate Advertisement Company, where innovation meets creativity to redefine your brand's journey. Our agency stands as a pillar of excellence, providing a comprehensive suite
                 of services including Studio, Graphics, and Branding. Step into our cutting-edge studio, a hub of ingenuity where ideas take shape. From brainstorming sessions to concept realization, our team collaborates to bring your vision to life. Our studio is the birthplace of dynamic campaigns that captivate and resonate.</h6>
             </div>
            <img src="/Images/faceWithVR.jpg" alt="" className="rounded-3xl w-1/6 brightness-50 hidden md:flex"/>
            </div>
         </Container>
        </div>

      <WhatWeDo/>
      <Footer/>
    </div>
  )
}

export default LandingPage