"use client";
import { Column } from "@/components/common";
import { FAQ } from "@/components/organisms/faq";
import Features from "@/components/organisms/features";
import { Hero } from "@/components/organisms/hero";
import HowItWorks from "@/components/organisms/how-it-works";
import JoinWaitlist from "@/components/organisms/join-waitlist";
import WhySolNest from "@/components/organisms/why-solnest";

export default function WaitList() {
  return (
    <Column className="min-h-screen dark:text-secondary overflow-hidden style-scrollbar flex flex-col">
      <Hero />
      <WhySolNest />
      <HowItWorks />
      <Features />
      <FAQ />
      <JoinWaitlist />
    </Column>
  );
}
