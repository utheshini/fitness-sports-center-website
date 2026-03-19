import aboutImage from "../assets/about.jpg";

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-[var(--color-lightBg)] text-[var(--color-darkBg)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* About image */}
        <div className="flex-1">
          <img
            src={aboutImage}
            alt="Gym Environment"
            className="w-full rounded-xl shadow-md"
          />
        </div>

        {/* About text */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">
            The Story Behind Our Gym
          </h2>

          <p className="text-sm md:text-base text-justify opacity-80 leading-relaxed">
            Fitness Sports Center established in 2023, provides modern
            equipment, certified trainers, and personalized fitness programs
            designed to help you reach your health and strength goals.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
