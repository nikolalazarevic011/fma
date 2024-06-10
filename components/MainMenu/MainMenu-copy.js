//! example comp
// import { Fragment, useState } from "react";
// import { Dialog, Popover, Transition } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";
// import Link from "next/link";

// export const MainMenu = ({ items = [] }) => { // Ensure items are provided or set a default
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-sm">
//       {/* Main navigation */}
//       {/* Mobile menu and transition logic */}
//       <div>hi</div>
//     </header>
//   );
// }

//!
// import { Fragment, useState } from "react";
// import { Dialog, Transition, Popover, Menu } from "@headlessui/react";
// import {
//   Bars3Icon,
//   XMarkIcon,
//   ChevronDownIcon,
// } from "@heroicons/react/24/outline";
// import Image from "next/image";
// import Link from "next/link";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export const MainMenu = ({ items }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // Checks if 'items' is truly an array
//   if (!Array.isArray(items)) {
//     console.log(items);
//     console.error(
//       "MainMenu expects items to be an array but got:",
//       typeof items,
//     );
//     return null; // or you can return a fallback UI
//   }

//   return (
//     <header className="bg-white shadow-sm">
//       <nav
//         className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
//         aria-label="Global"
//       >
//         <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
//           <div className="flex justify-start lg:w-0 lg:flex-1">
//             <Link href={"/"}>
//               <span className="sr-only">FMA</span>
//               {/* <Image
//                 src="/your-logo.svg"
//                 alt="Your Company Logo"
//                 width={50}
//                 height={50}
//               /> */}
//             </Link>
//           </div>
//           <div className="-my-2 -mr-2 md:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
//               onClick={() => setMobileMenuOpen(true)}
//             >
//               <span className="sr-only">Open menu</span>
//               <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <Popover.Group as="nav" className="hidden space-x-10 md:flex">
//             {(items || []).map((item) => (
//               <Popover key={item.id} className="relative">
//                 {({ open }) => (
//                   <>
//                     <Popover.Button
//                       className={classNames(
//                         open ? "text-gray-900" : "text-gray-500",
//                         "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none",
//                       )}
//                     >
//                       <span>{item.label}</span>
//                       {item.subMenuItems.length > 0 && (
//                         <ChevronDownIcon
//                           className={classNames(
//                             open ? "text-gray-600" : "text-gray-400",
//                             "ml-2 h-5 w-5 group-hover:text-gray-500",
//                           )}
//                           aria-hidden="true"
//                         />
//                       )}
//                     </Popover.Button>
//                     <Transition
//                       as={Fragment}
//                       enter="transition ease-out duration-200"
//                       enterFrom="opacity-0 translate-y-1"
//                       enterTo="opacity-100 translate-y-0"
//                       leave="transition ease-in duration-150"
//                       leaveFrom="opacity-100 translate-y-0"
//                       leaveTo="opacity-0 translate-y-1"
//                     >
//                       <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
//                         <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                           <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                             {item.subMenuItems.map((subItem) => (
//                               <a
//                                 key={subItem.id}
//                                 href={subItem.destination}
//                                 className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
//                               >
//                                 <div className="ml-4">
//                                   <p className="text-base font-medium text-gray-900">
//                                     {subItem.label}
//                                   </p>
//                                 </div>
//                               </a>
//                             ))}
//                           </div>
//                         </div>
//                       </Popover.Panel>
//                     </Transition>
//                   </>
//                 )}
//               </Popover>
//             ))}
//           </Popover.Group>
//           <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
//             <a
//               href="#"
//               className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
//             >
//               Sign in
//             </a>
//             <a
//               href="#"
//               className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//             >
//               Sign up
//             </a>
//           </div>
//         </div>
//       </nav>

//       <Transition.Root show={mobileMenuOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="relative z-40 md:hidden"
//           onClose={setMobileMenuOpen}
//         >
//           <Transition.Child
//             as={Fragment}
//             enter="ease-in-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in-out duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-40">
//             <div className="absolute inset-0 overflow-hidden">
//               <Dialog.Panel className="absolute inset-0 h-full w-full max-w-xs bg-white p-4">
//                 <div className="flex items-center justify-between">
//                   <Dialog.Title>Menu</Dialog.Title>
//                   <button
//                     type="button"
//                     className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     <span className="sr-only">Close menu</span>
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>
//                 <div className="relative mt-6 flex-1">
//                   <nav className="flex flex-col space-y-1">
//                     {/* {items.map((item) => ( */}
//                     {(items || []).map((item) => (
//                       <a
//                         key={item.id}
//                         href={item.destination}
//                         className="rounded-md p-2 text-base font-medium text-gray-900 hover:bg-gray-100"
//                       >
//                         {item.label}
//                       </a>
//                     ))}
//                   </nav>
//                 </div>
//               </Dialog.Panel>
//             </div>
//           </div>
//         </Dialog>
//       </Transition.Root>
//     </header>
//   );
// };

//!new
// import { Fragment, useState } from "react";
// import { Dialog, Transition, Popover } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
// import Image from "next/image";
// import Link from "next/link";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export const MainMenu = ({ items }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-sm">
//       <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
//         <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
//           <div className="flex justify-start lg:w-0 lg:flex-1">
//             <Link legacyBehavior href="/" passHref>
//               <a className="sr-only focus:not-sr-only">
//                 FMA
//                 <Image src="/your-logo.svg" alt="Your Company Logo" width={50} height={50} layout="fixed" />
//               </a>
//             </Link>
//           </div>
//           <div className="-my-2 -mr-2 md:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
//               onClick={() => setMobileMenuOpen(true)}
//             >
//               <span className="sr-only">Open menu</span>
//               <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <Popover.Group as="nav" className="hidden space-x-10 md:flex">
//             {items.map((item) => (
//               <Popover key={item.id} className="relative">
//                 {({ open }) => (
//                   <>
//                     <Popover.Button
//                       className={classNames(
//                         open ? "text-gray-900" : "text-gray-500",
//                         "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none",
//                       )}
//                     >
//                       {item.label}
//                       {item.subMenuItems.length > 0 && (
//                         <ChevronDownIcon
//                           className={classNames(
//                             open ? "text-gray-600" : "text-gray-400",
//                             "ml-2 h-5 w-5 group-hover:text-gray-500",
//                           )}
//                           aria-hidden="true"
//                         />
//                       )}
//                     </Popover.Button>
//                     <Transition
//                       as={Fragment}
//                       enter="transition ease-out duration-200"
//                       enterFrom="opacity-0 translate-y-1"
//                       enterTo="opacity-100 translate-y-0"
//                       leave="transition ease-in duration-150"
//                       leaveFrom="opacity-100 translate-y-0"
//                       leaveTo="opacity-0 translate-y-1"
//                     >
//                       <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:-translate-x-1/2">
//                         <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                           <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
//                             {item.subMenuItems.map((subItem) => (
//                               <Link legacyBehavior key={subItem.id} href={subItem.destination} passHref>
//                                 <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
//                                   <p className="text-base font-medium text-gray-900">
//                                     {subItem.label}
//                                   </p>
//                                 </a>
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       </Popover.Panel>
//                     </Transition>
//                   </>
//                 )}
//               </Popover>
//             ))}
//           </Popover.Group>
//           <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
//             <Link legacyBehavior href="#" passHref>
//               <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
//                 Sign in
//               </a>
//             </Link>
//             <Link legacyBehavior href="#" passHref>
//               <a className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
//                 Sign up
//               </a>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       <Transition.Root show={mobileMenuOpen} as={Fragment}>
//         <Dialog as="div" className="relative z-40 md:hidden" onClose={setMobileMenuOpen}>
//           <div className="fixed inset-0 z-40 overflow-hidden">
//             <Dialog.Panel className="absolute inset-0 h-full w-full max-w-xs bg-white p-4">
//               <div className="flex items-center justify-between">
//                 <Dialog.Title>Menu</Dialog.Title>
//                 <button
//                   type="button"
//                   className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   <span className="sr-only">Close menu</span>
//                 </button>
//               </div>
//               <div className="relative mt-6 flex-1">
//                 <nav className="flex flex-col space-y-1">
//                   {items.map((item) => (
//                     <Link legacyBehavior key={item.id} href={item.destination} passHref>
//                       <a className="rounded-md p-2 text-base font-medium text-gray-900 hover:bg-gray-100">
//                         {item.label}
//                       </a>
//                     </Link>
//                   ))}
//                 </nav>
//               </div>
//             </Dialog.Panel>
//           </div>
//         </Dialog>
//       </Transition.Root>
//     </header>
//   );
// };

// //! take 4 fix mobile?
// import { Fragment, useState } from "react";
// import { Dialog, Transition, Popover } from "@headlessui/react";
// import {
//   Bars3Icon,
//   XMarkIcon,
//   ChevronDownIcon,
// } from "@heroicons/react/24/outline";
// import Image from "next/image";
// import Link from "next/link";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export const MainMenu = ({ items }) => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-sm">
//       <nav
//         className="mx-auto max-w-full px-4 sm:px-6 lg:px-8"
//         aria-label="Global"
//       >
//         <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
//           <div className="flex justify-start lg:w-0 lg:flex-1">
//             <Link legacyBehavior href="/" passHref>
//               <a className="sr-only focus:not-sr-only">
//                 <Image
//                   src="/your-logo.svg"
//                   alt="Your Company Logo"
//                   width={50}
//                   height={50}
//                   layout="fixed"
//                 />
//               </a>
//             </Link>
//           </div>
//           <div className="-my-2 -mr-2 md:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
//               onClick={() => setMobileMenuOpen(true)}
//             >
//               <span className="sr-only">Open menu</span>
//               <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <Popover.Group as="nav" className="hidden space-x-10 md:flex">
//             {items.map((item) =>
//               item.subMenuItems.length > 0 ? (
//                 <Popover key={item.id} className="relative">
//                   <Popover.Button
//                     className={classNames(
//                       open ? "text-gray-900" : "text-gray-500",
//                       "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none",
//                     )}
//                   >
//                     <span>{item.label}</span>
//                     <ChevronDownIcon
//                       className={classNames(
//                         open ? "text-gray-600" : "text-gray-400",
//                         "ml-2 h-5 w-5 group-hover:text-gray-500",
//                       )}
//                       aria-hidden="true"
//                     />
//                   </Popover.Button>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-200"
//                     enterFrom="opacity-0 translate-y-1"
//                     enterTo="opacity-100 translate-y-0"
//                     leave="transition ease-in duration-150"
//                     leaveFrom="opacity-100 translate-y-0"
//                     leaveTo="opacity-0 translate-y-1"
//                   >
//                     <Popover.Panel className="absolute z-10 -ml-4 mt-3 max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
//                       <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
//                         <div className="relative grid gap-6 bg-white p-5 sm:gap-8 sm:p-8">
//                           {item.subMenuItems.map((subItem) => (
//                             <Link
//                               key={subItem.id}
//                               href={subItem.destination || "#"}
//                               passHref
//                             >
//                               <a className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50">
//                                 <p className="text-base font-medium text-gray-900">
//                                   {subItem.label}
//                                 </p>
//                               </a>
//                             </Link>
//                           ))}
//                         </div>
//                       </div>
//                     </Popover.Panel>
//                   </Transition>
//                 </Popover>
//               ) : (
//                 <Link key={item.id} href={item.destination || "#"} passHref>
//                   <a className="text-base font-medium text-gray-500 hover:text-gray-900">
//                     {item.label}
//                   </a>
//                 </Link>
//               ),
//             )}
//           </Popover.Group>
//           <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
//             <Link href="/login" passHref>
//               <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
//                 Sign in
//               </a>
//             </Link>
//             <Link href="/signup" passHref>
//               <a className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
//                 Sign up
//               </a>
//             </Link>
//           </div>
//         </div>
//       </nav>

//       <Transition.Root show={mobileMenuOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="relative z-40 md:hidden"
//           onClose={setMobileMenuOpen}
//         >
//           <Transition.Child
//             as={Fragment}
//             enter="ease-in-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in-out duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
//           </Transition.Child>
//           <div className="fixed inset-0 z-40">
//             <Dialog.Panel className="absolute inset-0 overflow-hidden">
//               <div className="absolute inset-0 bg-white p-4">
//                 <div className="flex items-center justify-between">
//                   <Dialog.Title>Menu</Dialog.Title>
//                   <button
//                     type="button"
//                     className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:text-gray-500"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>
//                 <div className="relative mt-6 flex-1 px-4 sm:px-6">
//                   <nav className="space-y-1">
//                     {items.map((item) => (
//                       <div key={item.id}>
//                         <Link
//                           href={item.destination || "#"}
//                           legacyBehavior
//                           passHref
//                         >
//                           <a className="group flex items-center rounded-md px-2 py-2 text-base font-medium leading-6 text-gray-900 hover:bg-gray-100 focus:bg-gray-200">
//                             {item.label}
//                           </a>
//                         </Link>
//                         {item.subMenuItems.length > 0 && (
//                           <div className="space-y-1 pl-4">
//                             {item.subMenuItems.map((subItem) => (
//                               <Link
//                                 key={subItem.id}
//                                 href={subItem.destination || "#"}
//                                 legacyBehavior
//                                 passHref
//                               >
//                                 <a className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-200">
//                                   {subItem.label}
//                                 </a>
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </nav>
//                 </div>
//               </div>
//             </Dialog.Panel>
//           </div>
//         </Dialog>
//       </Transition.Root>
//     </header>
//   );
// };
