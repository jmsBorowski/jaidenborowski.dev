"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface Project {
  images: string[];
  title: string;
  date: string;
  details: string;
  skills: string[];
  link?: string; // optional, since not every project may have a link
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showFade, setShowFade] = useState(false);

  const checkScrollable = () => {
    const el = scrollRef.current;
    if (!el) {
      setShowFade(false);
      return;
    }

    const tolerance = 2;
    const hasScrollbar = el.scrollHeight > el.clientHeight + tolerance;
    if (!hasScrollbar) {
      setShowFade(false);
      return;
    }

    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - tolerance;
    setShowFade(!atBottom);
  };

  useEffect(() => {
    checkScrollable();

    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScrollable, { passive: true });
    window.addEventListener("resize", checkScrollable);

    let ro: ResizeObserver | null = null;
    try {
      if (typeof window !== "undefined" && "ResizeObserver" in window && el) {
        ro = new ResizeObserver(() => requestAnimationFrame(checkScrollable));
        ro.observe(el);
        Array.from(el.children).forEach((child) => ro!.observe(child as Element));
      }
    } catch {}

    const t = setTimeout(checkScrollable, 300);

    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", checkScrollable);
      if (el) el.removeEventListener("scroll", checkScrollable);
      if (ro) {
        try {
          ro.disconnect();
        } catch {}
      }
    };
  }, [project]);

  useEffect(() => {
    const t = setTimeout(checkScrollable, 120);
    return () => clearTimeout(t);
  }, [currentIndex]);

  const prevImage = () => {
    setCurrentIndex((i) => (i === 0 ? project.images.length - 1 : i - 1));
  };

  const nextImage = () => {
    setCurrentIndex((i) => (i === project.images.length - 1 ? 0 : i + 1));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full relative text-black overflow-hidden">
        <div ref={scrollRef} className="p-6 overflow-y-auto max-h-[85vh] relative">
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-3xl font-extrabold text-black hover:scale-110 transition cursor-pointer"
          >
            ✖
          </button>

          {/* IMAGE CAROUSEL */}
          <div className="w-full flex items-center justify-between mt-10 mb-6">
            <button
              onClick={prevImage}
              className="text-3xl font-bold text-black hover:scale-110 transition cursor-pointer select-none px-4"
            >
              ←
            </button>

            <div className="flex-grow flex justify-center">
              <Image
                src={project.images[currentIndex]}
                alt={project.title}
                width={700}
                height={450}
                className="max-w-[95%] max-h-[320px] object-cover rounded shadow"
                onLoadingComplete={() => setTimeout(checkScrollable, 50)}
              />
            </div>

            <button
              onClick={nextImage}
              className="text-3xl font-bold text-black hover:scale-110 transition cursor-pointer select-none px-4"
            >
              →
            </button>
          </div>

          {/* Title + Text Content */}
          <h2 className="text-2xl font-bold mb-4">
            {project.title} ({project.date})
          </h2>
          <p className="mb-4 whitespace-pre-line">{project.details}</p>

          {/* Skills */}
          <h3 className="font-semibold mt-4 mb-2">Skills Gained:</h3>
          <ul className="list-disc list-inside space-y-1 mb-4">
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          {/* Link */}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              View Project →
            </a>
          )}
        </div>

        {showFade && (
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-35 bg-gradient-to-t from-white to-transparent" />
        )}
      </div>
    </div>
  );
}
