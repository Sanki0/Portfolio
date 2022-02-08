import About from "../components/info/About";

function Home() {
  return (
    <div className="mx-10">
      <section className="mt-12 h-screen">
        <div>Hi, my name is</div>
        <h1 className="text-6xl my-8">Sebastian Ferreyra</h1>
        <div>
          I'm a Software Engineer and a Computer Science student, with a main focus on developing within the MERN stack
        </div>
      </section>
      <About />

    </div>
  )
}

export default Home;
