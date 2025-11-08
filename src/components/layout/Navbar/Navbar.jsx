import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLinks from "./NavLinks";
import ProfileMenu from "./ProfileMenu";
import MobileMenu from "./MobileMenu";

import mad from "../../../assets/images/mad.jpg";

const user = {
  name: "Ahmad Sobirin",
  email: "ahmadsobirin@gmail.com",
  imageUrl: mad,
};

const navigation = [
  { name: "Dashboard", to: "/", current: true },
  { name: "Team", to: "/team", current: true },
  { name: "Projects", to: "#", current: false },
  { name: "Calendar", to: "#", current: false },
  { name: "Reports", to: "#", current: false },
];

const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo + Navigation */}
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                alt="Logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="size-8"
              />
            </div>
            <NavLinks navigation={navigation} />
          </div>

          {/* Right Side (Profile) */}
          <div className="hidden md:block">
            <ProfileMenu user={user} userNavigation={userNavigation} />
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </Disclosure.Button>
          </div>
        </div>
      </div>

      <MobileMenu
        navigation={navigation}
        user={user}
        userNavigation={userNavigation}
      />
    </Disclosure>
  );
};
