import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WQT – World’s Quality Talent | World-Class Digital Talent On-Demand",
  description:
    "WQT (World’s Quality Talent) is a global digital workforce platform that connects organizations with elite, vetted talent across engineering, data, AI, cloud, cybersecurity, design, and product.",
  metadataBase: new URL("https://www.wqt.example"), // replace with real domain
  openGraph: {
    title: "WQT – World’s Quality Talent",
    description:
      "Unlock world-class digital talent on-demand. Build high-performing, borderless teams across engineering, data, AI, cloud, security, design, and product.",
    url: "https://www.wqt.example",
    siteName: "WQT – World’s Quality Talent",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.wqt.example",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationLdJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WQT – World’s Quality Talent",
    url: "https://www.wqt.example",
    description:
      "Global digital workforce ecosystem providing world-class digital talent on-demand.",
    sameAs: [
      "https://www.linkedin.com/company/wqt",
      "https://twitter.com/wqt",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLdJson) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

