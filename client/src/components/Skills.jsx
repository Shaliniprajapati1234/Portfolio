function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-semibold">My Skills</p>
          <h2 className="text-4xl font-bold mt-2">
            Technologies I Work With
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            These are the core technologies I use to build responsive and
            full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-400 hover:-translate-y-1 transition"
            >
              <h3 className="font-semibold text-lg">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;