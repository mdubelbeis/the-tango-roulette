import { dummy_data } from "@/dummy_data/dummy_data";

const PairProgrammingApp: React.FC = () => {
  return <main className=""></main>;
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

export default PairProgrammingApp;
