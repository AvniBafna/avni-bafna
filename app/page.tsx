"use client";

import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
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
      className={`min-h-screen snap-y snap-mandatory bg-pink-50 font-sans transition duration-500 ${
        grayscale ? "grayscale" : ""
      }`}
    >
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full flex justify-between items-center px-6 md:px-20 py-4 shadow-sm">
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
            className="font-bold underline underline-offset-4 decoration-pink-300"
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

      {/* About Section */}
      <section
        id="about"
        className="snap-start min-h-screen flex flex-col items-center justify-center w-full bg-pink-50 backdrop-blur-lg p-8 md:p-12 pt-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto rounded-3xl p-4 md:p-8 shadow-md bg-white/50">
          {/* Text */}
          <div className="md:w-[70%] space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 tracking-tight font-serif">
              Avni Bafna
              <br />
              <span className="text-pink-700">
                <Typewriter
                  words={[
                    "Software Development",
                    "Machine Learning",
                    "Product Management",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
            <p className="text-base md:text-lg text-pink-800 max-w-2xl leading-relaxed font-light">
              I’m a{" "}
              <span className="font-medium">
                recent Computer Science and Cognitive Science graduate
              </span>{" "}
              from UC Davis with a passion for exploring how{" "}
              <span className="font-medium">
                technology, design, and human behavior intersect
              </span>{" "}
              to create meaningful experiences. I’ve worked on projects from
              machine learning models to design explorations, blending
              analytical thinking with creative curiosity. I love{" "}
              <span className="font-medium">
                learning, building, and sharing ideas
              </span>{" "}
              that inspire intentional living, and I’m always looking for ways
              to grow in{" "}
              <span className="font-medium">tech, wellness, and design.</span>{" "}
              <br />
              <br />
              This is my cozy corner on the internet where I share{" "}
              <span className="font-medium">
                projects, creative experiments, and lifestyle reflections
              </span>{" "}
              blending technology and intentional living.
            </p>
            <Link
              href="/projects"
              className="inline-block px-6 py-3 bg-pink-300 text-pink-900 rounded-full hover:bg-pink-400 transition font-medium"
            >
              View My Projects
            </Link>
            <a
              href="#experience"
              className="block mt-4 text-pink-900 hover:underline"
            >
              See My Experience ↓
            </a>
          </div>

          {/* Image */}
          <div className="md:w-[30%] mt-10 md:mt-0 md:ml-10 flex justify-center">
            <img
              src="/avni.jpg"
              alt="Aesthetic lifestyle"
              className="rounded-2xl shadow-lg max-h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="snap-start min-h-screen flex flex-col items-center justify-center w-full bg-pink-50 backdrop-blur-lg p-8 md:p-12"
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 w-full max-w-6xl mx-auto rounded-3xl p-4 md:p-8 shadow-md bg-white/50">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 tracking-tight font-serif mb-8 md:mb-0 text-center md:min-w-[200px]">
            Experience
          </h2>

          <div className="relative border-l-2 border-pink-300 pl-6 space-y-8">
            {[
              {
                date: "Jul 2025 – Oct 2025",
                title: "Software Engineering Intern at Pantheon",
                description: "",
              },
              {
                date: "June 2024 – Aug 2024",
                title: "Technology Intern at QTS",
                description:
                  "Automated data extraction from battery reports using AWS Textract, stored and managed data in Aurora PostgreSQL, and built ML models predicting battery failures with R² = 0.96.",
              },
              {
                date: "Jul 2023 – Sep 2023",
                title: "Software Development Intern at Shnorh",
                description:
                  "Built frontend interfaces using React and developed web3 blockchain APIs with Next.js and Prisma, enhancing decentralized application experiences.",
              },
              {
                date: "Jun 2022 – Aug 2022",
                title: "Software Engineering Intern at EasyPay",
                description:
                  "Developed REST APIs and a UPI transaction API using Java, Spring, and SQL to enable direct merchant-customer bank transfers, optimizing application performance.",
              },
            ].map((exp, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-7.75 top-1 w-3 h-3 bg-pink-300 rounded-full"></span>
                <p className="text-sm text-pink-700">{exp.date}</p>
                <h3 className="text-xl md:text-xl font-semibold text-pink-900">
                  {exp.title}
                </h3>
                <p className="text-pink-800 text-base md:text-lg">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-pink-700 text-sm text-center py-8">
          © {new Date().getFullYear()} Avni Bafna. All rights reserved.
        </footer>
      </section>

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
