import React from "react";
import {
  CheckMarkSVGComponent,
  MoneyFlowSVGComponent,
  SafeGuardSVGComponent,
  UptrendSVGComponent,
} from "../icons";
import { H } from "../common";
import { AnimatedElement } from "../animations/animated-element";
import { AnimatedList } from "../animations/animated-list";
import { cn } from "@/lib/utils";

const featuresItem = [
  {
    image: <UptrendSVGComponent />,
    description: "Earn passive income with high APY",
  },
  {
    image: <MoneyFlowSVGComponent />,
    description: "Instant fiat-to-crypto conversion",
  },
  {
    image: <SafeGuardSVGComponent />,
    description: "Secure and fast transactions on Solana",
  },
  {
    image: <CheckMarkSVGComponent />,
    description: "No hidden fees",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-1 relative">
      <div className="absolute w-[498px] h-[498px] top-[-200px] left-[-121px] rounded-[249px] blur-[100px] bg-gradient-to-r from-[rgba(93,63,211,0.2)] to-[rgba(0,255,163,0.2)]" />
      <div className="absolute w-[332px] h-[332px] top-[370px] left-[555px] rounded-[166px] blur-[100px] bg-gradient-to-r from-[rgba(93,63,211,0.2)] to-[rgba(0,255,163,0.2)]" />
      <div className="absolute w-[498px] h-[498px] top-[558px] left-[1064px] rounded-[249px] blur-[100px] bg-gradient-to-r from-[rgba(93,63,211,0.2)] to-[rgba(0,255,163,0.2)]" />
      <AnimatedElement>
        <div className="text-center mb-16">
          <H className="inline-block px-6 py-2 rounded-full bg-[#111530] text-white text-lg font-medium">
            Features
          </H>
        </div>
      </AnimatedElement>

      <AnimatedList
        staggerDelay={0.15}
        className="grid md:grid-cols-2 gap-6 max-w-xl mx-auto"
      >
        {featuresItem.map((item, index) => (
          <div
            className={cn("bg-[#0f1a2a] rounded-xl p-6 gap-5 space-y-10")}
            key={index}
            style={{ height: "223px" }}
          >
            <div className="flex">{item.image}</div>
            <H className="text-md leading-tight font-semibold mb-2">
              {item.description}
            </H>
          </div>
        ))}
      </AnimatedList>
    </section>
  );
};

export default Features;
