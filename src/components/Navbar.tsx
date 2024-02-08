import { useEffect, useState } from "react";
import Logo from "../assets/logo-dark-no-bg.png";
import Gradient from "./Gradient";

const navLinks = ["Home", "About", "Services", "Contact"];

const NavLink = ({ title }: { title: string }) => {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = title === "Home" ? "home" : title.toLowerCase();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <li>
      <a
        href={title === "Home" ? "/" : `#${title.toLowerCase()}`}
        onClick={smoothScroll}>
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

      <img src={Logo} alt="logo" className="w-16" />
      <ul className=" gap-8 cursor-pointer hidden md:flex items-center text-white">
        {navLinks.map((link) => (
          <NavLink key={link} title={link} />
        ))}
      </ul>
      <a href="#" onClick={(e) => e.preventDefault()}>
        عربي
      </a>
    </nav>
  );
};

export default Navbar;
