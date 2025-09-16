import { HARD_SKILLS, SOFT_SKILLS } from "~/models/skills/skills.const";

type Props = {
  visible: boolean;
};

export const Skills = ({ visible }: Props) => {
  return (
    <div
      className={`mx-auto max-w-7xl px-6 lg:px-8 py-20 ease-in-out duration-640 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-base/7 font-semibold text-blue-600">
        What I Bring to the Table
      </h2>
      <p
        className={`mt-2 max-w-xl text-pretty text-4xl tracking-tight sm:text-5xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent`}
      >
        Technical expertise and soft skills
      </p>
      <div className="mx-auto pt-16 max-w-2xl sm:pt-20 lg:pt-24 lg:max-w-none">
        <p className="mb-4 text-base font-semibold text-gray-500">
          Hard Skills
        </p>
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {HARD_SKILLS.map((skill) => (
            <div key={skill.name} className="flex flex-col">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="mb-4 flex size-8 items-center justify-center">
                  <skill.icon
                    aria-hidden="true"
                    className="size-6 text-gray-800"
                  />
                </div>
                {skill.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto whitespace-pre-line">
                  {skill.description}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mx-auto pt-16 max-w-2xl sm:pt-20 lg:pt-24 lg:max-w-none">
        <p className="mb-4 text-base font-semibold text-gray-500">
          Soft Skills
        </p>
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {SOFT_SKILLS.map((skill) => (
            <div key={skill.name} className="flex flex-col">
              <dt className="text-base/7 font-semibold text-gray-900">
                <div className="mb-4 flex size-8 items-center justify-center">
                  <skill.icon
                    aria-hidden="true"
                    className="size-6 text-gray-800"
                  />
                </div>
                {skill.name}
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                <p className="flex-auto">{skill.description}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};
