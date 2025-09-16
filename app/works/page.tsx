"use client";
import { useRef } from "react";
import { WORKS } from "@/app/models/works/works.const";
import { useIsVisible } from "@/app/utils/useIsVisible";

const Works = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const isHeroVisible = useIsVisible(heroRef);

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
          <div className="mx-auto max-w-2xl lg:grid lg:max-w-none">
            <h1 className="text-base/7 font-semibold text-blue-600">Works</h1>
            <div className="mt-6 max-w-xl lg:mt-0">
              <p className="max-w-2xl text-balance tracking-tight lg:col-span-2 xl:col-auto text-3xl sm:text-5xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
                Here are some of the projects I've worked on.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {WORKS.map((work) => (
            <li key={work.title}>
              <NavLink to={`/work/${work.id}`}>
                <img
                  alt=""
                  src={work.image}
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                  {work.title}
                </h3>
                <p className="text-base/7 text-gray-600">{work.role}</p>
                <p className="mt-2 text-base/7 text-gray-600">
                  {work.techStacks.join(", ")}
                </p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Works;
