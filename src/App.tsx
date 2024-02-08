import Header from "./pages/Sections/Header";

import Navbar from "./components/Navbar";
import About from "./pages/Sections/About";
import Services from "./pages/Sections/Services";
import Contact from "./pages/Sections/Contact";
import Footer from "./pages/Sections/Footer";
import { useRef } from "react";

const App = () => {
  const aboutRef = useRef(null);
  return (
    <div>
      <Navbar aboutRef={aboutRef} />
      <Header />
      <About ref={aboutRef} />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
