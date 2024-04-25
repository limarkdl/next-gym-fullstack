import { motion } from "framer-motion"
import Image from "next/image"
import Eye_Zrachok from '@/public/Eye_Zrachok.svg'
import Eye_Yabloko from '@/public/Eye_Yabloko.svg'


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


const AnimatedEyes = () => (
    
        <>
            <div className='absolute z-[-1] md:top-1/4 top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>

                <Image
                    src={Eye_Yabloko}
                    alt={"Predator's Eyes"}
                    width={312}
                    height={312}
                />

            </div>
            <div className='absolute z-[-1] md:top-1/4 top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
                <motion.div
                    className="beltBackground"
                    {...eyeAnimation}>
                    <Image
                        src={Eye_Zrachok}
                        alt={"Predator's Eyes"}
                        width={312}
                        height={312}
                    />
                </motion.div>

            </div>
        </>

    
);

export default AnimatedEyes;