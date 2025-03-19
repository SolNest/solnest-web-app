"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedElement } from "../animations/animated-element";

const faqItems = [
  {
    question: "What is SolNest?",
    answer:
      "SolNest is a platform that allows you to earn high yields on your stablecoin savings, powered by Solana blockchain technology.",
  },
  {
    question: "How does SolNest work?",
    answer:
      "SolNest converts your fiat currency to stablecoins and invests them in high-yield DeFi protocols on Solana, generating competitive returns for users.",
  },
  {
    question: "What makes SolNest different from traditional savings?",
    answer:
      "SolNest offers higher yields than traditional banks, instant access to your funds, and seamless conversion between fiat and crypto.",
  },
  {
    question: "Is SolNest safe to use?",
    answer:
      "SolNest employs industry-leading security practices and smart contract audits to ensure the safety of user funds.",
  },
  {
    question: "What stablecoins can I save with?",
    answer: "SolNest supports major stablecoins including USDC, USDT, and DAI.",
  },
  {
    question: "How is the interest generated?",
    answer:
      "Interest is generated through various DeFi protocols on Solana that offer lending, liquidity provision, and yield farming opportunities.",
  },
  {
    question: "Can I withdraw my savings at any time?",
    answer:
      "Yes, you can withdraw your savings at any time without any lockup periods or penalties.",
  },
  {
    question: "Is there a minimum deposit amount?",
    answer:
      "The minimum deposit amount is $10 or equivalent in supported stablecoins.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No, SolNest is transparent about all fees. There are no hidden charges.",
  },
  {
    question: "Is SolNest available for use now?",
    answer:
      "SolNest is currently in private beta. Join our waitlist to get early access.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="faq" className="py-24 px-1">
      <AnimatedElement>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="inline-block px-6 py-2 rounded-full bg-[#111530] text-secondary text-lg font-medium">
            Frequently Asked Questions
          </h2>
        </div>
      </AnimatedElement>

      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-[#0f1a2a] rounded-xl overflow-hidden border-none"
                >
                  <AccordionTrigger className="px-6 py-5 text-left hover:no-underline text-primary dark:text-secondary cursor-pointer">
                    <span>{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-secondary dark:text-muted">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
