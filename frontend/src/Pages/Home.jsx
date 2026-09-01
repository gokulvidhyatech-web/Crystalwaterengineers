import Header from "../components/Header";
import Hero from "../components/Hero";
import  StatsBanner from"../components/StatsBanner"

function Home() {
  return (
    <>
      <Header />

      <main>

        {/* SECTION 2 */}
        <Hero />

        {/* SECTION 3 WILL COME HERE */}
         <StatsBanner />
      </main>
    </>
  );
}

export default Home;