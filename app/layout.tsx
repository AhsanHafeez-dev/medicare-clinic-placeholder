import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "MediCare Clinic | Your Trusted Healthcare Provider",
  description:
    "MediCare Clinic provides comprehensive healthcare services with experienced doctors and state-of-the-art facilities. Book your appointment today.",
  keywords: ["healthcare", "clinic", "doctors", "medical", "cardiology", "pediatrics"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased overflow-x-hidden" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-bg-primary text-text-primary transition-colors duration-300 overflow-x-hidden">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
