import Image from "next/image";
import heroCardImg from "../../public/mohammad-rahmani-N5bT5RctFZ8-unsplash.jpg";
const AddStudentPage = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row w-screen h-screen max-w-6xl mx-auto lg:p-20">
      <main className="flex flex-col-reverse lg:flex-row mt-40">
        <section className="hidden lg:block w-full lg:w-1/2 lg:shadow-lg lg:shadow-gray-300">
          <Image
            src={heroCardImg}
            alt="hero-card-img"
            className="w-full h-full rounded-tl-xl lg:rounded-bl-xl rounded-tr-xl lg:rounded-tr-none"
          />
        </section>
        <section className="w-full lg:w-1/2 bg-primary-teal p-10 md:p-20 flex flex-col items-center justify-center gap-10 text-xl tracking-wide bg-opacity-20 shadow-lg shadow-gray-300 rounded-xl lg:rounded-tr-xl lg:rounded-br-xl lg:rounded-tl-none lg:rounded-bl-none">
          <h2 className="lg:text-3xl font-lato font-thin my-10">
            STUDENT INFO
          </h2>
          <form className="flex flex-col gap-4 w-full">
            <label className="border-b-[1px] border-opacity-40 border-primary-teal">
              <input
                type="text"
                placeholder="First Name"
                className="bg-none border-none bg-primary-teal py-2 bg-opacity-0"
              />
            </label>
            <label className="border-b-[1px] border-opacity-40 border-primary-teal ">
              <input
                type="text"
                placeholder="Last Name"
                className="bg-none border-none bg-primary-teal py-2 bg-opacity-0"
              />
            </label>
            <div className="flex flex-col items-center gap-3 m-2 text-center text-primary-teal my-10">
              <span>Remote Student: </span>
              <div className="flex gap-2">
                <label htmlFor="isRemote">Yes</label>
                <input
                  type="radio"
                  name="isRemote"
                  placeholder="isRemote"
                  value="yes"
                />
                <label htmlFor="isRemote">No</label>
                <input
                  type="radio"
                  name="isRemote"
                  placeholder="isRemote"
                  value="yes"
                />
              </div>
            </div>
            <button
              className="py-2 px-4 w-fit mx-auto bg-primary-teal text-primary-white rounded hover:bg-primary-teal-dark hover:cursor-pointer shadow-lg hover:shadow-xl active:shadow-lg"
              type="submit"
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
