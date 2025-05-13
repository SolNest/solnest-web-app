import React from "react";
import { Animate } from "../animations";
import { H, P } from "../common";
import { WaitlistForm } from "../forms/waitlist-form";
import { AnimatedElement } from "../animations/animated-element";

export function Hero() {
  return (
    <section
      id="#hero"
      className="pt-6 pb-24 h-screen relative overflow-hidden px-2"
    >
      <div className="w-full h-[90px] absolute bottom-0 left-0 rounded-full bg-gradient-to-r from-[rgba(93,63,211,1)] to-[rgba(0,255,163,1)] blur-[120px]"></div>
      <div className="text-center mt-24 max-w-2xl mx-auto">
        <AnimatedElement delay={0.2}>
          <div className="inline-block px-4 py-1 rounded-full bg-[#0f2a3a] text-emerald-400 text-sm mb-6">
            Where Your Savings Grow with High Yield
          </div>
        </AnimatedElement>

        <AnimatedElement delay={0.4}>
          <H className="text-5xl md:text-7xl font-bold mb-6">
            Save Smarter, Earn More On{" "}
            <span className="text-blue-400">Solana</span>
          </H>
        </AnimatedElement>

        <Animate.FadeInFromBottom>
          <P className="text-lg text-muted mb-10 max-w-lg mx-auto">
            Seamless stablecoins savings with competitive yields and easy fiat
            to crypto conversion
          </P>
        </Animate.FadeInFromBottom>

        <AnimatedElement delay={0.8}>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
