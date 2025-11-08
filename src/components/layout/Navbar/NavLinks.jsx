import { Link, useLocation } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavLinks({ navigation }) {
  const location = useLocation();
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            aria-current={location.pathname === item.to ? "page" : undefined}
            className={classNames(
              location.pathname === item.to
                ? "bg-gray-950/50 text-white"
                : "text-gray-300 hover:bg-white/5 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium"
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
