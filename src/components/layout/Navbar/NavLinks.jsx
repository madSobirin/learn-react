function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavLinks({ navigation }) {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-gray-950/50 text-white"
                : "text-gray-300 hover:bg-white/5 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium"
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
