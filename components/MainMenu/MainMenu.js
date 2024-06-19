import { Fragment, useState } from "react";
import { Dialog, Transition, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const MainMenu = ({ items }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="bg-white shadow-sm"
      style={{
        backgroundImage: "url('/images/asset-3.jpeg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <nav
        className="mx-auto max-w-full px-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between py-3 sm:py-5 md:justify-start md:space-x-5">
          {/* LOGO */}
          {/* <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link legacyBehavior href="/" passHref>
              <a className="sr-only focus:not-sr-only">
                FMA
                <Image
                  src="/your-logo.svg"
                  alt="Your Company Logo"
                  width={50}
                  height={50}
                  layout="fixed"
                />
              </a>
            </Link>
          </div> */}

          {/* //! Hamburger menu */}
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-secondary opacity-100 "
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* //! Hamburger menu end */}

          {/* //! Desktop */}
          <Popover.Group as="nav" className="z-20 hidden space-x-5 md:flex">
            {items.map((item) =>
              item.subMenuItems.length > 0 ? (
                <Popover key={item.id} className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-menuHighlightBlue" : "text-secondary", //button for dropdown
                          "group z-20 inline-flex items-center rounded-md text-base font-medium opacity-100 hover:text-menuHighlightBlue focus:outline-none",
                        )}
                      >
                        {item.label}
                        <ChevronDownIcon //arrow  for dropdown
                          className={classNames(
                            open ? "text-menuHighlightBlue" : "text-secondary",
                            "ml-2 h-5 w-5 group-hover:text-menuHighlightBlue",
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-50 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:-translate-x-1/2">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {item.subMenuItems.map((subItem) => (
                                <Link
                                  legacyBehavior
                                  key={subItem.id}
                                  href={subItem.destination}
                                  passHref
                                >
                                  <a
                                    className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                                    onClick={handleMenuItemClick}
                                  >
                                    <p className="text-base font-medium text-gray-900">
                                      {subItem.label}
                                    </p>
                                  </a>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ) : (
                <Link
                  legacyBehavior
                  key={item.id}
                  href={item.destination}
                  passHref
                >
                  <a className="text-base font-medium text-secondary hover:text-menuHighlightBlue" onClick={handleMenuItemClick}>
                    {item.label}
                  </a>
                </Link>
              ),
            )}
          </Popover.Group>
          {/* //! Desktop end */}

          {/* <div className="z-20 hidden items-center justify-end md:flex md:flex-1 lg:w-0"> */}
          <div className="z-20 items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link legacyBehavior href="#" passHref>
              <a className="whitespace-nowrap text-base font-medium text-secondary hover:text-menuHighlightBlue" onClick={handleMenuItemClick}>
                Login
              </a>
            </Link>
            <Link legacyBehavior href="#" passHref>
              <a className="ml-3 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium text-secondary shadow-sm hover:text-menuHighlightBlue" onClick={handleMenuItemClick}>
                Join Now
              </a>
            </Link>
          </div>
        </div>
      </nav>

      {/* //! mobile start */}
      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-40 overflow-hidden">
            <Dialog.Panel className="absolute inset-0 h-full w-full max-w-xs bg-primary p-4 opacity-90">
              <div className="flex items-center justify-between text-secondary">
                <Dialog.Title>Menu</Dialog.Title>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-background hover:bg-gray-100 hover:text-gray-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <div className="relative mt-6 flex-1">
                <nav className="flex flex-col space-y-2">
                  {items.map((item) => (
                    <div key={item.id}>
                      <Link
                        legacyBehavior
                        key={item.id}
                        href={item.destination || "#"}
                        passHref
                      >
                        <a className="rounded-md p-2 text-base font-medium text-secondary hover:bg-menuHighlightBlue" onClick={handleMenuItemClick}>
                          {item.label}
                        </a>
                      </Link>
                      {item.subMenuItems.length > 0 && (
                        <div className="space-y-1 pl-4">
                          {item.subMenuItems.map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={subItem.destination || "#"}
                              legacyBehavior
                              passHref
                            >
                              <a className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-5 text-secondary hover:bg-gray-100 focus:bg-primaryDark" onClick={handleMenuItemClick}>
                                {subItem.label}
                              </a>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
      {/* //! Mobile over */}
    </header>
  );
};
