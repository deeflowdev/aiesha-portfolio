import React from "react";

const Footer = () => {
  return (
    <footer
      className="bg-bg-primary px-10 py-20 overflow-hidden">
      <div
        className="flex flex-col items-center text-center">
        <p
          className="uppercase tracking-[0.6em] text-xs text-black/40">
          let's create something
        </p>

        <h2
          className="font-garamond text-[7rem] leading-none mt-6">
          together
        </h2>

        <a
          href="mailto:your@email.com"
          className="mt-10 uppercase tracking-[0.3em] text-sm border-b border-black/40 pb-2">
          contact me
        </a>
      </div>

      <div
        className="mt-24 flex justify-between text-xs tracking-widest text-black/40">
        <p>© 2026 aiesha</p>

        <p>built with react & creativity</p>
      </div>
    </footer>
  );
};

export default Footer;
