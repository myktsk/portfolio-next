import Link from "next/link";
import { WORKS } from "@/app/models/works/works.const";

type Props = {
  visible: boolean;
};

export const Works = ({ visible }: Props) => {
  return (
    <div className="py-24 sm:py-32">
      <div
        className={`mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 ease-in-out duration-640 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-base/7 font-semibold text-blue-600">Works</h2>
        <p
          className={`mt-2 max-w-xl text-pretty text-4xl tracking-tight sm:text-5xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent`}
        >
          From concepts to fully functional web solutions
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src={WORKS[0].image}
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <p className="text-sm/4 font-semibold text-blue-600">
                  {WORKS[0].category}
                </p>
                <h3 className="mt-2 text-lg font-medium tracking-tight text-gray-900">
                  <a href={WORKS[0].url}>{WORKS[0].title}</a>
                </h3>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-900">
                  {WORKS[0].role}
                </p>
                <p className="max-w-lg text-sm/6 text-gray-500">
                  {WORKS[0].techStacks.join(", ")}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src={WORKS[1].image}
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <p className="text-sm/4 font-semibold text-blue-600">
                  {WORKS[1].category}
                </p>
                <h3 className="mt-2 text-lg font-medium tracking-tight text-gray-900">
                  <a href={WORKS[1].url}>{WORKS[1].title}</a>
                </h3>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-900">
                  {WORKS[1].role}
                </p>
                <p className="max-w-lg text-sm/6 text-gray-500">
                  {WORKS[1].techStacks.join(", ")}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src={WORKS[2].image}
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <p className="text-sm/4 font-semibold text-blue-600">
                  {WORKS[2].category}
                </p>
                <h3 className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  <a href={WORKS[2].url}>{WORKS[2].title}</a>
                </h3>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  {WORKS[2].role}
                </p>
                <p className="max-w-lg text-sm/6 text-gray-500">
                  {WORKS[2].techStacks.join(", ")}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <img alt="" src={WORKS[3].image} className="h-80 object-cover" />
              <div className="p-10 pt-4">
                <p className="text-sm/4 font-semibold text-blue-600">
                  {WORKS[3].category}
                </p>
                <h3 className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  <a href={WORKS[3].url}>{WORKS[3].title}</a>
                </h3>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  {WORKS[3].role}
                </p>
                <p className="max-w-lg text-sm/6 text-gray-500">
                  {WORKS[3].techStacks.join(", ")}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <Link
                href="/works"
                className="h-full flex items-center justify-center"
              >
                <p className="text-sm/4 font-semibold text-blue-600 py-4">
                  View More
                </p>
              </Link>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
};
