import { Fragment, useState } from "react";
import { Dialog, Transition, Popover } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const MainMenu = ({ items = []}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSubmenu = (id) => {
    if (items.find((item) => item.id === id).subMenuItems.length > 0) {
      setOpenSubmenu(openSubmenu === id ? null : id);
    }
  };

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  const normalizePath = (path) => {
    // Ensure path is a string and remove trailing slash for consistent comparison
    return path ? path.replace(/\/$/, "") : "";
  };

  const isActive = (path) => {
    //  Guard against null or undefined paths
    if (!path) return false;
    const currentPath = normalizePath(router.asPath);
    const targetPath = normalizePath(path);
    // console.log(`Comparing ${currentPath} to ${targetPath}`);
    return currentPath === targetPath;
  };

  const isAnySubMenuItemActive = (subMenuItems) => {
    return subMenuItems.some((subItem) => isActive(subItem.destination));
  };

  if (!items.length) return null; // Render nothing if items is empty

  return (
    <header
      className="sticky top-0 z-50 shadow-sm"
      style={{
        backgroundImage: "url('/images/asset-3.jpeg')",
        backgroundSize: "cover",
        // backgroundPosition: "center",
      }}
    >
      <nav
        className="max-w-full px-4 mx-auto sm:px-6 lg:px-8"
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
              className="inline-flex items-center justify-center p-2 rounded-md opacity-100 text-secondary"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
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
                          open || isAnySubMenuItemActive(item.subMenuItems)
                            ? "text-menuHighlightBlue"
                            : "text-secondary",
                          "group inline-flex items-center rounded-md text-base font-medium hover:text-menuHighlightBlue focus:outline-none",
                        )}
                      >
                        {item.label}
                        <ChevronDownIcon //arrow  for dropdown
                          className={classNames(
                            open || isAnySubMenuItemActive(item.subMenuItems)
                              ? "text-menuHighlightBlue"
                              : "text-secondary",
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
                        <Popover.Panel className="absolute z-50 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:left-1/2 lg:-translate-x-1/2">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                              {item.subMenuItems.map((subItem) => (
                                <Link
                                  legacyBehavior
                                  key={subItem.id}
                                  href={subItem.destination}
                                  passHref
                                >
                                  <a
                                    className={`-m-3 flex items-start rounded-lg p-3 hover:text-menuHighlightBlue ${isActive(subItem.destination) ? "text-menuHighlightBlue" : "text-primary"}`}
                                    onClick={handleMenuItemClick}
                                  >
                                    <p className="text-base font-medium">
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
                  <a
                    className={`text-base font-medium hover:text-menuHighlightBlue ${isActive(item.destination) ? "text-menuHighlightBlue" : "text-secondary"}`}
                    onClick={handleMenuItemClick}
                  >
                    {item.label}
                  </a>
                </Link>
              ),
            )}
          </Popover.Group>
          {/* //! Desktop end */}

          <div className="z-20 items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link legacyBehavior href="/login/" passHref>
              <a
                className="text-base font-medium whitespace-nowrap text-secondary hover:text-menuHighlightBlue"
                onClick={handleMenuItemClick}
              >
                Login
              </a>
            </Link>
            <Link legacyBehavior href="/register/" passHref>
              <a
                className="inline-flex items-center justify-center px-4 py-2 ml-3 text-base font-medium border border-transparent rounded-md shadow-sm whitespace-nowrap text-secondary hover:text-menuHighlightBlue"
                onClick={handleMenuItemClick}
              >
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
            <Dialog.Panel className="absolute inset-0 w-full h-full max-w-xs p-4 bg-primary opacity-90">
              <div
                className="flex items-center justify-between text-secondary"
                onClick={toggleMobileMenu}
              >
                <Dialog.Title>Menu</Dialog.Title>
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-background hover:bg-gray-100 hover:text-gray-500"
                >
                  <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <div className="relative flex-1 mt-6">
                <nav className="flex flex-col space-y-2">
                  {items.map((item) => (
                    <Fragment key={item.id}>
                      {item.subMenuItems.length > 0 ? (
                        <div onClick={() => toggleSubmenu(item.id)}>
                          <a
                            className={`rounded-md p-2 text-base font-medium ${isAnySubMenuItemActive(item.subMenuItems) ? "text-menuHighlightBlue" : "text-secondary"} flex items-center justify-between`}
                          >
                            {item.label}
                            <ChevronDownIcon
                              className={`h-5 w-5 transition-transform ${openSubmenu === item.id ? "rotate-180" : "rotate-0"}`}
                            />
                          </a>
                          <div
                            className={`space-y-1 pl-6 ${openSubmenu === item.id ? "" : "hidden"}`}
                          >
                            {item.subMenuItems.map((subItem) => (
                              <Link
                                legacyBehavior
                                key={subItem.id}
                                href={subItem.destination || "#"}
                                passHref
                              >
                                <a
                                  className={`block rounded-md px-2 py-2 text-sm font-medium leading-5 ${isActive(subItem.destination) ? "text-menuHighlightBlue" : "text-secondary"} `}
                                  onClick={handleMenuItemClick}
                                >
                                  {subItem.label}
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          legacyBehavior
                          href={item.destination || "#"}
                          passHref
                        >
                          <a
                            className={`rounded-md p-2 text-base font-medium ${isActive(item.destination) ? "text-menuHighlightBlue" : "text-secondary"} `}
                            onClick={handleMenuItemClick}
                          >
                            {item.label}
                          </a>
                        </Link>
                      )}
                    </Fragment>
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
