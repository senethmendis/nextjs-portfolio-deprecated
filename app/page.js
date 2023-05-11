
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Porjects from "@/components/Porjects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Porjects />
      <Contact />
    </div>
  )
}
