import { useInView } from "framer-motion";
import { useRef } from "react";


interface SectionProps {
    children: React.ReactNode;
    className?: string;
    delay?: string;
    type?: "fade" | "slide";
}

// @ts-ignore
function Section({ children, className, delay, type }: SectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  

    if (type === "fade") {
        return (
            <section ref={ref}>
              <span
                style={{
                  opacity: isInView ? 1 : 0,
                  transition: "all cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  transitionDelay: delay
                }}
                className={className}
              >
                {children}
              </span>
            </section>
          );
    } else {
        return (
            <section ref={ref}>
              <span
                style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  transitionDelay: delay
                }}
                className={className}
              >
                {children}
              </span>
            </section>
          );
    }

    
  }


export default Section;