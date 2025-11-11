import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Reality Check Official — Cinematic 8K Prompt",
  description:
    "Ultra-realistic 8K cinematic prompt capturing a holographic eye above Earth, neon data streams, and the awakening of technological truth.",
  openGraph: {
    title: "Al Reality Check Official — Cinematic 8K Prompt",
    description:
      "Immerse in a futuristic digital world where a holographic eye unveils the truth of reality across Earth and humanity.",
    url: "https://agentic-5944f742.vercel.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Al Reality Check Official — Cinematic 8K Prompt",
    description:
      "Futuristic holographic eye, neon data streams, and cinematic truth reveal across Earth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
