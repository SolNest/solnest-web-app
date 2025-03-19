import React from "react";
import { WaitlistForm } from "../forms/waitlist-form";
import { RadialSolNestSVGComponent } from "../icons";
import { AnimatedElement } from "../animations/animated-element";

const JoinWaitlist = () => {
  return (
    <section className="py-12 px-1">
      <AnimatedElement>
        <div
          className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 md:p-12"
          style={{ background: "bg-gradient-primary" }}
        >
          <div className="flex flex-col md:flex-row md:justify-between gap-5 items-center mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Be Among the First to Experience Smart Savings
              </h2>
              <p className="text-muted mb-6">
                Join our waitlist today and be the first to access seamless
                fiat-to-crypto savings, high APY, and secure withdrawals—all
                powered by Solana
              </p>
              <div className="w-full">
                <WaitlistForm />
              </div>
            </div>

            <div className="flex animate-pulse">
              <AnimatedElement direction="right" delay={0.3}>
                <RadialSolNestSVGComponent />
              </AnimatedElement>
            </div>
          </div>
        </div>
      </AnimatedElement>
    </section>
  );
};

export default JoinWaitlist;
