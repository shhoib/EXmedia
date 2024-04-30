/* eslint-disable react/prop-types */

import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { TfiArrowRight } from "react-icons/tfi";


const Single = ({ item }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '2 1']
  });

  const scaleProgress  = useTransform(scrollYProgress, [1, 0], [1 ,0.1]);
  const opacityProgress  = useTransform(scrollYProgress, [1, 0], [1 ,-1]);
  const scaleXprogress  = useTransform(scrollYProgress, [1, 0], ["100%", "-450%"]);

  return (
    <section className="py-14 px-3 md:p-0">
      <motion.div className="relative p-5 md:p-2" ref={ref} style={{ scale: scaleProgress,opacity:opacityProgress}}>
        <motion.img style={{x:scaleXprogress}} src={item.gif} alt="" className="w-3/6" />
        <div className="text-white absolute top-20">
         <h5 className="text-5xl md:text-7xl">{item.subHeading}</h5>
         <h1 className="mt-3">{item.heading}</h1>
         <h2 className="text-xl md:text-2xl mt-5 flex items-center cursor-pointer hover:text-red-600">Learn More <TfiArrowRight className="ml-5"/></h2>
        </div>
      </motion.div>
    </section>
  );
};

export default Single;
