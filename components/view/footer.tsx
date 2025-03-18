import Link from "next/link";
import React from "react";
import { PoweredSolanaSVGComponent, TransparentSolNest, X } from "../icons";
import { Picture } from "../common/picture";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      <div className="grid md:grid-cols-4 gap-8 px-2 border-b border-gray-800 py-8">
        <div className="md:col-span-1 flex flex-col items-start">
          <Link href="/" className="flex items-start justify-start gap-2 mb-4">
            <Picture
              container={{ className: "w-[180px] h-[60px]" }}
              image={{ src: "/images/solnest.png", alt: "SolNest Logo" }}
            />
          </Link>
          <p className="text-sm text-muted mb-4">
            Where Your Savings Grow Smarter and Faster - Seamlessly Bridging
            Fiat and Crypto on Solana
          </p>
          <div className="flex items-center gap-2 mb-6">
            <PoweredSolanaSVGComponent />
          </div>
          <p className="text-xs text-muted">
            Copyright © 2023 SolNest. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#why-solnest"
                className="text-sm text-muted hover:text-secondary transition-colors"
              >
                Why SolNest
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                className="text-sm text-muted hover:text-secondary transition-colors"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="#features"
                className="text-sm text-muted hover:text-secondary transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#faq"
                className="text-sm text-muted hover:text-secondary transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-muted hover:text-secondary transition-colors"
              >
                Join Waitlist
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-4">Socials</h3>
          <Link
            href="https://twitter.com"
            className="flex items-center gap-2 text-sm text-muted hover:text-secondary transition-colors"
          >
            <span>Follow us on</span>
            <X />
          </Link>
        </div>

        <div>
          <h3 className="font-medium mb-4">
            Support the Future of Smart Savings
          </h3>
          <p className="text-sm text-muted mb-4">
            Join us in building SolNest, a seamless bridge between fiat and
            crypto savings. Whether you&apos;re an investor, partner, or
            sponsor, your support can drive financial innovation.
          </p>
          <Link
            href="#"
            className="inline-block px-4 py-2 [background:linear-gradient(180deg,rgba(93,63,211,1)_0%,rgba(10,31,68,1)_76%)] rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch With Us
          </Link>
        </div>
      </div>
      <div className="flex w-full pt-5">
        <TransparentSolNest />
      </div>
      <div className="w-full h-[194px] absolute bottom-0 rounded-[708.5px/97px] [background:linear-gradient(90deg,rgba(93,63,211,0.3)_0%,rgba(0,255,163,0.3)_100%)] blur-[100px]" />
    </footer>
  );
};

export default Footer;
