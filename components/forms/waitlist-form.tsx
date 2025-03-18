"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // setIsSubmitting(true);
    // // Handle form submission

    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   setIsSubmitted(true);
    //   setEmail("");

    //   // Reset after 3 seconds
    //   setTimeout(() => {
    //     setIsSubmitted(false);
    //   }, 3000);
    // }, 1500);
    console.log("Email submitted:", email);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <div className="relative flex-grow">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email Address"
          container={{
            className:
              "w-full px-4 py-3 rounded-full border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500",
          }}
          rightElement={
            <Button
              type="submit"
              className="dark:text-secondary rounded-full px-6"
              variant="default"
              style={{ background: "bg-primary-gradient" }}
            >
              Get Early Access
            </Button>
          }
          required
        />
      </div>
    </form>
  );
}
