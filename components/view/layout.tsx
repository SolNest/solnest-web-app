"use client";
import React from "react";
import { Column } from "../common";
import Navbar from "./navbar";
import Footer from "./footer";
import { ThemeProvider } from "../provider/theme-provider";
// import { ThemeToggle } from "../animations/theme-toggle";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Column className="w-full min-h-dvh style-scrollbar">
        <main className="max-w-7xl max-h-screen h-full w-full mx-auto dark:text-secondary">
          <Navbar />
          {/* <ThemeToggle /> */}
          {children}
          <Footer />
        </main>
      </Column>
    </ThemeProvider>
  );
}
