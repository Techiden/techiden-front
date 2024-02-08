import React from "react";

// Specify the types for the props and the ref. If About does not accept any props, you can use an empty object.
const About = React.forwardRef<HTMLElement, object>((props, ref) => {
  return (
    <section id="about" ref={ref}>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">About</h1>
      </div>
    </section>
  );
});

export default About;
