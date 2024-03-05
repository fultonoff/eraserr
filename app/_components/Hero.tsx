import React from "react";

const Hero = () => {
  return (
    <section className="bg-black h-screen">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
            Documents & diagrams
            <strong className="font-extrabold text-sky-300 sm:block">
              {" "}
              for engineering teams{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-slate-100">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-black shadow  sm:w-auto"
              href="#"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
