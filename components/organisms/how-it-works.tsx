import React from "react";
import { H, P } from "../common";
import {
  DemoChartSVGComponent,
  DemoDepositSVGComponent,
  DemoExchangeSVGComponent,
} from "../icons";
import { AnimatedElement } from "../animations/animated-element";
import { AnimatedList } from "../animations/animated-list";

const workSteps = [
  {
    title: "Deposit in fiat or stable coins",
    description:
      "Easily save in stable coins by converting your fiat seamlessly",
    image: <DemoDepositSVGComponent />,
  },
  {
    title: "Earn Yield",
    description: "Your savings generate competitive returns powered by Solana",
    image: <DemoChartSVGComponent />,
  },
  {
    title: "Withdraw Anytime",
    description:
      "Convert back to fiat or withdraw in stablecoins effortlessly, without complex steps",
    image: <DemoExchangeSVGComponent />,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative px-1">
      <AnimatedElement>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block px-6 py-2 rounded-full bg-[#111530] text-white text-lg font-medium">
            How It Works
          </h2>
        </div>
      </AnimatedElement>

      <div className="absolute w-[498px] h-[498px] top-[375px] right-[120px] rounded-[249px] [background:linear-gradient(90deg,rgba(93,63,211,0.2)_0%,rgba(0,255,163,0.2)_100%)] blur-[100px] z-0" />
      <AnimatedList
        staggerDelay={0.2}
        className="grid md:grid-cols-3 mx-auto gap-4"
      >
        {workSteps.map((item, index) => (
          <div
            className="bg-[#0f1a2a] rounded-xl p-3 md:p-6 items-center md:items-start text-secondary relative backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] [background:linear-gradient(313deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]"
            key={index}
          >
            {/* gradient effect */}
            <H className="text-xl font-semibold mb-2">{item.title}</H>
            <P className="text-muted text-sm mb-6">{item.description}</P>
            <div className="flex w-full justify-center">{item.image}</div>
          </div>
        ))}
      </AnimatedList>
    </section>
  );
};

export default HowItWorks;
