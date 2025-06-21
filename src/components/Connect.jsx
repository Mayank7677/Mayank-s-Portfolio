import React from "react";

const Connect = () => {
  return (
    <div>
      <section className=" ">
        <div className=" text-6xl sm:text-8xl md:text-9xl">
          <p>Sooooo,</p>
          <p>what's next?</p>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          <div className=" bg-[#8290f5] px-4 py-2 md:px-6 md:py-3 rounded-4xl w-fit text-black max-[400px]:text-xl text-3xl hover:bg-white hover:text-black cursor-pointer hover:-rotate-6 transition-all duration-300">
            <a href="mailto:mayankpanwar066@gmail.com">You can email me ✉️</a>
          </div>

          <div className="bg-[#8290f5] px-4 py-2 md:px-6 md:py-3 rounded-4xl w-fit text-black max-[400px]:text-xl text-3xl hover:bg-white hover:text-black cursor-pointer hover:-rotate-6 transition-all duration-300">
            <a href="https://www.linkedin.com/in/mayankpanwar77">
              Find me on LinkedIn 💬{" "}
            </a>
          </div>

          <div className="bg-[#8290f5] px-4 py-2 md:px-6 md:py-3 rounded-4xl w-fit text-black max-[400px]:text-xl text-3xl hover:bg-white hover:text-black cursor-pointer hover:-rotate-6 transition-all duration-300">
            <a href="https://github.com/Mayank7677">
              Checkout my Github <span className="sm:ml-4">✉️</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
