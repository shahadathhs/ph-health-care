import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Offer from "./components/Offer";
import Review from "./components/Review";
import Stats from "./components/Stats";

export default function Home() {
  return (
    <main className="font-inter">
      {/* first section */}
      <section className="space-y-4">
        <Nav />
        <Banner />
        <Stats />
      </section>
      {/* faq */}
      <section className="bg-violet-50 text-[#020043] py-7">
        <div className="container mx-auto space-y-5">
          <button className="border-[1px] px-6 py-2 rounded-3xl border-[#020043]">
            Testimonial
          </button>
          <p className="text-3xl font-bold">What they say about us?</p>
        </div>

        <Review />
      </section>
      {/* faq */}
      <section className="bg-violet-50 text-[#020043] py-7">
        <div className="container mx-auto space-y-5">
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
