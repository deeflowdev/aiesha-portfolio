import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  
  // skills
  const skills = [
    {
      id: "html",
      name: "HTML",
      x: 20,
      y: 28,
      size: "small",
      colour: "var(--accent-butter)",
      description: "Building semantic and accessible page structures.",
    },

    {
      id: "css",
      name: "CSS",
      x: 18,
      y: 62,
      size: "small",
      colour: "var(--accent-sage)",
      description: "Creating responsive layouts and modern styling.",
    },

    {
      id: "javascript",
      name: "JavaScript",
      x: 72,
      y: 38,
      size: "large",
      colour: "var(--accent-pink)",
      description:
        "Adding interactivity and dynamic behaviour to applications.",
    },

    {
      id: "react",
      name: "React",
      x: 48,
      y: 18,
      size: "large",
      colour: "var(--accent-lavender)",
      description: "Building reusable components and modern user interfaces.",
    },

    {
      id: "python",
      name: "Python",
      x: 63,
      y: 72,
      size: "medium",
      colour: "var(--accent-sky)",
      description: "Developing backend logic and automation scripts.",
    },

    {
      id: "tailwind",
      name: "Tailwind CSS",
      x: 34,
      y: 20,
      size: "medium",
      colour: "var(--accent-sky)",
      description: "Designing fast, consistent, utility-first interfaces.",
    },

    {
      id: "gsap",
      name: "GSAP",
      x: 82,
      y: 20,
      size: "medium",
      colour: "var(--accent-butter)",
      description: "Crafting smooth, immersive web animations.",
    },

    {
      id: "git",
      name: "Git",
      x: 32,
      y: 78,
      size: "small",
      colour: "var(--accent-pink)",
      description: "Managing versions and collaborating through GitHub.",
    },

    {
      id: "node",
      name: "Node.js",
      x: 78,
      y: 66,
      size: "medium",
      colour: "var(--accent-sage)",
      description: "Building server-side applications and REST APIs.",
    },

    {
      id: "responsive",
      name: "Responsive UI",
      x: 50,
      y: 52,
      size: "medium",
      colour: "var(--accent-lavender)",
      description: "Creating layouts that adapt beautifully across devices.",
    },
  ];

  const sizes = {
    small: "w-16 h-16 sm:w-22 sm:h-22",
    medium: "w-24 h-24 sm:w-34 sm:h-34",
    large: "w-32 h-32 sm:w-42 sm:h-42",
  };

  useGSAP(
    () => {
      const nodes = gsap.utils.toArray(".skill-node");

      nodes.forEach((node, index) => {
        gsap.to(node, {
          y: gsap.utils.random(-12, 12),
          x: gsap.utils.random(-8, 8),
          rotate: gsap.utils.random(-3, 3),
          duration: gsap.utils.random(5, 7),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.3,
        });
      });
    },
    {
      scope: sectionRef,
    },
  );

  return (
    <section
      ref={sectionRef}
      className="skills-section relative bg-bg-primary py-16 sm:py-20 mt-0 overflow-hidden"
    >
      {/* grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.045] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[90px_90px] mask-[linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]" />

      <p className="relative z-20 tracking-[0.7em] uppercase text-xs text-text-muted mb-4">
        stellar stack
      </p>

      <h1
        ref={titleRef}
        className="relative font-garamond text-7xl sm:text-9xl leading-none bg-gradient-accent bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,170,200,0.25)] z-20"
      >
        skills
        <span className="absolute -top-2 right-0 text-3xl font-snell text-accent-pink">
          ✦
        </span>
        <div className="mt-6 h-px w-40 bg-gradient-accent opacity-70"></div>
      </h1>

      {/* desktop constellation */}
      <div className="relative z-20 h-[400px] sm:h-[520px] hidden sm:block">
        {/* ambient glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-25 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,180,210,.35), transparent 65%)",
          }}
        />

        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 1000 500"
        >
          <path
            d="M150 280 C300 100 500 400 850 180"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="6 12"
          />
        </svg>

        {skills.map((skill) => (
          <div
            key={skill.id}
            className="skill-node absolute  -translate-x-1/2 -translate-y-1/2 will-change-transform"
            style={{
              left: `${skill.x}%`,
              top: `${skill.y}%`,
            }}
          >
            <div
              className={`${sizes[skill.size]} rounded-full flex items-center justify-center cursor-pointer border border-border-dark/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0, 0, 0, 0.08)] transition-all duration-500 hover:scale-110 hover:-translate-y-2`}
              style={{
                backgroundColor: skill.colour,
              }}
            >
              {/* inner glow */}
              <div className="absolute inset-2 rounded-full bg-white/20 blur-md" />

              <p className="text-sm uppercase tracking-[0.18em] text-text-primary font-garamond text-center px-4 whitespace-nowrap">
                {skill.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* mobile grid */}
      <div className="sm:hidden relative z-20 grid grid-cols-2 gap-5 mt-10 px-4">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className={`${sizes[skill.size]} rounded-3xl flex items-center justify-center border border-border-light bg-text-white shadow-lg p-6 mx-auto transition-all hover:scale-105`}
            style={{ backgroundColor: skill.colour }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-text-primary font-garamond text-center px-2">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-28 relative z-20 max-w-5xl">
        <p
          className="
    uppercase
    tracking-[0.6em]
    text-xs
    text-text-muted
  "
        >
          currently
        </p>

        <h2
          className="
    mt-6
    font-garamond
    text-5xl
    sm:text-7xl
    leading-tight
  "
        >
          building thoughtful
          <br />
          digital experiences.
        </h2>

        <div
          className="
    mt-12
    grid
    sm:grid-cols-3
    gap-8
    text-sm
    tracking-wide
  "
        >
          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-text-muted">
              creating
            </p>
            <p className="mt-3">
              full-stack applications
              <br />
              with clean architecture
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-text-muted">
              exploring
            </p>
            <p className="mt-3">
              better systems,
              <br />
              animations & design
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-text-muted">
              beyond code
            </p>
            <p className="mt-3">
              curiosity ✦ creativity
              <br />
              continuous growth
            </p>
          </div>
          
          <div>
            <p className="uppercase tracking-[0.5em] text-xs text-text-muted">
              full-stack developer in evolution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills