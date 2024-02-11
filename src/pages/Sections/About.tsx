import React, { useEffect, useState } from "react";
import quotationToL from "../../assets/icons/quotation-to-l.png";
import quotationToR from "../../assets/icons/quotation-to-r.svg";
import ahmed from "../../assets/founders/ahmed.png";
import nosheen from "../../assets/founders/nosheen.png";
import SectionHeader from "../../components/SectionHeader";
import { SocialIcon } from "react-social-icons";

import { motion, useScroll } from "framer-motion";
import { slideInFromLeftVariants, slideUpVariants } from "../../helpers/utils";

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
  const { scrollYProgress } = useScroll();

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest > 0 && !hasScrolled) {
        setHasScrolled(true);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, hasScrolled]);

  return (
    <section id="about" ref={ref} className="">
      <motion.div
        variants={slideInFromLeftVariants}
        initial="offscreen"
        animate={hasScrolled ? "onscreen" : "offscreen"}>
        <SectionHeader title="Meet Our Founders" className="mb-10" />
      </motion.div>

      <motion.div className="grid md:grid-cols-1">
        {founders.map((founder, index) => (
          <motion.div
            variants={slideUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "some" }} // Adjust 'amount' as needed
            key={index}
            className={`flex flex-wrap ${
              index % 2 === 0
                ? "md:flex-row border-b-primary border-b-2 md:border-none "
                : "md:flex-row-reverse"
            } flex-col items-center justify-center  py-10`}>
            <div className="md:w-1/2 flex flex-col justify-center text-center items-center text-primary ">
              <img
                src={founder.image}
                alt={founder.name}
                className="rounded-full md:w-96 md:h-96 w-1/2 object-cover mx-auto"
              />
              <h2 className="md:text-5xl font-bold md:mt-8 mt-4">
                {founder.name}
              </h2>
              <h3 className="md:text-4xl font-normal">{founder.title}</h3>
              <div className="flex flex-row gap-2 mt-2 md:mt-4">
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

            <div className="md:w-1/2 flex flex-col gap-10 items-center">
              <img
                src={quotationToR}
                alt={founder.name}
                className="md:w-28  w-12  mr-auto"
              />
              <p className="md:text-2xl text-lg text-center leading-tight md:leading-relaxed">
                {founder.bio}
              </p>
              <img
                src={quotationToL}
                alt={founder.name}
                className="md:w-28  w-12  ml-auto"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
});

export default About;
