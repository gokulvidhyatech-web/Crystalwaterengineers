import Header from "../components/Header";
import Hero from "../components/Hero";
import  StatsBanner from"../components/StatsBanner"
import AboutSection from "../components/AboutSection";
import ProcessSection from"../components/ProcessSection";
import ProjectsSection from"../components/ProjectsSection";
import MapSection from "../components/MapSection";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
         <StatsBanner />
         <AboutSection/>
         <ProcessSection/>
         <ProjectsSection/>
         <MapSection/>
      </main>
    </>
  );
}

export default Home;