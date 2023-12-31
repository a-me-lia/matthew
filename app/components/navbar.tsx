"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = {
  "/home": {
    name: "home",
    id: "0",
  },
  "/blog": {
    name: "blog",
    id: "1",
  },
  "/projects": {
    name: "projects",
    id: "2",
  },
  "/contact": {
    name: "contact",
    id: "3",
  },
};

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog")) {
    pathname = "/blog";
  }
  if (pathname.includes("/resume")) {
    pathname = "/home";
  }
  if (pathname.includes("/home")) {
    pathname = "/home";
  }

  let path = usePathname();
  path = path.slice(1);
  let pathitems = path.split("/");
  let level = pathitems.length;

  return (
    <nav className="flex flex-col text-[18px] tracking-tighter font-mono ">
      <div className="md:mx-auto md:w-[742px]  mx-4 h-max  flex flex-col fixed right-0 top-0 left-0 z-50 bg-gradient-to-b pb-4 from-white via-white to-transparent via-90% ">
        <div className="flex flex-row md:mt-8 mt-10 ">
          <div className="flex flex-row items-baseline -mr-6 ">
            <Link href={"/"} className="md:block hidden" id="homescree.net">
              matthewguo.com&nbsp; / &nbsp;
            </Link>

            {Object.entries(navItems).map(([path, { name, id }]) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  href={path}
                  className={`pr-6 ${
                    isActive ? "text-neutral-900" : "text-neutral-300"
                  } transition-colors duration-1000`}
                >
                  <p id={id}>{name}</p>
                </Link>
              );
            })}
          </div>

          <h2 className=" md:block hidden">
            {level >= 2 && (
              <Link
                className=" hover:text-neutral-500 transition-colors duration-200"
                href={`/${pathitems[0]}${pathitems[0] != "" ? "/" : ""}${
                  pathitems[1]
                }`}
              >
                &nbsp; /&nbsp; {pathitems[1]}&nbsp;
              </Link>
            )}
            {level == 3 && (
              <Link
                className=" hover:text-neutral-500 transition-colors duration-200"
                href={`/${pathitems[0]}${pathitems[0] != "" ? "/" : ""}${
                  pathitems[1]
                }/${pathitems[2]}`}
              >
                {" "}
                /&nbsp; {pathitems[2]}
              </Link>
            )}
          </h2>
        </div>

        <div className=" bg-gray-200 h-[1px] mt-2 "></div>

        <div className=" md:hidden h-4 mt-2 mb-2 text-[14px] text-neutral-500 flex flex-row">
          <Link href={"/home"} className="mr-1  hover:text-neutral-400">
            matthewguo.com{" "}
          </Link>

          <Link
            className="mr-1 hover:text-neutral-300"
            href={`/${pathitems[0]}`}
          >
            {" "}
            / {pathitems[0]}
          </Link>

          {level >= 2 && (
            <Link
              className="mr-1  hover:text-neutral-300"
              href={`/${pathitems[0]}${pathitems[0] != "" ? "/" : ""}${
                pathitems[1]
              }`}
            >
              {" "}
              / {pathitems[1]}
            </Link>
          )}
          {level == 3 && (
            <Link
              className=" hover:text-neutral-300"
              href={`/${pathitems[0]}${pathitems[0] != "" ? "/" : ""}${
                pathitems[1]
              }/${pathitems[2]}`}
            >
              {" "}
              / {pathitems[2]}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}