import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sayyidhina Raka Maulana - Portfolio",
  description: "Portfolio of Sayyidhina Raka Maulana - AI Engineer, Software Developer, Mobile Developer",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.className} min-h-screen bg-dot-pattern text-slate-800 antialiased overflow-x-hidden`}>
        {children}
        {modal}
      </body>
    </html>
  );
}
