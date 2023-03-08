import { dummy_data } from "@/dummy_data/dummy_data";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

interface Student {
  id: number;
  firstName: string;
  lastName: string;
  isRemote: boolean;
  timesGone: number;
}

interface PairProgrammingAppProps {
  data: Student[];
}

const PairProgrammingApp: React.FC<PairProgrammingAppProps> = ({ data }) => {
  const [studentsData, setStudentsData] = useState<Student[]>(data);
  const [showStudentPairs, setShowStudentPairs] = useState<boolean>(false);

  // Fill any empty data fields
  useEffect(() => {
    console.log(studentsData);
  }, []);

  const pairingOutput = () => {
    return (
      <ul className="flex flex-col gap-2 items-start">
        {studentsData.map((pairing) => (
          <li key={pairing.id}>
            <>
              <span> {pairing[0].firstName}</span>
              <span> {pairing[0].lastName}</span>
            </>
            -
            <>
              <span> {pairing[1].firstName}</span>
              <span> {pairing[1].lastName}</span>
            </>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="py-32 w-screen bg-primary-teal text-primary-white uppercase flex flex-col items-center justify-center gap-10">
      <header>
        <h1 className="text-4xl font-thin font-lato flex flex-col items-center justify-center">
          <span>Pair</span>
          <span>Programming</span>
          <span>Generator</span>
        </h1>
      </header>

      <main className="flex flex-col h-screen">
        <section className="flex flex-col items-center gap-10">
          <div>{showStudentPairs && pairingOutput()}</div>
          <div>
            <button
              onClick={() => setShowStudentPairs(!showStudentPairs)}
              className="font-thin font-lato uppercase tracking-wide py-2 px-3 bg-primary-orange rounded-md text-xl hover:bg-primary-orange-dark drop-shadow-lg hover:drop-shadow-xl active:drop-shadow-md"
            >
              Generate
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let data;
  // Fetch data on server.
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  try {
    // const response = await fetch("http://127.0.0.1:8000/students/");
    const response = await fetch("http://100.25.160.162:8000/studentss/");
    data = await response.json();

    shuffleArray(data);

    let pairResults = [];
    data.forEach((student) => {
      pairResults.push(`${student.firstName} ${student.lastName}`);
    });

    data = pairResults;
  } catch (error) {
    shuffleArray(dummy_data);

    const studentsLeft = [];
    const studentsRight = [];
    dummy_data.forEach((student) => {
      if (student.id % 2 === 0) {
        studentsLeft.push(`${student.firstName} ${student.lastName}`);
      } else {
        studentsRight.push(`${student.firstName} ${student.lastName}`);
      }
    });

    if (studentsLeft.length === studentsRight.length) {
      // Combine the two by pairing up the indices
    } else {
      // Add blank element to end of shortest array then filter them together
      // Combine the two by pairing up the indices
    }

    data = studentsLeft.concat(studentsRight);
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default PairProgrammingApp;
