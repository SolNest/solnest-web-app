"use client";
import React from "react";
import { Picture } from "../common/picture";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Row } from "../common";
import { ThemeToggle } from "../animations/theme-toggle";

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

  const router = useRouter();
  return (
    <nav className="top-5 pt-2 sticky max-w-4xl w-full px-1 mx-auto z-20">
      <div className="flex bg-[#111530]/80 items-center justify-between backdrop-blur-md rounded-full px-6 py-1">
        <Link href="/">
          <Picture
            container={{ className: "w-[130px] h-[60px]" }}
            image={{ src: "/images/solnest.png", alt: "SolNest Logo" }}
          />
        </Link>
        <div className="hidden lg:flex items-center space-x-6">
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
        <Row className="gap-2 items-center">
          <ThemeToggle />
          <Button
            className="rounded-full px-6 dark:text-secondary"
            style={{ background: "bg-primary-gradient" }}
            onClick={() => router.push("#solnest")}
          >
            Join Waitlist
          </Button>
        </Row>
      </div>
    </nav>
  );
};

export default Navbar;
