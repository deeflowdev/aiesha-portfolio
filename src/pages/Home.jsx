import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import Studio from "./Studio";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Home = () => {
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const circleRef = useRef(null);

  useLayoutEffect(() => {
    const splitTitle = new SplitText(titleRef.current, {
      type: "chars",
    });

    const splitPara = new SplitText(paraRef.current, {
      type: "lines",
    });

    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from(introRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "back.out(1.7)",
      });

      t1.from(splitTitle.chars, {
        y: 100,
        stagger: 0.05,
        opacity: 0,
        duration: 1,
        ease: "power3.inOut",
      });

      t1.from(
        splitPara.lines,
        {
          opacity: 0,
          y: 30,
          stagger: 0.03,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.2",
      );

      // title disappears while scrolling
      gsap.to(titleRef.current, {
        y: -100,
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      });

      // curve moves
      gsap.to(circleRef.current, {
        scale: 0.85,
        y: 120,
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // studio reveal
      gsap.to(".studio-overlay", {
        yPercent: -100,
        scrollTrigger: {
          trigger: ".studio-overlay",
          start: "top top",
          end: "+=500",
          scrub: true,
        },
      });
    });

    return () => {
      ctx.revert();
      splitTitle.revert();
      splitPara.revert();
    };
  }, []);

  return (
    <>
      <main className="relative h-[calc(100vh-4.5rem)] overflow-hidden bg-bg-primary">
        {/* semi circle */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-15%] w-[110vw] h-[85vh] rounded-t-[100%] bg-gradient-primary" />

        {/* title */}
        <div className="relative z-10 flex flex-col items-center mt-10 pt-[22vh] uppercase">
          <p
            ref={introRef}
            id="para2"
            className="tracking-[0.8em] text-sm mb-6 text-text-primary"
          >
            frontend • full stack • creative
          </p>

          <div className="relative">
            <h1
              ref={titleRef}
              className="font-garamond capitalize text-[10rem] leading-none relative z-10"
            >
              Portfolio
            </h1>
          </div>

          <p
            ref={paraRef}
            id="para1"
            className="mt-12 text-center text-black/60 capitalize tracking-relaxed leading-relaxed max-w-xl text-md"
          >
            transforming ideas into elegant digital spaces.
          </p>
        </div>
        <div
          className="absolute bottom-14 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.6em] text-black/40 uppercase">
          scroll to explore
        </div>
      </main>

      <section className="relative">
        <div className="studio-overlay bg-bg-primary">
          <Studio />
        </div>
      </section>
    </>
  );
};

export default Home;
