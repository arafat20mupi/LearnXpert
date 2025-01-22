import Hero from "./Hero/Hero";
import TopStudent from "./TopStudent/TopStudent";
import About from "./About/About";
import News from "./News/News";
import Faq from "../Faq/Faq";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className=" px-7 md:px-20 ">
        <TopStudent />
        <About />
        <News />
        <Faq />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
