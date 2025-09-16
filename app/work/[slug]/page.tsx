import type { Work } from "@/app/models/works/works.types";

type Props = Promise<{ slug: string }>;

const WorkDetailPage = ({ work }: Props) => {
  return (
    <main className="bg-gray-100">
      <div className="bg-gray-300 rounded-b-[100px] relative overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14 before:absolute before:inset-0 before:bg-[url('/assets/noise-light.png')]">
        <div
          className={`relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-20 lg:px-8 `}
        >
          <div className="mx-auto max-w-2xl lg:grid lg:max-w-none">
            <p className="text-base/7 font-semibold text-blue-600">
              Work - {work.category}
            </p>
            <div className="mt-6 max-w-xl lg:mt-0">
              <h1 className="max-w-2xl text-balance tracking-tight lg:col-span-2 xl:col-auto text-3xl sm:text-5xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
                {work.title}
              </h1>
              <dl className="mt-6 text-gray-500">
                <div className="flex gap-4 items-center text-gray-500">
                  <dt>Role:</dt>
                  <dd>{work.role}</dd>
                </div>
                <div className="flex gap-4 items-center text-gray-500">
                  <dt>Technology:</dt>
                  <dd>{work.techStacks.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-4xl">
          <img
            alt=""
            src={work.image}
            className="w-full rounded-2xl object-cover"
          />
        </div>

        {work.description && work.description.length && (
          <ul className="list-disc mt-6 text-base/7 text-gray-600">
            {work.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        )}
        {work.url && (
          <p className="mt-6 text-gray-600">
            Visit the site:{" "}
            <a
              href={work.url}
              target="_blank"
              className="text-blue-600 hover:underline font-semibold"
            >
              {work.url}
            </a>
          </p>
        )}
      </div>
    </main>
  );
};

export default WorkDetailPage;
