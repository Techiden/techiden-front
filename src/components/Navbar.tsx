import { useEffect, useState } from "react";
import Logo from "../assets/logos/logo-dark-bg.svg";
import Gradient from "./Gradient";
import RequestDemoButton from "./RequestDemoButton";
import { smoothScrollToElementById } from "../helpers/utils";

const navLinks = ["Header", "About", "Services", "Contact"];

const NavLink = ({ title }: { title: string }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = title === "Header" ? "header" : title.toLowerCase();
    smoothScrollToElementById(targetId);
  };
  return (
    <li>
      <a
        href={title === "Home" ? "/" : `#${title.toLowerCase()}`}
        onClick={handleClick}>
        {title}
      </a>
    </li>
  );
};

const Navbar = ({
  aboutRef,
}: {
  aboutRef: React.RefObject<HTMLDivElement>;
}) => {
  const [bgColor, setBgColor] = useState(false);

  const changeBackground = () => {
    if (aboutRef.current) {
      const aboutTop = aboutRef.current.offsetTop;
      if (window.scrollY >= aboutTop - 150) {
        setBgColor(true);
      } else {
        setBgColor(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <nav className="flex justify-between w-full py-8 fixed z-50">
      <Gradient isNavbar={true} scrolled={bgColor} />

      <img src={Logo} alt="logo" className="w-44" />
      <ul className=" gap-8 cursor-pointer hidden md:flex items-center text-white">
        {navLinks.map((link) => (
          <NavLink key={link} title={link} />
        ))}
      </ul>
      {/* <a href="#" onClick={(e) => e.preventDefault()}>
        عربي
      </a> */}

      <RequestDemoButton
        title="Request a Demo"
        className="hidden md:block xl:w-1/5 md:w-1/4 text-sm"
      />
    </nav>
  );
};

export default Navbar;
