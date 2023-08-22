import React from "react";

function TitleSection({ title }) {
  return (
    <div className="sticky top-[-2px] z-20 -mx-6 mb-4 w-screen bg-[#051427c4] px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2
        className="text-sm font-bold uppercase tracking-widest text-slate-200"
        key={title}
      >
        {title}
      </h2>
    </div>
  );
}

export default TitleSection;
