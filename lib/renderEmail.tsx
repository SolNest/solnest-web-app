import React from "react";
import { render } from "@react-email/render";
import WelcomeEmail from "@/emails/WelcomeEmail";

export async function generateWelcomeEmail(email: string) {
  return render(<WelcomeEmail userEmail={email} />);
}
