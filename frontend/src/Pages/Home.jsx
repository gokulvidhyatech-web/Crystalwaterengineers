import Header from "../components/Header";
import Hero from "../components/Hero";
import  StatsBanner from"../components/StatsBanner"
import AboutSection from "../components/AboutSection";
import ProcessSection from"../components/ProcessSection";
import ProjectsSection from"../components/ProjectsSection";
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
      </main>
    </>
  );
}

export default Home;