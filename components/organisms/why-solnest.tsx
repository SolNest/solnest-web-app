import React from "react";
import { H, P } from "../common";
import { LightningSVGComponent } from "../icons";
import { AnimatedElement } from "../animations/animated-element";

const WhySolNest = () => {
  return (
    <section id="why-solnest" className="py-24 relative mx-auto px-2">
      <AnimatedElement>
        <div className="text-center mb-12 md:mb-16">
          <H className="inline-block px-6 py-2 rounded-full bg-[#111530] text-lg font-medium text-secondary">
            Why SolNest
          </H>
        </div>
      </AnimatedElement>

      <div className="flex flex-col gap-10 md:flex-row md:justify-between md:space-x-15 md:px-5 md:gap-2 items-center max-w-5xl relative">
        <AnimatedElement direction="left" delay={0.2}>
          <div className="w-full">
            <H className="text-2xl sm:text-3xl font-bold mb-6">
              Navigating savings in Web3 can be complex, low yields,
              fiat-to-crypto conversion hurdles and lack of seamless access
            </H>

            <P className="text-muted mb-6">
              SolNest simplifies Web3 savings with seamless fiat-to-crypto
              conversion, high yield stablecoin savings and effortless fund
              management - all in one intuitive product.
            </P>
          </div>
        </AnimatedElement>

        <AnimatedElement direction="right" delay={0.4}>
          <div className="items-center flex w-64 h-64 animate-pulse">
            <LightningSVGComponent />
          </div>
        </AnimatedElement>
      </div>
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[180px] rounded-full [background:linear-gradient(90deg,rgba(93,63,211,0.2)_0%,rgba(0,255,163,0.2)_100%)] blur-[100px] z-0"
        aria-hidden="true"
      />
    </section>
  );
};

export default WhySolNest;
