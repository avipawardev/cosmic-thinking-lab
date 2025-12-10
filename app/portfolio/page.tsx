import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="relative">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
