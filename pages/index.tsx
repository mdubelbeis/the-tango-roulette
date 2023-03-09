import Link from "next/link";
import { FaUserPlus, FaUserFriends, FaSpinner } from "react-icons/fa";

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen gap-10 font-lato font-medium text-lg">
      <h2 className="flex flex-col items-center text-4xl tracking-wide font-lato font-medium">
        <span>COHORT</span>
        <span>APPS</span>
      </h2>
      <div>
        <nav className="flex flex-col gap-4 text-center">
          <Link
            href="the-tango-roulette"
            className="py-2 px-4 w-fit mx-auto bg-primary-teal text-primary-white rounded hover:bg-primary-teal-dark hover:cursor-pointer shadow-lg hover:shadow-xl active:shadow-lg"
          >
            <span className="flex items-center gap-2 hover:bg-primary-teal-dark text-primary-white hover:text-black">
              The Tango Roulette{" "}
              <FaSpinner color="black" className="text-2xl" />
            </span>
          </Link>

          <Link
            href="pair-programming-generator"
            className="py-2 px-4 w-fit mx-auto bg-primary-teal text-primary-white rounded hover:bg-primary-teal-dark hover:cursor-pointer shadow-lg hover:shadow-xl active:shadow-lg"
          >
            <span className="flex items-center gap-2 hover:bg-primary-teal-dark text-primary-white hover:text-black">
              Pair Programming Generator{" "}
              <FaUserFriends color="black" className="text-2xl" />
            </span>
          </Link>

          <Link
            href="/add-student"
            className="py-2 px-4 w-fit mx-auto bg-primary-teal text-primary-white rounded hover:bg-primary-teal-dark hover:cursor-pointer shadow-lg hover:shadow-xl active:shadow-lg"
          >
            <span className="flex items-center gap-2 hover:bg-primary-teal-dark text-primary-white hover:text-black">
              Add Student <FaUserPlus color="black" className="text-2xl" />
            </span>
          </Link>
        </nav>
      </div>
    </main>
  );
};

export default HomePage;
