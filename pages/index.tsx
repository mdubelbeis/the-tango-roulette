import Head from "next/head";
import Image from "next/image";
import { GrSearch } from "react-icons/gr";
import Logo from "public/code-platoon-logo-black.png";
import { useEffect, useState } from "react";
import { dummy_data } from "@/dummy_data/dummy_data";

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  isRemote: boolean;
  timesGone: number;
}

const HomePage = () => {
  const [studentData, setStudentData] = useState<Student[]>();
  const [theChosenOne, setTheChosenOne] = useState<Student>();

  useEffect(() => {
    // This will run only on init render
    getStudentData();
  }, []);

  const getStudentData = async () => {
    // try {
    //   // const response = await fetch("");
    //   // const data = await response.json();
    //   // setStudentData(data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const randomizer = () => {
    const RANDOM_NUMBER = Math.floor(Math.random() * dummy_data.length);
    return RANDOM_NUMBER;
  };

  const handleButtonClick = () => {
    const RANDOM_INDEX = randomizer();
    setTheChosenOne(dummy_data[RANDOM_INDEX]);
    console.log(dummy_data[RANDOM_INDEX]);
  };

  return (
    <>
      <Head>
        <title>The Tango Roulette</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex items-center justify-between bg-primary-orange text-center text-xl p-4 text-primary-white drop-shadow-xl">
        <div className="flex items-center">
          <Image src={Logo} alt="code platoon logo" className="w-32" />
          <h1 className="tracking-wider">THE TANGO ROULETTE</h1>
        </div>
        <div className="">
          <label className="relative">
            <input
              title="search"
              placeholder="Search..."
              type="text"
              name="search"
              className="hidden md:block px-3 py-2 rounded-full w-full"
            />
            <GrSearch
              color=""
              className="hidden md:block absolute right-4 top-3"
            >
              test
            </GrSearch>
          </label>
        </div>
      </header>
      <main className="w-screen h-screen bg-primary-teal flex items-center justify-center font-lato">
        <section className="bg-shades-300 w-10/12 py-20 rounded-xl drop-shadow-xl max-w-xl flex flex-col items-center justify-center gap-10 -translate-y-[30%]">
          <h2 className="text-2xl">
            {!theChosenOne
              ? "Who is feeling lucky?"
              : `${theChosenOne.firstName}`}
          </h2>
          <button
            onClick={handleButtonClick}
            className="bg-primary-orange hover:bg-[#99999] py-3 px-6 rounded-lg text-2xl text-primary-white font-thin tracking-wide hover:text-black drop-shadow-lg hover:drop-shadow-xl active:drop-shadow-sm"
          >
            PULL
          </button>
        </section>
      </main>
    </>
  );
};

export default HomePage;
