import React from "react";
import quotationToL from "../../assets/icons/quotation-to-l.png";
import quotationToR from "../../assets/icons/quotation-to-r.svg";
import ahmed from "../../assets/founders/ahmed.png";
import nosheen from "../../assets/founders/nosheen.png";
import SectionHeader from "../../components/SectionHeader";
import { SocialIcon } from "react-social-icons";

const founders = [
  {
    name: "Ahmed Elfarra",
    title: "CEO & Co-Founder",
    image: ahmed,
    bio: "Ahmed is a software engineer with a passion for building products that make a positive impact on the world. He has a background in computer science and has worked at several startups in the past. He is passionate about building products that make a positive impact on the world.",
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      email: "mailto:aelfarra@tehciden.com",
    },
  },
  {
    name: "Nosheen Naz",
    title: "CMO & Co-Founder",
    image: nosheen,
    bio: "Nosheen is a marketing expert with a background in business and marketing. She has worked at several startups in the past and has a passion for building products that make a positive impact on the world. She is passionate about building products that make a positive impact on the world.",
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:nnaz@techiden.com",
    },
  },
];

const About = React.forwardRef<HTMLElement, object>((_props, ref) => {
  return (
    <section id="about" ref={ref} className="">
      <SectionHeader title="Meet Our Founders" />

      <div className="grid md:grid-cols-1">
        {founders.map((founder, index) => (
          <div
            key={index}
            className={`flex flex-wrap ${
              index % 2 === 0
                ? "xl:flex-row border-b-primary border-b-2 xl:border-none "
                : "xl:flex-row-reverse"
            } flex-col items-center justify-center  py-10`}>
            <div className="xl:w-1/2 flex flex-col justify-center text-center items-center text-primary ">
              <img
                src={founder.image}
                alt={founder.name}
                className="rounded-full xl:w-96 xl:h-96 w-1/2 object-cover mx-auto"
              />
              <h2 className="xl:text-5xl font-bold xl:mt-8 mt-4">
                {founder.name}
              </h2>
              <h3 className="xl:text-4xl font-normal">{founder.title}</h3>
              <div className="flex flex-row gap-2 mt-2 xl:mt-4">
                {Object.keys(founder.socials).map((social, index) => {
                  if (social === "email") {
                    return (
                      <SocialIcon
                        key={index}
                        url={`mailto:${
                          founder.socials[
                            social as keyof typeof founder.socials
                          ]
                        }`}
                        style={{ height: 40, width: 40 }}
                      />
                    );
                  } else {
                    return (
                      <SocialIcon
                        key={index}
                        url={
                          founder.socials[
                            social as keyof typeof founder.socials
                          ]
                        }
                        style={{ height: 40, width: 40 }}
                      />
                    );
                  }
                })}
              </div>
            </div>

            <div className="xl:w-1/2 flex flex-col gap-10 items-center">
              <img
                src={quotationToR}
                alt={founder.name}
                className="xl:w-28  w-12  mr-auto"
              />
              <p className="xl:text-2xl text-lg text-center leading-tight xl:leading-relaxed">
                {founder.bio}
              </p>
              <img
                src={quotationToL}
                alt={founder.name}
                className="xl:w-28  w-12  ml-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default About;
