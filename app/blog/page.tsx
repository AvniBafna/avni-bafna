"use client";

import { useState } from "react";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Blog() {
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

  const posts = [
    {
      date: "11/11/2025",
      title: "Leveraging AI to Improve Sustainability in Fashion",
      description:
        "Exploring how AI can reduce clothing waste and drive sustainability in the fashion industry through smarter consumption, upcycling, and optimized production.",
      image: "/sustainability.jpg",
      link: "/blog/sustainability",
    },
    {
      date: "05/17/2024",
      title:
        "Ethics in Neurotechnology: Privacy, Identity, and Fairness in a Rapidly Evolving Field",
      description:
        "Explore the ethical challenges and opportunities in neurotechnology, from preserving mental privacy to protecting human identity and ensuring fairness as brain-computer interfaces and neural devices advance.",
      image: "/ethics-neurotech.png",
      link: "/blog/ethics-neurotechnology",
    },
    {
      date: "04/10/2024",
      title: "The Saree: A Timeless Symbol of Grace, Heritage, and Empowerment",
      description:
        "Exploring the rich history, regional diversity, and modern empowerment embodied by the timeless Indian saree.",
      image: "/saree-banner.jpeg",
      link: "/blog/saree",
    },
    {
      date: "05/24/2023",
      title: "The Potential of Neural Networks for Strong AI",
      description:
        "Exploring whether neural networks can achieve strong AI, through Searle’s thought experiments and the Churchlands’ challenges.",
      image: "/neural-networks.jpg",
      link: "/blog/neural-networks",
    },
    {
      date: "09/31/2022",
      title: "Lessons I Learned from My First Internship",
      description:
        "My experience at my first internship and what I learnt that I will take to my future roles!",
      image: "/internship.jpeg",
      link: "/blog/internship",
    },
    // Add more posts as needed
  ];

  return (
    <main
      className={`min-h-screen bg-pink-50 font-sans transition duration-500 ${
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
          <h1 className="text-pink-900 font-bold text-lg tracking-tight">
            Avni Bafna
          </h1>
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
            className="font-bold underline underline-offset-4 decoration-pink-300"
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
                    +1 (123) 456-7890
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

      <div className="max-w-5xl mx-auto pt-32 pb-16 px-6 space-y-20">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-center gap-8 bg-white/50 backdrop-blur-lg rounded-3xl p-4 md:p-8 shadow-md`}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full md:w-1/2 rounded-xl shadow object-cover max-h-[400px]"
            />
            <div className="md:w-1/2 space-y-3 text-pink-900">
              <p className="text-sm text-pink-700">{post.date}</p>
              <h2 className="text-3xl md:text-3xl font-serif font-extrabold">
                {post.title}
              </h2>
              <p className="text-pink-800">{post.description}</p>
              <a
                href={post.link}
                className="text-pink-700 underline underline-offset-4 decoration-pink-300"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-pink-700 text-sm text-center pb-8">
        © {new Date().getFullYear()} Avni Bafna. All rights reserved.
      </footer>

      <div className="fixed bottom-6 right-6" style={{ filter: "none" }}>
        <button
          onClick={() => setGrayscale(!grayscale)}
          className="w-14 h-14 bg-pink-300 hover:bg-pink-400 text-pink-900 rounded-full shadow-md flex items-center justify-center text-2xl transition"
          aria-label="Toggle black and white mode"
        >
          <img
            src="/accessibility_icon.png"
            alt="Accessibility"
            className="w-12 h-12"
          />
        </button>
      </div>
    </main>
  );
}
