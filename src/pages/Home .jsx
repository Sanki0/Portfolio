import About from "../components/info/About";
import Experience from "../components/info/Experience";
import Projects from "../components/info/Projects";

function Home() {
  return (
    <div className="mx-10">
      <section className="mt-12 h-screen">
        <div>Hi, my name is</div>
        <h1 className="text-7xl py-8">Sebastian Ferreyra</h1>
        <div className="py-8">
          I'm a Software Engineer and a Computer Science student, with a main focus on developing within the MERN stack
        </div>
      </section>
      <About />
      <Experience />
      <Projects />

    </div>
  )
}

export default Home;
