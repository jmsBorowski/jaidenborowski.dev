"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Track dropdown state
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Wait until mounted to avoid SSR/client mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  if (!mounted) {
    // Minimal SSR shell to avoid mismatch
    return (
      <>
        {!isHome && (
          <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto flex justify-between items-center px-6 py-4">
              <Link href="/" className="text-2xl font-bold text-black">
                Jaiden Borowski
              </Link>
            </nav>
          </header>
        )}
        <main
          className={`flex-grow ${
            isHome
              ? "p-0 m-0 w-full max-w-none flex items-center justify-center bg-white"
              : "container mx-auto px-6 py-10"
          }`}
        >
          {children}
        </main>
      </>
    );
  }

  // Normal render (client side)
  return (
    <>
      {/* HEADER */}
      {!isHome && (
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-black">
              Jaiden Borowski
            </Link>

            <ul className="flex space-x-6 relative">
              <li>
                <Link href="/" className="text-black hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black hover:text-blue-600 transition">
                  About
                </Link>
              </li>

              {/* ▼ Dropdown Menu (Click only) */}
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen((prev) => !prev)}
                  className="text-black hover:text-blue-600 transition focus:outline-none flex items-center"
                >
                  Projects ▾
                </button>
                <ul
                  className={`absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md z-50 transform transition-all duration-200 ease-out
                    ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
                  `}
                >
                  <li>
                    <Link
                      href="/projectsart"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-t-md"
                      onClick={() => setOpen(false)}
                    >
                      Art Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projectscs"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-b-md"
                      onClick={() => setOpen(false)}
                    >
                      CS Projects
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/contact" className="text-black hover:text-blue-600 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      )}

      {/* MAIN */}
      <main
        className={`flex-grow ${
          isHome
            ? "p-0 m-0 w-full max-w-none flex items-center justify-center bg-white"
            : "container mx-auto px-6 py-10"
        }`}
      >
        {children}
      </main>

      {/* FOOTER */}
      {!isHome && (
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
      )}
    </>
  );
}
