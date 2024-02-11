const Gradient = ({
  isNavbar,
  scrolled,
}: {
  isNavbar?: boolean;
  scrolled?: boolean;
}) => {
  return (
    <>
      {/* Large Screens */}
      <div className="bg-linear-gradient hidden md:flex  h-full basis-full  w-full"></div>

      {/* Small Screens */}
      <div
        className={`${
          scrolled
            ? "bg-linear-gradient-mobile"
            : isNavbar
            ? "navbar-linear-gradient"
            : "bg-linear-gradient-mobile"
        } flex md:hidden h-full basis-full w-full`}></div>
    </>
  );
};

export default Gradient;
