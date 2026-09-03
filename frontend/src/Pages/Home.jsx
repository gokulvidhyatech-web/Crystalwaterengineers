import Header from "../components/Header";
import Hero from "../components/Hero";
import  StatsBanner from"../components/StatsBanner"
import AboutSection from "../components/AboutSection";
import ProcessSection from"../components/ProcessSection";
function Home() {
  return (
    <>
      <Header />

      <main>

        {/* SECTION 2 */}
        <Hero />

        {/* SECTION 3 WILL COME HERE */}
         <StatsBanner />
         <AboutSection/>
         <ProcessSection/>
      </main>
    </>
  );
}

export default Home;