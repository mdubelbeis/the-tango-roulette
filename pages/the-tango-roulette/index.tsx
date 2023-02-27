import { dummy_data } from "@/dummy_data/dummy_data";
import { useState } from "react";

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  isRemote: boolean;
  timesGone: number;
}

interface HomePageProps {
  data: Student[];
}

const RouletteApp: React.FC<HomePageProps> = ({ data }) => {
  const [studentData, setStudentData] = useState<Student[]>(data);
  const [theChosenOne, setTheChosenOne] = useState<Student>();
  const [titleText, setTitleText] = useState<string>("Who's feeling lucky?");

  const randomizer = () => {
    const RANDOM_NUMBER = Math.floor(Math.random() * studentData.length);
    return RANDOM_NUMBER;
  };

  const handleButtonClick = () => {
    setTheChosenOne({
      firstName: "",
      lastName: "",
      isRemote: true,
      id: 0,
      timesGone: 0,
    });
    const RANDOM_INDEX = randomizer();
    setTimeout(() => {
      console.log(RANDOM_INDEX);
      console.log(studentData[RANDOM_INDEX]);
      setTheChosenOne(studentData[RANDOM_INDEX]);
    }, 2000);
    setTitleText("The lucky winner is...");
  };

  return (
    <main className="w-screen h-screen bg-primary-teal flex items-center justify-center font-lato">
      <section className="bg-shades-300 w-10/12 py-20 rounded-xl drop-shadow-xl max-w-xl flex flex-col items-center justify-center gap-10">
        <div className="text-2xl">
          {!theChosenOne ? (
            `${titleText}`
          ) : (
            <div className="flex flex-col justify-center items-center gap-4">
              {`${titleText}`}
              <p className="md:text-3xl ">
                {`${theChosenOne.firstName}\t`}
                {`${theChosenOne.lastName}`}
              </p>
            </div>
          )}
        </div>
        <button
          onClick={handleButtonClick}
          className="bg-primary-orange hover:bg-[#99999] py-3 px-6 rounded-lg text-2xl text-primary-white font-thin tracking-wide hover:text-black drop-shadow-lg hover:drop-shadow-xl active:drop-shadow-sm"
        >
          PULL
        </button>
      </section>
    </main>
  );
};

export async function getServerSideProps(context) {
  let data;
  // Fetch data on server.
  try {
    // const response = await fetch("http://127.0.0.1:8000/students/");
    const response = await fetch("http://100.25.160.162:8000/students/");

    data = await response.json();
  } catch (error) {
    data = dummy_data;
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default RouletteApp;
