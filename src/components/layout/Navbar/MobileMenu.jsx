import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileMenu({ navigation, user, userNavigation }) {
  return (
    <DisclosurePanel className="md:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-gray-950/50 text-white"
                : "text-gray-300 hover:bg-white/5 hover:text-white",
              "block rounded-md px-3 py-2 text-base font-medium"
            )}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>

      <div className="border-t border-white/10 pt-4 pb-3">
        <div className="flex items-center px-5">
          <img
            alt={user.name}
            src={user.imageUrl}
            className="size-10 rounded-full outline -outline-offset-1 outline-white/10"
          />
          <div className="ml-3">
            <div className="text-base font-medium text-white">{user.name}</div>
            <div className="text-sm font-medium text-gray-400">
              {user.email}
            </div>
          </div>
        </div>

        <div className="mt-3 space-y-1 px-2">
          {userNavigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </div>
    </DisclosurePanel>
  );
}
