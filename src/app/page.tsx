import AboutSection from "./components/AboutSection";
import Email from "./components/Email";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
      <Hero />
      </div>
      <AboutSection/>
      <Projects/>
      <Email/>
      <Footer/>
    </div>
  );
}
