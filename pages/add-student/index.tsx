import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import heroCardImg from "../../public/mohammad-rahmani-N5bT5RctFZ8-unsplash.jpg";

const AddStudentPage = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isRemote, setIsRemote] = useState<boolean>(true);
  const router = useRouter();

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //TODO: VALIDATION
    //TODO: SET ERROR MESSAGES
    //TODO: PASS INFO TO VIA POST REQUEST: fetch('POST')
    //TODO: Reload?
    router.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center lg:flex-row w-screen h-screen max-w-7xl mx-auto">
      <main className="flex flex-col-reverse lg:flex-row mt-40 w-11/12 lg:p-20">
        <section className="hidden lg:block w-full lg:w-1/2 lg:shadow-lg lg:shadow-gray-300 bg-primary-teal">
          <Image
            src={heroCardImg}
            alt="hero-card-img"
            className="w-full h-full rounded-tl-xl lg:rounded-bl-xl rounded-tr-xl lg:rounded-tr-none object-cover"
          />
        </section>
        <section className="w-full bg-primary-teal p-10 md:p-20 flex flex-col items-center justify-center gap-10 text-xl tracking-wide bg-opacity-20 shadow-lg shadow-gray-300 rounded-xl lg:rounded-tr-xl lg:rounded-br-xl lg:rounded-tl-none lg:rounded-bl-none">
          <h2 className="md:text-xl lg:text-3xl font-lato font-medium my-10 text-primary-teal-dark">
            STUDENT INFO
          </h2>
          <form className="flex flex-col gap-4 w-full">
            <label
              htmlFor="firstName"
              className="border-b-[1px] border-opacity-40 border-primary-teal"
            >
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="bg-none border-none bg-primary-teal py-2 px-2 bg-opacity-0 w-full"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label
              htmlFor="lastName"
              className="border-b-[1px] border-opacity-40 border-primary-teal "
            >
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="bg-none border-none bg-primary-teal py-2 px-2 bg-opacity-0 w-full"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <div className="flex flex-col items-center gap-3 m-2 text-center text-primary-teal my-10">
              <span>Remote Student</span>
              <div className="flex gap-2">
                <label htmlFor="isRemote">Yes</label>
                <input
                  type="radio"
                  name="isRemote"
                  placeholder="isRemote"
                  value="yes"
                  onChange={() => setIsRemote(true)}
                />
                <label htmlFor="isRemote">No</label>
                <input
                  type="radio"
                  name="isRemote"
                  placeholder="isRemote"
                  value="no"
                  onChange={() => setIsRemote(false)}
                />
              </div>
            </div>
            <button
              className="py-2 px-4 w-fit mx-auto bg-primary-teal text-primary-white rounded hover:bg-primary-teal-dark hover:cursor-pointer shadow-lg hover:shadow-xl active:shadow-lg hover:text-black"
              type="submit"
              onSubmit={handleFormSubmit}
            >
              SUBMIT
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default AddStudentPage;
