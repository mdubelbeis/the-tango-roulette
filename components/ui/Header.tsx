import Image from "next/image";
import Link from "next/link";

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
        <div className="ml-4">
          <h1 className="tracking-wider text-2xl md:text-2xl lg:text-3xl xl:text-4xl p-2 text-primary-white">
            COHORT
          </h1>
          <p className="hidden lg:block">February 06, 2023 - May 23, 2023</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
