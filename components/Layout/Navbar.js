import Link from "next/link";
import Logo from "@/components/svg/Logo";
import SearchBar from "@/components/Layout/SearchBar";
import clsx from "clsx";
import CaretDownIcon from "@/components/svg/CaretDownIcon";
import UserMenu from "@/components/Layout/UserMenu";

function Navbar() {
  const links = [
    { id: "today", label: "Today" },
    { id: "markets", label: "Markets" },
    { id: "screener", label: "Screener" },
    { id: "ideas", label: "Ideas" },
  ];

  return (
    <nav className="w-full px-8 xl:px-16 2xl:px-32 py-3.5 flex items-center justify-center border-b border-solid border-grayscale-100">
      <Link href="/" passHref>
        <a className="flex items-center justify-start flex-initial">
          <Logo className="w-24" />
        </a>
      </Link>
      <div className="flex items-center justify-center gap-x-10 flex-auto">
        <SearchBar />
        <ul className="flex items-center gap-x-7 list-none p-0 m-0">
          {links.map((link, i) => (
            <li
              key={link.id}
              className={clsx(
                "p-0",
                "m-0",
                "font-sans",
                "font-medium",
                "text-xs",
                i === 0 ? "text-primary" : "text-grayscale-500",
                "select-none",
                "cursor-pointer"
              )}
            >
              {link.label}
            </li>
          ))}
          <li className="p-0 m-0 flex items-center gap-x-1.5 font-sans font-medium text-xs text-grayscale-500 select-none cursor-pointer">
            Learn
            <CaretDownIcon className="w-2" />
          </li>
        </ul>
      </div>
      <div className="flex-initial">
        <UserMenu />
      </div>
    </nav>
  );
}

export default Navbar;
