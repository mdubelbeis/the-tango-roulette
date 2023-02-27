import Image from "next/image";
import Link from "next/link";
import { GrSearch } from "react-icons/gr";
import Logo from "public/code-platoon-logo-black.png";

const Header: React.FC = () => {
  return (
    <header className="fixed w-screen top-0 left-0 flex items-center justify-between bg-primary-orange text-center p-4 text-shades-800 drop-shadow-xl font-lato font-medium">
      <div className="flex items-center rounded">
        <Link
          href="/"
          className="hidden md:block bg-primary-white p-2 rounded shadow-xl"
        >
          <Image
            src={Logo}
            alt="code platoon logo"
            className="w-32 lg:w-44 xl:w-60"
          />
        </Link>
        <div>
          <h1 className="tracking-wider text-2xl md:text-2xl lg:text-3xl xl:text-4xl p-2 text-primary-white">
            TANGO COHORT
          </h1>
          <p className="hidden lg:block">February 06, 2023 - May 23, 2023</p>
        </div>
      </div>
      <div className="">
        <label className="relative drop-shadow-xl">
          <input
            title="search"
            placeholder="Search..."
            type="text"
            name="search"
            className="hidden md:block px-3 py-2 rounded-full w-full text-gray-600 xl:w-[350px]"
          />
          <GrSearch className="hidden md:block absolute right-4 top-3" />
        </label>
      </div>
    </header>
  );
};

export default Header;
