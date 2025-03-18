"use client";

import { type ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedElementProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right" | "none";
  type?: "tween" | "spring";
  distance?: number;
};

export function AnimatedElement({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  once = true,
  direction = "up",
  type = "tween",
  distance = 30,
}: AnimatedElementProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px 0px" });

  const directionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
        return {};
      default:
        return { y: distance };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...directionOffset(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        type,
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
