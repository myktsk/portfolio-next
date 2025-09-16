"use client";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVIGATION_MAIN = [
  { name: "Works", href: "/works" },
  { name: "About", href: "/about" },
];
const NAVIGATION_SUB = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/miyukituisku/" },
  { name: "GitHub", href: "https://github.com/myktsk" },
];

export const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-20">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex">
          <Link
            href="/"
            className={`text-sm/6 text-gray-900 px-4 ${
              pathname === "/" ? "font-semibold" : "font-light"
            }`}
          >
            Miyuki Tuisku
          </Link>
          {NAVIGATION_MAIN.map((item, i) => (
            <div key={item.name} className="lg:block hidden">
              <Link
                href={item.href}
                className={`font-light text-sm/6 text-gray-900 px-2 ${
                  pathname === item.href ? "font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex">
          {NAVIGATION_SUB.map((item, i) => (
            <div key={item.name}>
              {i > 0 && <span className="text-gray-500 mx-2">/</span>}
              <a
                href={item.href}
                className="font-light text-sm/6 text-gray-900"
                target="_blank"
              >
                {item.name}
              </a>
            </div>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {NAVIGATION_MAIN.map((item, i) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`font-light text-sm/6 text-gray-900 px-2 ${
                        pathname === item.href ? "font-semibold" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
                {NAVIGATION_SUB.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-light text-sm/6 text-gray-900 px-2"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};
