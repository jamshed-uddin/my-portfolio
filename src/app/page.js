import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="lg:space-y-20">
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  );
}
