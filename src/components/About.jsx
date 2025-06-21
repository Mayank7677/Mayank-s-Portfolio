import React from "react";

const About = () => {
  return (
    <div>
      <div className="flex gap-2 sm:items-center ">
        <div>
          <img
            src="https://www.ngan-nguyen.com/images/Visual-DownArrow.svg"
            alt=""
          />
        </div>
        <p className="text-4xl sm:text-5xl ">
          If you’re still here, <br /> here’s my background
        </p>
      </div>

      <div className="mt-20 text-xl sm:text-3xl">
        <div>
          <p className=" ">
            <span className="bg-purple-800 text-white px-2 rounded-2xl">
              Hyy , I’m Mayank Panwar
            </span>{" "}
            — a curious and creative web developer, passionate about building
            user-friendly, real-world web applications.
          </p>

          <p className="  mt-10">
            I'm from <span className="">Ratlam , India</span> . I love turning
            ideas into real, working web apps. From crafting smooth UIs to
            wiring up powerful backends, I enjoy every part of the process. I
            work with modern tools to create fast, clean, and scalable products.
            Whether it's for a startup, a team, or just a passion project, I
            bring code to life with purpose and precision.
          </p>

          <p className="  mt-10">
            {" "}
            Currently open to new challenges and opportunities to create
            something meaningful.
          </p>
        </div>
      </div>


    </div>
  );
};

export default About;
