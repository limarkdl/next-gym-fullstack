import Section from "@/lib/animate/section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureSectionProps {
    delay: string;
    icon: ReactNode;
    colorClass: string;
    text: string;
    directionToSlide?: 'toRight' | 'toLeft';
}

const FeatureSection = ({ delay, icon, colorClass, text, directionToSlide }: FeatureSectionProps) => (
    <motion.div whileHover={{ scale: 1.1 }}>
        <Section delay={delay} directionForSlide={directionToSlide} className='bg-secondary px-10 whitespace-nowrap py-5 flex flex-row gap-5 items-center rounded-xl'>
            <div className={cn('w-6 h-6 flex justify-center items-center', colorClass)}>
                {icon}
            </div>
            {text}
        </Section>
    </motion.div>
);

export default FeatureSection;