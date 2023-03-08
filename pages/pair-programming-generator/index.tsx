import { dummy_data } from "@/dummy_data/dummy_data";
import { useEffect, useState } from "react";

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
  useEffect(() => {}, []);

  return (
    <div
      className={`py-60 w-screen ${
        showStudentPairs ? "min-h-max" : "h-screen"
      } bg-primary-teal text-primary-white uppercase flex flex-col items-center justify-center gap-10`}
    >
      <header>
        <h1 className="text-4xl font-medium font-lato flex flex-col items-center justify-center">
          <span>Pair</span>
          <span>Programming</span>
          <span>Generator</span>
        </h1>
      </header>

      <main className="flex flex-col items-center h-screen text-center">
        <section className="flex flex-col items-center gap-10">
          {showStudentPairs && (
            <div className="flex gap-3 min-h-content tracking-wider font-thin">
              <ul className="flex flex-col items-center gap-2">
                {studentsData[0].map((student) => (
                  <li key={student} className="">
                    {student}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col items-center gap-2">
                {studentsData[1].map((student) => (
                  <li key={student}>{student}</li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <button
              onClick={() => setShowStudentPairs(!showStudentPairs)}
              className="font-thin font-lato uppercase tracking-wide py-2 px-3 bg-primary-orange rounded-md text-xl hover:bg-primary-orange-dark drop-shadow-lg hover:drop-shadow-xl active:drop-shadow-md"
            >
              {!showStudentPairs ? "Show List" : "Hide List"}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
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
    const response = await fetch("http://100.25.160.162:8000/students/");
    data = await response.json();

    shuffleArray(data);

    const studentsLeft = [];
    const studentsRight = [];

    data.forEach((student) => {
      if (student.id % 2 === 0) {
        studentsLeft.push(`${student.firstName} ${student.lastName}`);
      } else {
        studentsRight.push(`${student.firstName} ${student.lastName}`);
      }
    });

    data = [studentsLeft, studentsRight];
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

    data = [studentsLeft, studentsRight];
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default PairProgrammingApp;
