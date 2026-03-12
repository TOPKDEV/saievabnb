import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saieva — Done-For-You Airbnb Business Setup",
  description:
    "Saieva builds your Airbnb business from the ground up — LLC formation, lease negotiation, interior design, photography, and full platform automation. You collect the checks.",
  openGraph: {
    title: "Saieva — We Build Your Airbnb Business. You Collect the Checks.",
    description:
      "High-ticket DFY Airbnb setup. LLC, lease, design, photography, automation — all done for you.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#0A0A0A] text-[#F5F5F5] font-sans antialiased"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
