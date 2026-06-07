import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mithun Chide | Senior Frontend Developer & React Expert",
  description: "Portfolio of Mithun Chide, a Frontend Developer with 4+ years of experience building scalable, accessible, and performance-driven React & TypeScript web applications for global brands like PayPal and Epsilon.",
  keywords: [
    "Mithun Chide",
    "Frontend Developer",
    "React.js Developer",
    "TypeScript Developer",
    "Bengaluru Frontend Developer",
    "Web Performance Expert",
    "WCAG Accessibility Developer",
    "React Native",
    "Next.js Developer"
  ],
  authors: [{ name: "Mithun Chide" }],
  creator: "Mithun Chide",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mithunchide.dev", // Placeholder URL
    title: "Mithun Chide | Senior Frontend Developer & React Expert",
    description: "Frontend Developer with 4+ years building scalable, accessible React & TypeScript applications at Epsilon for PayPal and other enterprise clients.",
    siteName: "Mithun Chide Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mithun Chide | Senior Frontend Developer & React Expert",
    description: "4+ years building scalable, high-performance React & TypeScript applications.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-[#090d16] dark:text-[#f1f5f9]">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
