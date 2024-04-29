import Container from "../Container";
import Single from "./Single";

const items = [
    {
        heading : 'DESIGNS THAT INSPIRE, CONNECT,AND LEAVE A LASTING IMPRESSION',
        subHeading : 'DESIGN',
        gif : 'https://i.pinimg.com/originals/0d/ee/c7/0deec720000b2066289b9f2a989b5194.gif'
    },
    {
        heading : 'Constantly adopting cutting edge technology for your enterprise',
        subHeading : 'BUILD',
        gif:'https://i.pinimg.com/originals/d5/30/ec/d530eca8a16208c6e0dccf33553b4260.gif'
    },
    {
        heading : 'YOUR BRAND, YOUR STORY: WE SHAPE IDENTITIES WITH IMPACT',
        subHeading : 'MARKET',
        gif:'https://i.pinimg.com/originals/3f/d5/0a/3fd50a92ee38232eedb90b5d4279e63f.gif'
    },
]

const WhatWeDo = () => {
  return (
    <div className="relative bg-black flex items-center justify-center">
    <Container>
      <div className=" flex flex-col items-center">
      <div className="overflow-hidden mt-5 w-fit flex items-center justify-center rounded-md relative before:absolute before:bg-red-500 before:w-[120%] before:h-1/2 before:animate-[spin_6s_ease-in-out_infinite] after:absolute after:inset-[2px] px-4 py-2  after:bg-black after:rounded-md">
             <h1 className="text-5xl relative font-bold text-white  rounded-lg z-10">What <span className="text-6xl text-red-600">We</span> Do</h1>
          </div>
       <h2 className="text-white font-bold mt-2">We Offer Digital Solutions</h2>

       {
        items.map((item,i)=>(
            <Single item={item} key={i}/>       
        ))
       }
      </div>
      {/* <div className="h-[500px] bg-red-400"></div> */}

    </Container>
    </div>
  )
}

export default WhatWeDo