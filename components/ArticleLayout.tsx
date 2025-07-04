"use client";

import { useState } from "react";
import Link from "next/link";
import { ReactNode } from "react";
import { useEffect, useRef } from "react";

interface ArticleLayoutProps {
  title: string;
  date: string;
  image: string;
  children: ReactNode;
}

export default function ArticleLayout({
  title,
  date,
  image,
  children,
}: ArticleLayoutProps) {
  const [grayscale, setGrayscale] = useState(false);

  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowContactDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <main
      className={`min-h-screen bg-pink-50 font-sans text-pink-900 transition duration-500 ${
        grayscale ? "grayscale" : ""
      }`}
    >
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full flex justify-between items-center px-6 md:px-20 py-4 shadow-sm bg-pink-50/80 backdrop-blur">
        <Link href="/" className="flex items-center space-x-2 group">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-15 h-15 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="flex space-x-6 text-pink-900 text-sm font-medium">
          <Link
            href="/"
            className="hover:underline underline-offset-4 decoration-pink-300"
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className="hover:underline underline-offset-4 decoration-pink-300"
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className="hover:underline underline-offset-4 decoration-pink-300"
          >
            Blog
          </Link>
          <div className="relative">
            <button
              onClick={() => setShowContactDropdown(!showContactDropdown)}
              className="px-3 py-1 bg-pink-300 text-pink-900 rounded-full hover:bg-pink-400 transition"
            >
              Contact
            </button>

            {showContactDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-60 bg-pink-50 rounded-xl shadow-lg p-4 space-y-2 text-sm z-50 border border-pink-100"
              >
                <p className="text-pink-800">
                  💌{" "}
                  <a
                    href="mailto:avni.bafna1006@gmail.com"
                    className="underline decoration-pink-300 hover:text-pink-700"
                  >
                    avni.bafna1006@gmail.com
                  </a>
                </p>
                <p className="text-pink-800">
                  📞{" "}
                  <a
                    href="tel:+15302312008"
                    className="underline decoration-pink-300 hover:text-pink-700"
                  >
                    +1 (530) 231-2008
                  </a>
                </p>
                <p className="text-pink-800">
                  💼{" "}
                  <a
                    href="https://www.linkedin.com/in/avni-bafna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-pink-300 hover:text-pink-700"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 px-6 md:px-0 max-w-3xl mx-auto space-y-6 pb-16">
        <Link
          href="/blog"
          className="text-pink-700 underline underline-offset-4 decoration-pink-300 block mt-6"
        >
          ← Back to Blog
        </Link>
        <h1 className="text-3xl md:text-4xl font-serif font-extrabold">
          {title}
        </h1>
        <p className="text-pink-700 text-sm">{date}</p>
        {image && (
          <img
            src={image}
            alt={title}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        )}
        <div className="text-pink-800 text-base md:text-lg leading-relaxed space-y-4">
          {children}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-pink-700 text-sm text-center py-8">
        © {new Date().getFullYear()} Avni Bafna. All rights reserved.
      </footer>

      {/* Floating Accessibility Toggle Button */}
      <button
        onClick={() => setGrayscale(!grayscale)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-pink-300 hover:bg-pink-400 text-pink-900 rounded-full shadow-md flex items-center justify-center text-2xl transition"
        aria-label="Toggle black and white mode"
      >
        <img
          src="/accessibility_icon.png"
          alt="Accessibility"
          className="w-12 h-12"
        />
      </button>
    </main>
  );
}
