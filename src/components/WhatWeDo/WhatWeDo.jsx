import Container from "../Container";
import Single from "./Single";

const items = [
    {
        heading : 'DESIGNS THAT INSPIRE, CONNECT,AND LEAVE A LASTING IMPRESSION',
        subHeading : 'DESIGN',
        gif : '/Images/butterfly.gif'
    },
    {
        heading : 'Constantly adopting cutting edge technology for your enterprise',
        subHeading : 'BUILD',
        gif:'/Images/colorChanging.gif'
    },
    {
        heading : 'Experts in solving the WHY,WHERE and HOW of propelling your business to new frontiers',
        subHeading : 'MARKET',
        gif:'/Images/whiteRound.gif'
    },
]

const WhatWeDo = () => {
  return (
    <div className="relative bg-black flex items-center justify-center">
    <Container>
      <div className=" flex flex-col items-center">
        <div className="overflow-hidden mt-10 w-fit flex items-center justify-center rounded-md relative before:absolute before:bg-red-500 before:w-[120%] before:h-1/2 before:animate-[spin_6s_ease-in-out_infinite] after:absolute after:inset-[2px] px-4 py-2 after:bg-black after:rounded-md">
            <h1 className="text-3xl md:text-5xl relative font-bold text-white  rounded-lg z-10">What <span className="text-5xl md:text-6xl text-red-600">We</span> Do</h1>
         </div>
       <h2 className="text-white font-bold mt-2">We Offer Digital Solutions</h2>

       {
        items.map((item,i)=>(
            <Single item={item} key={i}/>       
        ))
       }
      </div>

    </Container>
    </div>
  )
}

export default WhatWeDo