import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Offer from "./components/Offer";
import Review from "./components/Review";
import Service from "./components/Service";
import Stats from "./components/Stats";
import WhoAreWe from "./components/WhoAreWe";

export default function Home() {
  return (
    <main className="font-inter">
      {/* first section */}
      <section className="space-y-4 banner-violet-pattern">
        <Nav />
        <Banner />
        <Stats />
      </section>
      {/* who are we */}
      <section className="bg-violet-50">
        <WhoAreWe />
      </section>
      {/* service */}
      <section className="bg-violet-50">
        <Service />
      </section>
      {/* review */}
      <section className="bg-violet-50 text-[#020043] py-7">
        <div className="container mx-auto space-y-5 px-4 text-center md:text-left">
          <button className="border-[1px] px-6 py-2 rounded-3xl border-[#020043]">
            Testimonial
          </button>
          <p className="text-3xl font-bold">What they say about us?</p>
        </div>

        <Review />
      </section>
      {/* faq */}
      <section className="bg-violet-50 text-[#020043] py-7">
        <div className="container mx-auto space-y-5 px-4">
          <button className="border-[1px] px-6 py-2 rounded-3xl border-[#020043]">
            FAQ
          </button>
          <p className="text-3xl font-bold">Frequently Asked Question</p>
        </div>

        <FAQ />
      </section>
      {/* offer */}
      <section>
        <Offer />
      </section>
      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
