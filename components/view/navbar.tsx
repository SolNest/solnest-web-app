"use client";
import React from "react";
import { Picture } from "../common/picture";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Why SolNest",
      route: "#solnest",
    },
    {
      name: "How it Works",
      route: "#how-it-works",
    },
    {
      name: "Features",
      route: "#features",
    },
    {
      name: "FAQ",
      route: "#faq",
    },
  ];
  return (
    <nav className="top-5 pt-2 sticky max-w-4xl w-full mx-auto z-20">
      <div className="flex bg-[#111530]/80 items-center justify-between backdrop-blur-md rounded-full px-6 py-1">
        <Link href="/">
          <Picture
            container={{ className: "w-[130px] h-[60px]" }}
            image={{ src: "/images/solnest.png", alt: "SolNest Logo" }}
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              className="text-sm text-secondary hover:text-primary active:text-primary"
              href={item.route}
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Button
          className="rounded-full px-6 dark:text-secondary"
          style={{ background: "bg-primary-gradient" }}
        >
          Join Waitlist
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
