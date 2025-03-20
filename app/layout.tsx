import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/toast/sonner";
import Layout from "@/components/view/layout";

const groteskSans = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  initialScale: 1,
  interactiveWidget: "resizes-content",
  viewportFit: "cover",
  width: "device-width",
  userScalable: false,
};

export const metadata: Metadata = {
  applicationName: "SolNest",
  title: "SolNest",
  description: "The Future of Savings, Today",
  // icons: {
  //   icon: [{ sizes: "", url: "" }],
  // },
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: "SolNest",
    description: "The Future of Savings, Today",
    // images: [{ url: "", alt: "" }],
    type: "website",
    // url: "",
    siteName: "SolNest",
  },
  // alternates: {
  //   canonical: "",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", groteskSans.className)}>
        <Layout>{children}</Layout>
        <Toaster />
      </body>
    </html>
  );
}
