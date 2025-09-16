import { DEV_STACKS } from "@/app/models/tools/tools.const";

type Props = {
  visible: boolean;
};

export const Tools = ({ visible }: Props) => {
  return (
    <div
      className={`py-24 sm:py-32 relative z-10 ease-in-out duration-640 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-blue-600">
            Tools / Technologies
          </h2>
          <p
            className={`mt-2 max-w-xl text-pretty text-4xl tracking-tight sm:text-5xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent`}
          >
            The languages, frameworks, and platforms I work with
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {DEV_STACKS.map((tool) => (
            <li key={tool.name}>
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                {tool.name}
              </h3>
              <p className="text-sm/6 text-gray-600">{tool.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
