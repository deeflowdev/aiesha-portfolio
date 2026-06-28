import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  const sectionRef = useRef(null)
  
  // skills
  const skills = [
    {
      id: "html",
      name: "HTML",
      x: 18,
      y: 30,
      size: "small",
      colour: "var(--accent-butter)",
      description: "Building semantic and accessible page structures.",
    },

    {
      id: "css",
      name: "CSS",
      x: 12,
      y: 58,
      size: "small",
      colour: "var(--accent-sage)",
      description: "Creating responsive layouts and modern styling.",
    },

    {
      id: "javascript",
      name: "JavaScript",
      x: 76,
      y: 42,
      size: "large",
      colour: "var(--accent-pink)",
      description:
        "Adding interactivity and dynamic behaviour to applications.",
    },

    {
      id: "react",
      name: "React",
      x: 55,
      y: 12,
      size: "large",
      colour: "var(--accent-lavender)",
      description: "Building reusable components and modern user interfaces.",
    },

    {
      id: "python",
      name: "Python",
      x: 65,
      y: 72,
      size: "medium",
      colour: "var(--accent-sky)",
      description: "Developing backend logic and automation scripts.",
    },

    {
      id: "tailwind",
      name: "Tailwind CSS",
      x: 30,
      y: 22,
      size: "medium",
      colour: "var(--accent-sky)",
      description: "Designing fast, consistent, utility-first interfaces.",
    },

    {
      id: "gsap",
      name: "GSAP",
      x: 84,
      y: 18,
      size: "medium",
      colour: "var(--accent-butter)",
      description: "Crafting smooth, immersive web animations.",
    },

    {
      id: "git",
      name: "Git",
      x: 34,
      y: 76,
      size: "small",
      colour: "var(--accent-pink)",
      description: "Managing versions and collaborating through GitHub.",
    },

    {
      id: "node",
      name: "Node.js",
      x: 82,
      y: 68,
      size: "medium",
      colour: "var(--accent-sage)",
      description: "Building server-side applications and REST APIs.",
    },

    {
      id: "responsive",
      name: "Responsive UI",
      x: 48,
      y: 48,
      size: "medium",
      colour: "var(--accent-lavender)",
      description: "Creating layouts that adapt beautifully across devices.",
    },
  ];

  const sizes = {
        small: "w-18 h-18",
        medium: "w-30 h-30",
        large: "w-34 h-34",
      };

      useGSAP(
        () => {
          gsap.from(".skill-node", {
            yPercent: -150,
            opacity: 0,
            scale: 0.3,
            rotate: "random(-8, 8)",
            duration: 1.4,
            stagger: {
              amount: 1,
              from: "random",
            },
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              markers: true,
              toggleActions: "play none none reverse",
              onEnter: () => {
                gsap.to(".skill-node", {
                  y: "+=8",
                  duration: 2.5,
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut",
                  stagger: {
                    each: 0.15,
                    from: "random",
                  },
                });
              },
            },
          });
        },
        { scope: sectionRef },
      );

  return (
    <section ref={sectionRef} className="skills-section min-h-screen mt-3">
      {/*title  */}

      <p className="tracking-[0.6em] uppercase text-sm">my universe</p>

      <h1 className="font-garamond text-8xl">skills</h1>

      {/* constellation design */}
      <div className="relative h-[500px]">
        {skills.map((skill) => {
          return (
            <div
              key={skill.id}
              className="skill-node absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${skill.x}%`,
                top: `${skill.y}%`,
              }}
            >
              <div
                className={`${sizes[skill.size]} rounded-full flex items-center justify-center border border-border-dark backdrop-blur-md shadow-lg cursor-pointer transition-all duration-300 hover:scale-110`}
                style={{ backgroundColor: skill.colour }}
              >
                <p className="text-md uppercase tracking-wider text-text-primary font-garamond px-3 text-center leading-relaxed whitespace-nowrap">
                  {skill.name}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* cards */}
    </section>
  );
}

export default Skills