import React from "react";

const Laboratory = () => {
  const experiments = [
    {
      title: "GSAP Motion Studies",
      description:
        "Exploring scroll animations, transitions, and interactive movement.",
    },

    {
      title: "UI Experiments",
      description:
        "Testing layouts, glassmorphism, typography, and micro interactions.",
    },

    {
      title: "Component Playground",
      description: "Reusable React components and design system experiments.",
    },
  ];

  return (
    <section className="bg-bg-primary py-20 px-6">
      <p className="uppercase tracking-[0.6em] text-sm">experiments</p>

      <h1 className="font-garamond text-7xl">laboratory</h1>

      <div className="mt-12 space-y-6">
        {experiments.map((item) => (
          <div
            key={item.title}
            className="
            border-l
            border-border-dark
            pl-6
            "
          >
            <h2 className="font-garamond text-3xl">{item.title}</h2>

            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Laboratory;
