import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider,
  ClerkLoaded,
  ClerkLoading,
 } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Authentication - Template",
  description: "Use dirctly in your project auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkLoading>
          <div className="flex items-center justify-center h-screen">
            <div className="text-2xl">
              {/* you can add custom loader here */}
              <div className="loader"></div>
            </div>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col h-screen">
            <Navbar />
            {children}
          </div>
        </div>
        </ClerkLoaded>
      </body>
    </html>
    </ClerkProvider>
  );
}
