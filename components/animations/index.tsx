import { AnimatePresence, motion } from "framer-motion";
import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

interface AnimateDivProps extends PropsWithChildren {
  container?: HTMLAttributes<HTMLDivElement>;
}

const FromTop: FC<AnimateDivProps> = ({ children, container }) => (
  <AnimatePresence>
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 100,
      }}
      className={cn(container?.className)}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

const FromBottom: FC<AnimateDivProps> = ({ children, container }) => (
  <AnimatePresence>
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -100,
      }}
      className={cn(container?.className)}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

const FromLeft: FC<AnimateDivProps> = ({ children, container }) => (
  <AnimatePresence>
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: 100,
      }}
      className={cn(container?.className)}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

const FromRight: FC<AnimateDivProps> = ({ children, container }) => (
  <AnimatePresence>
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
        x: -100,
      }}
      className={cn(container?.className)}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

const FadeInFromBottom: FC<AnimateDivProps> = ({ children, container }) => (
  <AnimatePresence>
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 50,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={cn(container?.className)}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

const TypingDots = () => (
  <div className="flex items-center space-x-1 h-6">
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, repeat: 3, repeatType: "reverse" }}
      className="w-[6px] h-[6px] bg-gray-600 rounded-full"
    />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        repeat: 3,
        repeatType: "reverse",
        delay: 0.1,
      }}
      className="w-[6px] h-[6px] bg-gray-600 rounded-full"
    />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        repeat: 3,
        repeatType: "reverse",
        delay: 0.2,
      }}
      className="w-[6px] h-[6px] bg-gray-600 rounded-full"
    />
  </div>
);

export const Animate = {
  FromTop,
  FromBottom,
  FromLeft,
  FromRight,
  FadeInFromBottom,
  TypingDots,
};
