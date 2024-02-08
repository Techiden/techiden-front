import { TypeAnimation } from "react-type-animation";
import RequestDemoButton from "../../components/RequestDemoButton";
import HeaderImage from "../../assets/Header/img-www.svg";
import Gradient from "../../components/Gradient";

const Header = () => {
  return (
    <section
      className="flex w-screen pt-40 pb-20 flex-row gap-8 z-30  relative"
      id="home">
      <div className="h-full xl:basis-3/5 basis-full">
        <div className="flex items-start flex-col gap-4 xl:h-[136px] h-[116px]">
          <TypeAnimation
            sequence={["Grow your business with Techiden"]}
            cursor={false}
            wrapper="h1"
            className="text-white xl:text-5xl text-2xl font-bold"
          />
          <TypeAnimation
            sequence={[
              2500,
              "Web Development",
              1000,
              "Design",
              1000,
              "Digital Marketing",
              1000,
              "Mobile",
              1000,
              "SEO",
              1000,
              "SMM",
              1000,
              "SaaS",
              500,
            ]}
            speed={10}
            repeat={Infinity}
            cursor={false}
            wrapper="h1"
            className="gradient-text xl:text-5xl text-2xl font-bold leading-normal"
          />
        </div>

        <TypeAnimation
          // splitter={(str) => str.split(/(?= )/)}
          // Split strings into single words, rather than characters
          sequence={[
            4200,
            // "Unlock your business's potential with Techiden's expert web development, engaging design, and targeted digital marketing services.",
            "Techiden offers a full suite of tailored web development, design, and digital marketing services to boost your business's online presence. As your comprehensive digital partner, we ensure your brand stands out and achieves its full potential.",
          ]}
          speed={{ type: "keyStrokeDelayInMs", value: 30 }}
          omitDeletionAnimation={true}
          cursor={false}
          wrapper="p"
          className="text-white xl:text-2xl text-lg font-light my-8 xl:h-[192px] h-[180px] "
        />

        <RequestDemoButton
          title="Request a Demo"
          width="xl:w-1/2 w-full"
          className="mt-6"
        />
      </div>

      <Gradient />

      <div className="h-full xl:basis-2/5 hidden xl:block relative">
        <img src={HeaderImage} alt="" className="" />
      </div>
    </section>
  );
};

export default Header;
