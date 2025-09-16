"use client";
import { useRef } from "react";
import { Skills } from "@/app/components/Skills/Skills";
import { useIsVisible } from "@/app/utils/useIsVisible";
import { Inspirations } from "./components/Inspirations/Inspirations";

const AboutPage = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const isHeroVisible = useIsVisible(heroRef);

  const skillsRef = useRef<HTMLElement | null>(null);
  const isSkillsVisible = useIsVisible(skillsRef);

  const personalRef = useRef<HTMLElement | null>(null);
  const isPersonalVisible = useIsVisible(personalRef);

  const inspirationsRef = useRef<HTMLElement | null>(null);
  const isInspirationsVisible = useIsVisible(inspirationsRef);

  return (
    <main className="bg-gray-100">
      <div
        ref={heroRef}
        className="bg-gray-300 rounded-b-[100px] relative overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14 before:absolute before:inset-0 before:bg-[url('/assets/noise-light.png')]"
      >
        <div
          className={`relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-20 lg:px-8 transition-opacity ease-in-out delay-200 duration-640 ${
            isHeroVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-balance tracking-tight lg:col-span-2 xl:col-auto text-3xl sm:text-5xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
              A developer who loves clean code, great UX, and an after-work
              pint.
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Hi there! I am a full stack developer with 8+ years of
                experience building user-friendly, high-performance web
                applications.
              </p>
              <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Originally from Hokkaido, Japan, I now call Toronto home, where
                I continue to craft seamless digital experiences while enjoying
                the city's vibrant food and culture.
              </p>
            </div>
            <img
              alt=""
              src="/assets/profile_02.jpg"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
      </div>
      <section ref={skillsRef} className="bg-gray-100 rounded-b-[100px]">
        <Skills visible={isSkillsVisible} />
      </section>
      <section
        ref={personalRef}
        className="bg-gray-300 rounded-b-[100px] relative overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14 before:absolute before:inset-0 before:bg-[url('/assets/noise-light.png')]"
      >
        <div
          className={`mx-auto max-w-7xl px-6 lg:px-8 py-20 ease-in-out duration-640 ${
            isPersonalVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-base/7 font-semibold text-blue-600">
            Beyond the Screen
          </h2>
          <p
            className={`mt-2 max-w-xl text-pretty text-4xl tracking-tight sm:text-5xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent`}
          >
            When I'm not coding, you can find me:
          </p>
          <ul className="mt-16 max-w-2xl list-disc list-inside text-base/7 text-gray-600">
            <li>Unwinding with a pint (or two) after work</li>
            <li>Exploring Japanese, Korean, Vietnamese, and Mexican food</li>
            <li>Traveling—especially to islands</li>
            <li>
              Laughing at silly jokes and enjoying dark humor (big fan of Jimmy
              Carr!)
            </li>
          </ul>
        </div>
      </section>
      <section ref={inspirationsRef} className="bg-gray-100 rounded-b-[100px]">
        <Inspirations visible={isInspirationsVisible} />
      </section>
    </main>
  );
};

export default AboutPage;
