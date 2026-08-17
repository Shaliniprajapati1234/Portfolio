function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image Placeholder */}
        <div className="flex justify-center">
          <div className="w-72 h-80 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center">
            <span className="text-slate-500 text-lg">Your Photo</span>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-cyan-400 font-semibold mb-2">About Me</p>

          <h2 className="text-4xl font-bold mb-6">
            Passionate Full Stack Developer
          </h2>

          <p className="text-slate-300 leading-7 mb-4">
            I'm a MERN Stack developer who enjoys creating clean, responsive and
            user-friendly web applications. I love solving real-world problems
            through technology.
          </p>

          <p className="text-slate-400 leading-7 mb-8">
            My primary technologies include React, Node.js, Express, MongoDB,
            JavaScript and Tailwind CSS. I'm continuously learning and building
            projects to improve my development skills.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 rounded-xl p-4">
              <h3 className="text-3xl font-bold text-cyan-400">10+</h3>
              <p className="text-slate-400 text-sm mt-1">Projects</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-4">
              <h3 className="text-3xl font-bold text-cyan-400">MERN</h3>
              <p className="text-slate-400 text-sm mt-1">Tech Stack</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;