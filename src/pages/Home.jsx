import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(SplitText)

const Home = () => {

  const titleRef = useRef(null)
  const paraRef = useRef(null)

  useLayoutEffect(() => {
    const splitTitle = new SplitText(titleRef.current, {
      type: 'chars'
    });
    const splitPara = new SplitText(paraRef.current, {
      type: 'lines'
    })

    const t1 = gsap.timeline()

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
        ease: 'power2.inOut',
        duration: 1,
      },
      "-=0.2",
    );

  })

  return (
    <main className="relative h-[calc(100vh-72px)] overflow-hidden bg-bg-primary">
      {/* decorative grain */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none" />
      <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[130vw] h-[90vh] rounded-t-[100%] bg-gradient-primary" />

      {/* bg-[#fad2e1] */}
      {/* title */}
      <div className="relative z-10 flex flex-col items-center pt-35">
        <p id="para2" className="uppercase tracking-[0.5em] text-sm mb-5 text-text-primary">
          welcome to my world
        </p>

        <h1
          ref={titleRef}
          id="heading"
          className="font-garamond capitalize text-[10rem] leading-none"
        >
          Portfolio
        </h1>

        <p ref={paraRef}
          id="para1"
          className="mt-8 max-w-md text-center text-black/60 capitalize tracking-widest"
        >
          crafting immersive web experiences with code and creativity.
        </p>
      </div>
    </main>
  );
};

export default Home;
