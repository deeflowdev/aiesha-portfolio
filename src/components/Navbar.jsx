import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="flex w-full h-18 items-center justify-between border-b border-border-light/60 bg-bg-primary/70 backdrop-blur-md px-12 fixed top-0 left-0 z-50">
      <div className="relative w-fit">
        <Link to="/" className="leading-none">
          <p className="font-satoshi text-[12px] uppercase tracking-[0.6em] text-text-muted">
            edition
          </p>

          <h1 className="font-garamond text-5xl text-text-secondary">01</h1>
        </Link>
      </div>

      <div className="flex gap-12 items-center">
        {/* works = projects, Studio = about section, Archive = experience section, Laboratory = something fun, connect = contact section */}
        <Link className="nav-link" to="/projects">
          Works
        </Link>
        <Link className="nav-link" to="/about">
          Studio
        </Link>
        <Link className="nav-link" to="/laboratory">
          Laboratory
        </Link>
        <Link className="nav-link" to="/archive">
          Archive
        </Link>
        <div>
          <Link
            className="font-satoshi text-sm uppercase tracking-[0.18em]
            text-text-secondary  rounded-full border border-border-dark px-4 py-2 hover:bg-bg-secondary transition-all"
            to="/contact"
          >
            Connect
          </Link>
        </div>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
