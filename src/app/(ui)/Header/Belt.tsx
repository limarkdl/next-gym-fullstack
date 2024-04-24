import { motion} from 'framer-motion';

const beltAnimation = {
    animate: {
        x: ['-50%', '0%'],
    },
    transition: {
        x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 12,
            ease: "linear"
        }
    }
};

interface BeltProps {
    background: string;
}


const Belt = ({ background }: BeltProps) => (
    <div style={{ overflow: 'hidden', width: '100%', height: '100%' }}>
        <motion.div
            className="beltBackground"
            style={{
                width: '200%',
                height: '100%',
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'repeat-x',
                backgroundSize: 'contain'
            }}
            {...beltAnimation}
        />
    </div>
);

export default Belt;