import React from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Animate = ({
  children,
  variant = "slide-bottom",
  delay = 0.5,
  duration = 0.5,
  x = 100,
  y = 100,
  style,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  let variants = {};
  switch (variant) {
    case "slide-bottom":
      variants = {
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay },
        },
        hidden: { opacity: 0, y },
      };
      break;
    case "slide-left":
      variants = {
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay },
        },
        hidden: { opacity: 0, x: `-${x}` },
      };
      break;
    case "slide-right":
      variants = {
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay },
        },
        hidden: { opacity: 0, x },
      };
      break;
    case "skew":
      variants = {
        visible: {
          opacity: 1,
          transform: "translate(0px, 0px) skew(0deg, 0deg)",
          transition: { duration, delay },
        },
        hidden: {
          opacity: 0,
          transform: "translate(30px, 100px) skew(-10deg, 0deg)",
        },
      };
      break;
    case "pop":
      variants = {
        visible: {
          scale: 1,
          transition: { duration, delay },
        },
        hidden: { scale: 0 },
      };
      break;
    case "fadeIn":
        variants = {
          visible: {
            opacity: 1,
            transition: { duration, delay },
          },
          hidden: { opacity: 0 },
        };
        break;
    default:
      break;
  }

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      style={style}
    >
      {children}
    </motion.div>
  );
};
