import { MdConstruction } from "react-icons/md";

const PairProgrammingApp: React.FC = () => {
  return (
    <div className="font-lato font-thin flex items-center justify-center w-screen h-screen text-2xl md:text-4xl lg:text-6xl">
      <div className="flex gap-3">
        <MdConstruction />
        <h1>COMING SOON</h1>
        <MdConstruction />
      </div>
    </div>
  );
};

export default PairProgrammingApp;
