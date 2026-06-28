import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="flex flex-wrap w-full min-h-18 items-center justify-between border-b border-border-light/60 bg-bg-primary/70 backdrop-blur-md px-2 md:px-10 lg:px-12 py-2">
      <div className="relative w-full md:w-auto">
        <Link to='/' className="leading-none flex flex-col items-center md:items-start">
          <p className="font-satoshi text-[10px] sm:text-[18px] lg:text-[12px] uppercase sm:tracking-[0.5em] tracking-[0.3em] lg:tracking-[0.6em] text-text-muted">
            edition
          </p>

          <h1 className="font-garamond text-5xl text-text-secondary">01</h1>
        </Link>
      </div>

      {/* works = projects, Studio = about section, Archive = experience section, Laboratory = something fun, connect = contact section */}

      <div className="w-full mt-4 flex flex-wrap lg:flex-row gap-4 sm:w-auto md:mt-0 md:justify-end md:gap-12 justify-center items-center">
        
        <Link className="nav-link" to="/projects">
          Works
        </Link>
        {/* <Link className="nav-link" to="/about">
          Studio
        </Link> */}
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
