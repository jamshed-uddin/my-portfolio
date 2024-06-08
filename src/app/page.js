import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <div className="lg:space-y-20">
        <Work />
        <About />
        <Contact />
      </div>
    </main>
  );
}
