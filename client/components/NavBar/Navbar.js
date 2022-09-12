import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react"; // for smooth transition between tabes
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../public/logo-bg/logo.png";

function navbar() {
  // useState is used to change the state for start it false means when we click then only it's open otherwise it's close Not.
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY <= 120) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  // window.addEventListener("scroll", changeColor);
  return (
    <div>
      {/* for main navbar container */}
      <nav className="w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div
              className={
                color
                  ? "flex fixed z-40 bg-violet-50 opacity-75 shadow-sm top-0 left-0 items items-center py-2 px-20 justify-between w-full"
                  : "flex fixed z-40 bg-violet-50  shadow-sm top-0 left-0 items items-center py-2 px-20 justify-between w-full"
              }
            >
              <div className="flex justify-center items-center flex-shrink-0">
                <Link href="/">
                  <a>
                    <Image src={logo} alt="/" width={120} height={55} />
                  </a>
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* Navbar link and i make a style for active link */}
                  <Link href="/">
                    <a
                      className={
                        router.pathname == "/"
                          ? "text-purple-500   font-semibold px-2 py-4 text-base hover:text-purple-800"
                          : " font-semibold px-2 py-4 hover:text-purple-600 text-xs"
                      }
                    >
                      Orientation
                    </a>
                  </Link>
                  <Link href="/about">
                    <a
                      className={
                        router.pathname == "/about"
                          ? "text-purple-500 font-semibold space-x-0 px-2 py-4 text-xs hover:text-purple-800"
                          : " font-semibold px-2 py-4 space-x-0 hover:text-purple-600 text-xs"
                      }
                    >
                      Prevention
                    </a>
                  </Link>
                  <Link href="/NewsEvents">
                    <a
                      className={
                        router.pathname == "/NewsEvents"
                          ? "text-purple-500 font-semibold px-2 py-4 text-xs hover:text-purple-800"
                          : " font-semibold px-2 py-4 hover:text-purple-600 text-xs"
                      }
                    >
                      News & Events
                    </a>
                  </Link>
                  <Link href="/sharingSpace">
                    <a
                      className={
                        router.pathname == "/sharingSpace"
                          ? "text-purple-500 font-semibold px-2 py-4 text-xs hover:text-purple-800"
                          : " font-semibold px-2 py-4 hover:text-purple-600 text-xs"
                      }
                    >
                      Sharing Space
                    </a>
                  </Link>
                  <Link href="/blog/post">
                    <a
                      className={
                        router.pathname == "/blog/post"
                          ? "text-purple-500 font-semibold px-2 py-4 text-xs hover:text-purple-800"
                          : " font-semibold px-2 py-4 hover:text-purple-600 text-xs"
                      }
                    >
                      I Need Help
                    </a>
                  </Link>
                  <Link href="/blog/post">
                    <a
                      className={
                        router.pathname == "/blog/post"
                          ? "text-purple-500 font-semibold px-2 py-4 text-xs hover:text-purple-800"
                          : " font-semibold px-2 py-4 hover:text-purple-600 text-xs"
                      }
                    >
                      Influence
                    </a>
                  </Link>
                  <Link href="/blog/post">
                    <a>
                      <button className="bg-gradient-to-r from-purple-400 to-purple-700 hover:to-purple-800 text-white text-xs font-bold py-2 px-3 rounded-full drop-shadow-lg ">
                        Be a fighter
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* Mobile section */}
            <div className="mr-10 flex right-0 fixed z-50 lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-blue-600 inline-flex z-50 items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus: outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white "
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only"> Open main menu </span>
                {/* In this step we just take the icon from a website called w3 */}
                {!isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" // for menu icon
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12" // for close icon
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* in this step we will apply a smooth transition for better experience for mobile users */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-750 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            // handle the mobile menu
            <div className="lg:hidden id=mobile-menu">
              <div
                ref={ref}
                className="left-0 right-0 min-h-screen px-4 pt-8 space-y-4 bg-white"
              >
                {/* // className="bg-white px-2 pt2 pb3 space-y-1 sm:px-3" */}
                <Link href="/">
                  <a
                    className={
                      router.pathname == "/"
                        ? "text-blue-500 font-semibold px-3 py-4 text-md hover:text-blue-800"
                        : "cursor-pointer  hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium "
                    }
                  >
                    Orientation
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    className={
                      router.pathname == "/about"
                        ? "text-blue-500 font-semibold px-3 py-4 text-md hover:text-blue-800 "
                        : "cursor-pointer  hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium "
                    }
                  >
                    Prevention
                  </a>
                </Link>
                <Link href="/blog">
                  <a
                    className={
                      router.pathname == "/blog"
                        ? "text-blue-500 font-semibold px-3 py-4 text-md hover:text-blue-800"
                        : "cursor-pointer  hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium "
                    }
                  >
                    News & Events
                  </a>
                </Link>
                <Link href="/blog/post">
                  <a
                    className={
                      router.pathname == "/blog/post"
                        ? "text-blue-500 font-semibold px-3 py-4 text-md hover:text-blue-800"
                        : "cursor-pointer  hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium "
                    }
                  >
                    Sharing Space
                  </a>
                </Link>
                <Link href="/blog/post">
                  <a
                    className={
                      router.pathname == "/blog/post"
                        ? "text-blue-500 font-semibold px-3 py-4 text-md hover:text-blue-800"
                        : "cursor-pointer  hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium "
                    }
                  >
                    Influence
                  </a>
                </Link>
                <Link href="/blog/post">
                  <a>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded-full ">
                      Be a fighter
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default navbar;
