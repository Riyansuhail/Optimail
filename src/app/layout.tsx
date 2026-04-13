import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "OptiMail - AI-Powered University Email Directory",
  description:
    "Find the right contact at your university instantly. AI-powered search, directory browsing, and email drafting for students, faculty, and staff.",
  keywords: ["university", "email directory", "AI", "contact finder", "northeastern"],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
