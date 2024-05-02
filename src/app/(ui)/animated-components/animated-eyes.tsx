import { motion } from "framer-motion"
import Image from "next/image"
import Eye_Zrachok from '@/public/Eye_Zrachok.svg'
import Eye_Yabloko from '@/public/Eye_Yabloko.svg'
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";


const eyeAnimation = {
    animate: {
        x:
            ['0px', '-3px', '3px', '0px', '0px', '0px',
                '0px', '0px', '0px', '3px', '0px', '0px',
                '-3px', '0px'],
    },
    transition: {
        x: {
            delay: 2,
            repeat: Infinity,
            repeatType: "loop",
            duration: 12,

        }
    }
};


function AnimatedEyes() {

  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className='h-[48px] w-[48px]' /> ;
  }

  const fillColor = resolvedTheme === 'dark' ? 'white' : 'black';

    return (
    
        <>
            <div className='absolute z-[-1] md:top-1/4 top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>

                <Image
                    src={Eye_Yabloko}
                    alt={"Predator's Eyes"}
                    width={312}
                    height={312}
                    className="max-w-none"
                />

            </div>
            <div className='absolute z-[-1] md:top-1/4 top-[25%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <motion.div
                    className="beltBackground"
                    {...eyeAnimation}>
                    <Zrachok fillColor={fillColor} />
                </motion.div>

            </div>
        </>

    
)
};

export default AnimatedEyes;

const Zrachok = ({fillColor = 'black'}) => (
<svg width="312" height="312" viewBox="0 0 112 96" fill={fillColor} xmlns="http://www.w3.org/2000/svg">
<path d="M35.3226 35.1576C35.3749 34.9475 35.6251 34.9475 35.6774 35.1576L36.9923 40.4375C37.0274 40.5786 36.9385 40.7202 36.8148 40.7202H34.1852C34.0615 40.7202 33.9726 40.5786 34.0077 40.4375L35.3226 35.1576Z"/>
<path d="M35.3226 45.8424C35.3749 46.0525 35.6251 46.0525 35.6774 45.8424L36.9923 40.5625C37.0274 40.4214 36.9385 40.2798 36.8148 40.2798H34.1852C34.0615 40.2798 33.9726 40.4214 34.0077 40.5625L35.3226 45.8424Z"/>
<path d="M79.3226 35.1576C79.3749 34.9475 79.6251 34.9475 79.6774 35.1576L80.9923 40.4375C81.0274 40.5786 80.9385 40.7202 80.8148 40.7202H78.1852C78.0615 40.7202 77.9726 40.5786 78.0077 40.4375L79.3226 35.1576Z"/>
<path d="M79.3226 45.8424C79.3749 46.0525 79.6251 46.0525 79.6774 45.8424L80.9923 40.5625C81.0274 40.4214 80.9385 40.2798 80.8148 40.2798H78.1852C78.0615 40.2798 77.9726 40.4214 78.0077 40.5625L79.3226 45.8424Z"/>
</svg>)