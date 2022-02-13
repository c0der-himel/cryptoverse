import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import {
  CubeTransparentIcon,
  HomeIcon,
  MenuIcon,
  RssIcon,
} from '@heroicons/react/solid';
import logo from '../assets/img/logo/logo.png';
import { Link, Outlet } from 'react-router-dom';

const HomePage = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 z-40 flex lg:hidden"
            onClose={setMobileFiltersOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-xl font-bold text-gray-600">Menus</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
                  <ul className="mt-3 px-2 py-3 font-bold text-gray-600">
                    <li
                      onClick={() => setMobileFiltersOpen(false)}
                      className="mb-5 flex items-center"
                    >
                      <HomeIcon className="mr-2 h-6 w-6" />
                      <Link to="/">Home</Link>
                    </li>
                    <li
                      onClick={() => setMobileFiltersOpen(false)}
                      className="mb-5 flex items-center"
                    >
                      <CubeTransparentIcon className="mr-2 h-6 w-6" />
                      <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </li>
                    <li
                      onClick={() => setMobileFiltersOpen(false)}
                      className="mb-5 flex items-center"
                    >
                      <RssIcon className="mr-2 h-6 w-6" />
                      <Link to="/news">News</Link>
                    </li>
                  </ul>
                </form>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex items-center justify-between border-b border-gray-200 pt-24 pb-6">
            <h1 className="flex items-center justify-center">
              <img src={logo} alt="logo" className="mr-3 h-14 w-14" />
              <span className="ml-3 text-4xl font-extrabold tracking-tight text-gray-600">
                Cryptoverse
              </span>
            </h1>

            <div className="flex items-center">
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <MenuIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul className="space-y-4 border-b border-gray-200 pb-6 text-lg font-bold text-gray-600">
                  <li className="flex items-center">
                    <HomeIcon className="mr-2 h-6 w-6" />
                    <Link to="/">Home</Link>
                  </li>
                  <li className="flex items-center">
                    <CubeTransparentIcon className="mr-2 h-6 w-6" />
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                  </li>
                  <li className="flex items-center">
                    <RssIcon className="mr-2 h-6 w-6" />
                    <Link to="/news">News</Link>
                  </li>
                </ul>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                {/* Replace with your content */}
                <>
                  <Outlet />
                  <footer className="body-font text-gray-600">
                    <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
                      <a
                        href="/"
                        className="title-font flex items-center justify-center font-medium text-gray-600 md:justify-start"
                      >
                        <img src={logo} alt="logo" className="h-10 w-10" />
                        <span className="ml-3 text-xl font-bold">
                          Cryptoverse
                        </span>
                      </a>
                      <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
                        © 2022 Cryptoverse —
                        <a
                          href="/"
                          className="ml-1 text-gray-600"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          @himel
                        </a>
                      </p>
                      <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
                        <a href="/" className="text-gray-500">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a href="/" className="ml-3 text-gray-500">
                          <svg
                            fill="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a href="/" className="ml-3 text-gray-500">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                        <a href="/" className="ml-3 text-gray-500">
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0"
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="none"
                              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </footer>
                </>
                {/* /End replace */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
