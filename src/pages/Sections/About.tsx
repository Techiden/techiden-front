import React from "react";
import quotationToL from "../../assets/icons/quotation-to-l.png";
import quotationToR from "../../assets/icons/quotation-to-r.svg";
import ahmed from "../../assets/founders/ahmed.png";
import nosheen from "../../assets/founders/nosheen.png";
import SectionHeader from "../../components/SectionHeader";

const founders = [
  {
    name: "Ahmed Elfarra",
    title: "CEO & Co-Founder",
    image: ahmed,
    bio: "Ahmed is a software engineer with a passion for building products that make a positive impact on the world. He has a background in computer science and has worked at several startups in the past. He is passionate about building products that make a positive impact on the world.",
  },
  {
    name: "Nosheen Naz",
    title: "CMO & Co-Founder",
    image: nosheen,
    bio: "Nosheen is a marketing expert with a background in business and marketing. She has worked at several startups in the past and has a passion for building products that make a positive impact on the world. She is passionate about building products that make a positive impact on the world.",
  },
];

const About = React.forwardRef<HTMLElement, object>((_props, ref) => {
  return (
    <section id="about" ref={ref} className="">
      <SectionHeader title="Meet Our Founders" />

      <div className="grid md:grid-cols-1 gap-36">
        {founders.map((founder, index) => (
          <div
            key={index}
            className={`flex flex-wrap ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-center justify-center`}>
            <div className="w-1/2 flex flex-col justify-center text-center items-center text-primary">
              <img
                src={founder.image}
                alt={founder.name}
                className="rounded-full w-96 h-96 object-cover mx-auto"
              />
              <h2 className="text-5xl font-bold mt-8">{founder.name}</h2>
              <h3 className="text-4xl font-normal">{founder.title}</h3>
            </div>

            <div className="w-1/2 flex flex-col gap-10 items-center">
              <img src={quotationToR} alt="" className="w-36 mr-auto" />
              <p className="text-2xl text-center leading-relaxed">
                {founder.bio}
              </p>
              <img src={quotationToL} alt="" className="w-36 ml-auto" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default About;
