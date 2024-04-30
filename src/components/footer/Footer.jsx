import Container from "../Container";
import { IoMailOutline } from "react-icons/io5";
import { CiMobile1,CiLocationOn  } from "react-icons/ci";



const item1 = ['HOME','ABOUT','SERVICES','CONTACT'];
const item2 = [
    {
        icon : <IoMailOutline/>,
        text : 'INFO@EXMEDIA.IN'
    },
    {
        icon : <CiMobile1/>,
        text : '+919526123466'
    },
    {
        icon : <CiLocationOn />,
        text : 'Kerala & UAE'
    },
]

const item3 = ['INSTAGRAM','FACEBOOK','TWITTER','YOUTUBE','THREADS']

const Footer = () => {

  return (
    <footer className="bg-gradient-to-b from-black to-zinc-900 text-white pt-14 text-xs md:text-base ">
        <Container>
          <hr  className="pb-6 border-red-900"/>
            <div className="flex justify-around">
                <div>
                    {
                        item1.map((item,i)=>(
                            <h1 key={i} className=" m-3 md:m-4 font-bold hover:text-red-500 cursor-pointer transition-all delay-75">{item}</h1>
                        ))
                    }
                </div>

                <div>
                    {
                        item2.map((item,i)=>(
                          <div key={i} className="flex items-center gap-4 md:gap-6 m-3 md:m-4 font-bold cursor-pointer transition-all delay-75 hover:text-red-500">
                            {item.icon}
                            <h2>{item.text}</h2>
                          </div>
                        ))
                    }
                </div>

                <div>
                    {item3.map((item,i)=>(
                        <h2 key={i} className="m-3 md:m-5 font-bold cursor-pointer transition-all delay-75 hover:text-red-500">{item}</h2>
                    ))}
                </div>
            </div>
            <h1 className="text-center">copyright  2023  EXmedia</h1>
        </Container>
    </footer>
  )
}

export default Footer