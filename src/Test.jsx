import React from 'react'

const Test = () => {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary p-12 font-satoshi">
      {/* Hero */}
      <section className="space-y-6">
        <h2 className="font-snell text-4xl text-accent-pink">
          aiesha's portfolio
        </h2>

        <h1 className="font-garamond text-8xl leading-none">
          editorial luxury.
        </h1>

        <p className="max-w-2xl text-lg text-text-secondary">
          creating elegant digital experiences with react, gsap, node.js and a
          passion for beautiful interfaces.
        </p>

        <button className="rounded-full bg-accent-pink px-8 py-4 transition-all duration-300 hover:scale-105 hover:bg-accent-sage">
          View Projects
        </button>
      </section>

      {/* Colour Palette */}
      <section className="mt-24">
        <h2 className="mb-8 font-garamond text-5xl">colour palette</h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          <div className="h-32 rounded-3xl bg-accent-pink shadow-lg"></div>

          <div className="h-32 rounded-3xl bg-accent-sage shadow-lg"></div>

          <div className="h-32 rounded-3xl bg-accent-sky shadow-lg"></div>

          <div className="h-32 rounded-3xl bg-accent-lavender shadow-lg"></div>

          <div className="h-32 rounded-3xl bg-accent-butter shadow-lg"></div>

          <div className="h-32 rounded-3xl bg-accent-terracotta shadow-lg"></div>
        </div>
      </section>

      {/* Cards */}
      <section className="mt-24">
        <h2 className="mb-8 font-garamond text-5xl">cards</h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl border border-border-light bg-bg-card p-8 shadow-md">
            <h3 className="font-garamond text-3xl">React</h3>

            <p className="mt-4 text-text-secondary">
              Building modern interfaces with reusable components.
            </p>
          </div>

          <div className="rounded-3xl border border-border-light bg-bg-card p-8 shadow-md">
            <h3 className="font-garamond text-3xl">GSAP</h3>

            <p className="mt-4 text-text-secondary">
              Smooth animations and immersive experiences.
            </p>
          </div>

          <div className="rounded-3xl border border-border-light bg-bg-card p-8 shadow-md">
            <h3 className="font-garamond text-3xl">Node.js</h3>

            <p className="mt-4 text-text-secondary">
              Scalable backend development using Express.
            </p>
          </div>
        </div>
      </section>

      {/* Fonts */}
      <section className="mt-24 space-y-6">
        <h2 className="font-garamond text-5xl">typography</h2>

        <p className="font-satoshi text-xl">
          Satoshi — Clean, modern, and perfect for body text.
        </p>

        <p className="font-garamond text-6xl">
          Garamond Nova — Elegant Editorial Headings
        </p>

        <p className="font-snell text-5xl text-accent-pink">
          Snell Roundhand Signature
        </p>

        <p className="font-galmuri text-2xl">Galmuri 0123456789</p>
      </section>

      {/* Buttons */}
      <section className="mt-24 flex flex-wrap gap-6">
        <button className="rounded-full bg-accent-pink px-8 py-4 hover:bg-accent-sage transition-all">
          Pink Button
        </button>

        <button className="rounded-full bg-accent-sky px-8 py-4 hover:bg-accent-lavender transition-all">
          Sky Button
        </button>

        <button className="rounded-full border border-border-dark px-8 py-4 hover:bg-bg-secondary transition-all">
          Outline Button
        </button>
      </section>
    </main>
  );
}

export default Test