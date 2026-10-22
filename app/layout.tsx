import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kensho Munakata",
  description:
    "Personal website of Kensho Munakata, a recent UH Manoa graduate with a BA in Economics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
