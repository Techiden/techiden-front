import { TypeAnimation } from "react-type-animation";
import RequestDemoButton from "../../components/RequestDemoButton";
import Gradient from "../../components/Gradient";
// import video from "../../assets/bg-video.gif";
import logo from "../../assets/logos/logo.svg";
import { Variants, motion } from "framer-motion";

const Header = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <>
      <section
        className="flex w-screen pt-40 pb-20 flex-row gap-4 z-30  relative min-h-[80vh] "
        id="header">
        <motion.div
          className="h-full xl:basis-3/5 basis-full"
          variants={cardVariants}>
          <div className="flex items-start flex-col gap-4  ">
            <TypeAnimation
              sequence={["Grow your business with Techiden"]}
              cursor={false}
              wrapper="h1"
              className="text-white xl:text-5xl text-2xl font-bold ubuntu xl:min-h-[110px] h-full min-h-[60px]"
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
              className="gradient-text xl:text-5xl text-2xl font-bold xl:min-h-[80px] h-full min-h-[40px]"
            />

            <TypeAnimation
              splitter={(str) => str.split(/(?= )/)}
              // Split strings into single words, rather than characters
              sequence={[
                4200,
                "Techiden offers a full suite of tailored web development, design, and digital marketing services to boost your business's online presence. As your comprehensive digital partner, we ensure your brand stands out and achieves its full potential.",
              ]}
              speed={{ type: "keyStrokeDelayInMs", value: 100 }}
              omitDeletionAnimation={true}
              cursor={false}
              wrapper="p"
              className="text-white xl:text-2xl text-lg font-light  min-h-[230px] h-full"
            />

            <RequestDemoButton
              title="Request a Demo"
              width="xl:w-1/2 w-full"
              className="mt-auto"
            />
          </div>
        </motion.div>

        <Gradient />
        {/* <img
          src={video}
          alt="background video"
          className="absolute top-0 left-0 w-full h-full object-cover xl:w-1/4 xl:h-full"
          style={{
            zIndex: -1,

            opacity: 0.1,
            filter: "blur(2px)",
            mixBlendMode: "lighten",
            // mixBlendMode: "color-dodge",
          }}
        /> */}

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full xl:basis-2/5 hidden xl:block relative">
          <img src={logo} alt="techiden logo" className="flipping-image" />
        </motion.div>
      </section>
    </>
  );
};

export default Header;
