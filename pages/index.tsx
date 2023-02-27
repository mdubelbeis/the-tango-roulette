import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen gap-10 font-lato font-medium text-lg">
      <h2 className="flex flex-col items-center text-4xl tracking-wide font-lato font-semibold">
        <span>TANGO</span>
        <span>APPS</span>
      </h2>
      <div>
        <ul className="flex flex-col gap-4 text-center">
          <li className="py-2 px-4 w-fit mx-auto bg-primary-teal text-primary-white rounded hover:bg-primary-teal-dark hover:cursor-pointer shadow-lg hover:shadow-xl active:shadow-lg">
            <Link href="the-tango-roulette">The Tango Roulette</Link>
          </li>
          <li className="py-2 px-4 w-fit mx-auto bg-primary-teal text-primary-white rounded hover:bg-primary-teal-dark hover:cursor-pointer shadow-lg hover:shadow-xl active:shadow-lg">
            <Link href="pair-programming-generator">
              Pair Programming Generator
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default HomePage;
