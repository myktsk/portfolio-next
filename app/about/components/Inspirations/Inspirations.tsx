type Props = {
  visible: boolean;
};

const INSPIRATIONS = [
  {
    name: "Kent C. Dodds",
    image: "/assets/kcd.jpeg",
    url: "https://kentcdodds.com/",
  },
  {
    name: "The Art of Readable Code",
    image: "https://learning.oreilly.com/library/cover/9781449318482/250w/",
    url: "https://www.oreilly.com/library/view/the-art-of/9781449318482/",
  },
  {
    name: "The Pragmatic Programmer",
    image: "https://learning.oreilly.com/library/cover/9780135956977/250w/",
    url: "https://www.oreilly.com/library/view/the-pragmatic-programmer/9780135956977/",
  },
  {
    name: "Bytes",
    image: "https://bytes.dev/images/bytes.png",
    url: "https://bytes.dev/",
  },
];

export const Inspirations = ({ visible }: Props) => {
  return (
    <div
      className={`mx-auto max-w-7xl px-6 lg:px-8 py-20 ease-in-out duration-640 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-base/7 font-semibold text-blue-600">Inspirations</h2>
      <p
        className={`mt-2 max-w-xl text-pretty text-4xl tracking-tight sm:text-5xl font-bold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent`}
      >
        Influences That Guide My Work
      </p>
      <ul
        role="list"
        className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
      >
        {INSPIRATIONS.map((item) => (
          <li key={item.name}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <div className="mx-auto size-24 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  alt=""
                  src={item.image}
                  className="object-contain object-center"
                />
              </div>
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">
                {item.name}
              </h3>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
