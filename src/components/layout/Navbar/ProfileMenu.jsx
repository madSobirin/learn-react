import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function ProfileMenu({ user, userNavigation }) {
  return (
    <Menu as="div" className="relative ml-3">
      <MenuButton className="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
        <img
          alt="User avatar"
          src={user.imageUrl}
          className="size-8 rounded-full outline -outline-offset-1 outline-white/10 cursor-pointer"
        />
      </MenuButton>

      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline-1 -outline-offset-1 outline-white/10 transition">
        {userNavigation.map((item) => (
          <MenuItem key={item.name}>
            <a
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5"
            >
              {item.name}
            </a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
