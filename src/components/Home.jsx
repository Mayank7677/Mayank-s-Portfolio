import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section>
        <p className="text-4xl sm:text-5xl md:text-6xl">
          Hyy there , I'm{" "}
          <span className="underline underline-offset-6 decoration-1 text-purple-400">
            <Link to={'/me'}>Mayank</Link>
          </span>{" "}
          a Full-Stack Developer specializing in the MERN stack, based in India.
        </p>

        <div className="mt-20 sm:mt-30  ">
          <p className="text-4xl sm:text-5xl md:text-6xl ">What i do </p>

          <p className="text-lg   text-neutral-300 md:text-2xl xl:w-[80%]">
            I build fast, reliable, full-stack web apps. From slick frontends to
            robust backends, I deliver complete, scalable solutions for
            startups, teams, and businesses.
          </p>
        </div>

        <div className="mt-20 sm:mt-30  ">
          <p className="text-4xl sm:text-5xl md:text-6xl ">Skills </p>

          <p className="text-lg   text-neutral-300 md:text-2xl xl:w-[80%]">
            The Powers I wield to craft exceptional digital experiences. From
            frontend finesse to backend brilliance .
          </p>
        </div>

        <div className="flex items-center justify-center flex-wrap mt-10 md:pt-15 gap-5">
          <div className="flex items-center w-full sm:w-72  h-auto   rounded-xl border-neutral-500">
            <div className="w-10 h-10 bg-neutral-800 flex justify-center items-center rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                alt="JavaScript"
                class="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 className=" font-semibold">JavaScript</h1>
              <p className="text-sm opacity-60">Programming Language</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72  h-auto   rounded-xl border-neutral-500">
            <div className="w-10 h-10 bg-neutral-800 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
                alt="React"
                className="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 className="text- font-semibold">React.js</h1>
              <p className="text-sm opacity-60">Frontend Library</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 h-auto   rounded-xl border-neutral-500">
            <div className="w-10 h-10 bg-neutral-800 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
                alt="Node.js"
                class="w-3/5 object-cover"
              />
            </div>
            <div class="ml-3">
              <h1 class="text- font-semibold">Node.js</h1>
              <p class="text-sm opacity-60">Backend</p>
            </div>
          </div>

          <div className="flex items-center w-full sm:w-72 h-auto   rounded-xl border-neutral-500">
            <div className="w-10 h-10 bg-neutral-800 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
                alt="Express.js"
                class="w-3/5 object-cover"
              />
            </div>
            <div class="ml-3">
              <h1 class="text font-semibold">Express.js</h1>
              <p class="text-sm opacity-60">Web Framework</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 h-auto   rounded-xl border-neutral-500">
            <div className="w-10 h-10 bg-neutral-800 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
                alt="MongoDB"
                class="w-3/5 object-cover"
              />
            </div>
            <div class="ml-3">
              <h1 class="text- font-semibold">MongoDB</h1>
              <p class="text-sm opacity-60">Database</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 h-auto   rounded-xl border-neutral-500">
            <div className="w-10 h-10 bg-neutral-800 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="Tailwind CSS"
                class="w-3/5 object-cover"
              />
            </div>
            <div class="ml-3">
              <h1 class="text- font-semibold">Tailwind CSS</h1>
              <p class="text-sm opacity-60">CSS Framework</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 h-auto   rounded-xl border-neutral-500">
            <div className="w-10 h-10 bg-neutral-800 flex justify-center items-center  rounded-lg">
              <img
                src="https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png"
                alt="ShadCN"
                class="w-3/5 object-cover"
              />
            </div>
            <div class="ml-3">
              <h1 class="text- font-semibold">ShadCN</h1>
              <p class="text-sm opacity-60">Component Library</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 h-auto   rounded-xl border-neutral-500">
            <div className="w-10 h-10 bg-neutral-800 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/js_redux/js_redux-icon.svg"
                alt="Redux"
                className="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 className="text font-semibold">Redux Toolkit</h1>
              <p className="text-sm opacity-60">State Management</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 h-auto   rounded-xl border-neutral-500">
            <div className="w-10 h-10 bg-neutral-800 flex justify-center items-center  rounded-lg">
              <img
                src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg"
                alt="Zustand"
                className="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 className="te-sm font-semibold">Zustand</h1>
              <p class="text-sm opacity-60">State Management</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 h-auto   rounded-xl border-neutral-500">
            <div className="w-10 h-10 flex bg-neutral-800 justify-center items-center  rounded-lg">
              <img
                src="https://www.vectorlogo.zone/logos/isocpp/isocpp-icon.svg"
                alt="C++"
                className="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 className="text- font-semibold">C++</h1>
              <p className="text-sm opacity-60">Programming Language</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 h-auto   rounded-xl border-neutral-500">
            <div className="w-10 h-10 flex bg-neutral-800 justify-center items-center  rounded-lg">
              <img
                src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg"
                alt="JWT"
                className="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 className="tex font-semibold">JSON Web Token</h1>
              <p className="text-sm opacity-60">Authentication</p>
            </div>
          </div>
          <div className="flex items-center w-full sm:w-72 h-auto   rounded-xl border-neutral-500">
            <div className="w-10 h-10 bg-neutral-800 flex justify-center items-center  rounded-lg">
              <img
                src="https://www.svgrepo.com/show/342225/socket-io.svg"
                alt="Socket.IO"
                className="w-3/5 object-cover"
              />
            </div>
            <div className="ml-3">
              <h1 class="text- font-semibold">Socket.IO</h1>
              <p class="text-sm opacity-60">Real-time Communication</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
