import Image from "next/image";
import Link from "next/link";
import { GrSearch } from "react-icons/gr";
import Logo from "public/code-platoon-logo-black.png";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-primary-orange text-center text-xl p-4 text-primary-white drop-shadow-xl">
      <div className="flex items-center">
        <Link href="/">
          <Image src={Logo} alt="code platoon logo" className="w-32" />
        </Link>
        <h1 className="tracking-wider">THE TANGO ROULETTE</h1>
      </div>
      <div className="">
        <label className="relative">
          <input
            title="search"
            placeholder="Search..."
            type="text"
            name="search"
            className="hidden md:block px-3 py-2 rounded-full w-full text-gray-600"
          />
          <GrSearch className="hidden md:block absolute right-4 top-3">
            test
          </GrSearch>
        </label>
      </div>
    </header>
  );
};

export default Header;
