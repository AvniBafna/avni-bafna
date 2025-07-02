"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Projects() {
  const [grayscale, setGrayscale] = useState(false);
  const [columns, setColumns] = useState(3);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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

  const projects = [
    {
      title: "Alignr",
      description:
        "Mobile-first scheduling app simplifying meeting coordination using user-centered design.",
      longDescription:
        "Alignr is a mobile-first scheduling tool designed to reduce cognitive load and simplify meeting coordination for students and early-career professionals.\n" +
        "Developed using a **user-centered design process**, the project included extensive needfinding, user interviews, and thematic analysis to identify key pain points in current scheduling tools such as lack of calendar integration, poor mobile usability, and time zone management challenges.\n" +
        "Using **Figma** for low- and mid-fidelity prototyping, Alignr iteratively incorporated user feedback to refine interface design and features like customizable availability, calendar syncing, group creation, and privacy-preserving free/busy visibility.\n" +
        "We applied **HCI principles**, **Nielsen’s Usability Heuristics, and design thinking methodologies** to ensure an intuitive, aesthetically clean interface while implementing reminders, smart meeting suggestions, and RSVP tracking for transparency.\n" +
        "The project strengthened my skills in **user research**, **UX/UI design**, prototyping, usability testing, and human-computer interaction while collaborating in a cross-functional team environment.",
      image: "/alignr.png",
      link: "https://www.figma.com/design/XTF2BM6S0fDu6Q4WnIPNPq/ecs-164-project-file?node-id=1-2&t=dQYLdZagcIqtolbX-1",
    },
    {
      title: "California Housing Predictions",
      description:
        "Predicting housing prices using machine learning models and EDA.",
      longDescription:
        "Built a complete machine learning pipeline to forecast California housing prices and estimate median incomes using publicly available housing datasets.\n" +
        "Conducted in-depth exploratory data analysis (EDA) with **Pandas**, **Seaborn**, and **Matplotlib** to uncover correlations, trends, and geographic patterns.\n" +
        "Developed and compared multiple models including **Random Forest**, **K-means Clustering**, and **Linear Regression**, tuning hyperparameters and evaluating models for best performance, achieving **R² = 0.82** with Random Forest.\n" +
        "Applied skills in data preprocessing, feature engineering, regression modeling, clustering, and Python-based data visualization.",
      image: "/california-housing.png",
      link: "https://github.com/GC03/ECS171_Group7",
    },
    {
      title: "ResCred",
      description:
        "Blockchain-based credential management system using ResilientDB and GraphQL.",
      longDescription:
        "Designed and implemented a decentralized credential management system using **ResilientDB** and **GraphQL** to enable secure, tamper-proof credential verification.\n" +
        "Built the frontend with **Vue.js, TypeScript, CSS,** and **Vite**, providing verifiers with a clean interface to submit verification requests and track credential statuses.\n" +
        "Leveraged a permissioned blockchain architecture using **Solidity smart contracts** to ensure transparency and authenticity in credential transactions while maintaining scalability and efficiency within the ResilientDB environment.\n" +
        "Applied skills in blockchain architecture, API development, frontend engineering, and smart contract design throughout the project.",
      image: "/ResCred.png",
      link: "https://github.com/ResilientApp/ResCred",
    },
    {
      title: "Stress Detection BCI",
      description:
        "Brain-Computer Interface for detecting and classifying stress signals.",
      longDescription:
        "Developed a Brain-Computer Interface (BCI) system for detecting and classifying stress signals using EEG data, aiming to integrate targeted music therapy for stress alleviation.\n" +
        "Collected EEG datasets from participants performing the Stroop test using OpenBCI hardware and software, followed by preprocessing and artifact removal using **BrainFlow** and **MNE in Python**.\n" +
        "Engineered features and trained a **Support Vector Machine (SVM)** classifier, achieving **83%** accuracy in classifying stress states.\n" +
        "This project demonstrated proficiency in EEG signal acquisition, machine learning model development, Brain-Computer Interface systems, Python-based signal processing, and applied research presentation.",
      image: "/stress-detection.png",
      link: "https://github.com/Neurotech-Davis/EEG-Stress-Detection",
    },
    {
      title: "Neuro-Prosthetic Robotic Arm",
      description:
        "Brain-Computer Interface controlling a robotic arm using mental commands.",
      longDescription:
        "Developed a low-cost neuro-prosthetic robotic arm capable of interpreting mental commands (Grab, Drop, Left, Right) using the **EMOTIV Insight EEG headset** and a **Node-RED** pipeline for real-time command translation.\n" +
        "Led end-to-end project management using **Kanban**, overseeing data collection, preprocessing, and integration across data, software, and hardware teams.\n" +
        "Designed experimental protocols for EEG data collection and feature extraction, applying machine learning for command classification to control the robotic arm.\n" +
        "Presented the system at the 2nd Annual California Neurotechnology Conference, demonstrating skills in EEG signal processing, Brain-Computer Interfaces, machine learning pipelines, and cross-team project management.",
      image: "/neuro-prosthetic-arm.jpg",
      link: "https://github.com/Neurotech-Davis/RoboticArm",
    },
    {
      title: "Neurotechnology Wiki",
      description:
        "Published a comprehensive knowledge base for Brain-Computer Interface development.",
      longDescription:
        "Created and maintained the Neurotechnology Wiki at Neurotech@Davis, serving as a centralized, accessible knowledge base for Brain-Computer Interface (BCI) development.\n" +
        "Authored detailed articles on EEG data processing pipelines using **Python, BrainFlow,** and **MNE**, and documented machine learning workflows for neurotechnology applications.\n" +
        "Leveraged **GitHub** for version control and collaboration, ensuring future project teams could efficiently implement EEG signal preprocessing, feature extraction, and classifier development within their BCI pipelines.",
      image: "/neurotech-wiki.png",
      link: "https://github.com/Neurotech-Davis/Neurotech-Wiki",
    },
  ];

  // 🔑 New helper for formatted output:
  const renderFormattedDescription = (text: string) => {
    return text.split("\n").map((line, idx) => (
      <p key={idx} className="text-pink-800 text-sm mt-1">
        {line.split("**").map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i} className="font-semibold text-pink-900">
              {part}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    ));
  };

  return (
    <main
      className={`min-h-screen bg-pink-50 font-sans transition duration-500 ${
        grayscale ? "grayscale" : ""
      }`}
    >
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-pink-50/90 backdrop-blur-md w-full flex justify-between items-center px-6 md:px-20 py-4 shadow-sm">
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
            className="font-bold underline underline-offset-4 decoration-pink-300"
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

      <div className="px-6 md:px-20 py-8">
        <section className="w-full max-w-6xl mx-auto bg-white/60 backdrop-blur-lg rounded-3xl p-6 md:p-10 shadow-md">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 tracking-tight font-serif">
              Projects
            </h2>
            <div className="flex items-center space-x-3 text-pink-900 text-sm">
              <span className="tracking-widest text-sm text-pink-900">
                VIEW
              </span>
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setColumns(num)}
                  className={`px-1 transition ${
                    columns === num
                      ? "font-bold underline underline-offset-4 decoration-pink-300"
                      : "hover:text-pink-700"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div
            className={`grid gap-6 ${
              columns === 1
                ? "grid-cols-1"
                : columns === 2
                ? "grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
            }`}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition flex flex-col"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-pink-900 font-semibold text-xl">
                    {project.title}
                  </h3>
                  {expandedIndex === index ? (
                    renderFormattedDescription(project.longDescription)
                  ) : (
                    <p className="text-pink-800 text-base mt-1">
                      {project.description}
                    </p>
                  )}
                  <div className="mt-auto pt-3 flex justify-between items-center">
                    <button
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                      className="text-pink-700 underline underline-offset-4 decoration-pink-300 text-sm"
                    >
                      {expandedIndex === index ? "Show less" : "Show more"}
                    </button>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-700 underline underline-offset-4 decoration-pink-300 text-sm"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-pink-700 text-sm text-center pb-8">
          © {new Date().getFullYear()} Avni Bafna. All rights reserved.
        </footer>
      </div>

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
