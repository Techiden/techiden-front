import SectionHeader from "../../components/SectionHeader";
import ServicesComponent from "../../components/ServicesComponent";

import { web, design, ecommerce, marketing } from "../../assets";

const services = [
  {
    title: "Web Development",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
    icon: web,
  },
  {
    title: "UI/UX Design",
    description:
      "We create unique design for every website, that suits the needs of our customers.",
    icon: design,
  },
  {
    title: "Digital Marketing",
    description:
      "We help startups and enterprises to craft brands that represent their unique identity.",
    icon: marketing,
  },
  {
    title: "E-commerce",
    description:
      "We create e-commerce solutions focused on usability and responsive design, that provide a seamless shopping experience.",
    icon: ecommerce,
  },
  {
    title: "E-commerce",
    description:
      "We create e-commerce solutions focused on usability and responsive design, that provide a seamless shopping experience.",
    icon: ecommerce,
  },
  {
    title: "E-commerce",
    description:
      "We create e-commerce solutions focused on usability and responsive design, that provide a seamless shopping experience.",
    icon: ecommerce,
  },
  {
    title: "E-commerce",
    description:
      "We create e-commerce solutions focused on usability and responsive design, that provide a seamless shopping experience.",
    icon: ecommerce,
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-primary flex flex-col text-white ">
      <SectionHeader
        title="We Know That Good Design Means Good Business"
        color="white"
        className="text-center"
      />

      <div className=" overflow-x-auto p-4 flex flex-row gap-8 ">
        {services.map((service, index) => (
          <ServicesComponent
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
