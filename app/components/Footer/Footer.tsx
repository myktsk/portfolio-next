"use client";
import { useRef } from "react";
import { useIsVisible } from "@/app/utils/useIsVisible";

export const Footer = () => {
  const ctaRef = useRef<HTMLElement | null>(null);
  const isCtaVisible = useIsVisible(ctaRef);

  return (
    <section
      ref={ctaRef}
      className="bg-gray-300 relative before:absolute before:inset-0 before:bg-[url('/assets/noise-light.png')]"
    >
      <div className="relative px-6 py-24 sm:py-32 lg:px-8 z-10">
        <div
          className={`mx-auto max-w-2xl text-center transition-opacity ease-in-out delay-200 duration-640 ${
            isCtaVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2
            className={`text-3xl sm:text-5xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent`}
          >
            Looking for a developer?
          </h2>
          <p className="inline-block mt-10 rounded-full bg-gray-900 px-10 py-4 text-sm text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gray-600">
            <a
              href="https://www.linkedin.com/in/miyukituisku/"
              target="_blank"
              rel="noreferrer"
            >
              Let's connect
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
