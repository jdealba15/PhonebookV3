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
  title: "AGI Directory",
  description: "Project using NextJS",
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
    >
    <body className="min-h-full flex flex-col">
      <header className="p-4 border-b">
        AGI Directory
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="p-4 border-t text-sm text-gray-500">
        © 2026 AGI
      </footer>
    </body>
  </html>
  );
}
