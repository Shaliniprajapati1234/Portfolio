function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <p className="text-cyan-400 font-medium mb-2">Hello, I'm</p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Your Name
          </h1>

          <h2 className="text-2xl text-slate-300 mt-4">
            MERN Stack Developer
          </h2>

          <p className="text-slate-400 mt-6 leading-7">
            I build responsive, scalable and modern full-stack web applications
            using MongoDB, Express, React and Node.js.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-3 rounded-xl transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-900 px-6 py-3 rounded-xl transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <span className="text-7xl font-bold text-cyan-400">YN</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;