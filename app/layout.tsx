import type { Metadata } from "next";
import { Lora, Spectral } from "next/font/google";
import "./globals.css";
const lora = Lora({ subsets: ["latin"], variable: "--font-heading" });
const spectral = Spectral({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-reading" });
export const metadata: Metadata = {
  metadataBase: new URL("https://ai301-ads-recipe.vercel.app"),
  title: "Your posts. Your ads. One place. · How to AI 301",
  description: "Install your own ads harness. A full build recipe, personalized workspace and optional dashboard and chat connections. How to AI 301, October 9, 2026.",
  openGraph: { title: "Build your ads harness · How to AI 301", description: "Copy the recipe, describe your business, make changes and publish." },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${lora.variable} ${spectral.variable}`}>{children}</body></html>;
}
