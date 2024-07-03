import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main>
      {/* first section */}
      <section className="space-y-4">
        <Nav />
        <Banner />
        <Stats />
      </section>
    </main>
  );
}
