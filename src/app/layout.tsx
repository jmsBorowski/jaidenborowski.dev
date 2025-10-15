import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Jaiden Borowski | Portfolio",
  description: "Personal portfolio site built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen`}
      >
        {/* 🧭 HEADER */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-black">
              Jaiden Borowski
            </Link>

            <ul className="flex space-x-6">
              <li><Link href="/" className="text-black hover:text-blue-600 transition">Home</Link></li>
              <li><Link href="/about" className="text-black hover:text-blue-600 transition">About</Link></li>
              <li><Link href="/projects" className="text-black hover:text-blue-600 transition">Projects</Link></li>
              <li><Link href="/contact" className="text-black hover:text-blue-600 transition">Contact</Link></li>
            </ul>
          </nav>
        </header>


        {/* 🌟 PAGE CONTENT */}
        <main className="flex-grow container mx-auto px-6 py-10">
          {children}
        </main>

        {/* 🔗 FOOTER */}
        <footer className="bg-gray-100 border-t py-6 mt-10">
          <div className="container mx-auto text-center space-y-3">
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/jaiden-borowski" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/jmsBorowski"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                GitHub
              </a>
              <a
                href="mailto:jmsborowski@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Email
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Jaiden Borowski. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
