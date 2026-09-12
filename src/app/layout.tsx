import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sayyidhina Raka Maulana - Portfolio",
  description: "Portfolio of Sayyidhina Raka Maulana - AI Engineer, Software Developer, Mobile Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} min-h-screen bg-dot-pattern text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
