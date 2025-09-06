import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Context } from "@/context/authContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammed Nowfal",
  description: "Muhammed Nowfal's Portfolio to showcase my skills and achivements",
  icons: {
    icon: "/portfolio/nowfal-icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} cz-shortcut-listen="true">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Context>
            <Header />
            {children}
          </Context>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
