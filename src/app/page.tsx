import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/sections/Hero";
import Work from "@/components/sections/Work";
import Story from "@/components/sections/Story";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative w-full">
      <NavBar />
      <Hero />
      <Work />
      <Story />
      <Footer />
    </main>
  );
}