import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="min-h-[90vh] pt-24 bg-black text-white flex items-end">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 flex flex-col md:flex-row items-center">
        {/* Left side */}
        <div className="flex-1 space-y-6 pb-10 md:pb-20 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Transform Your Body <br />
            Build{" "}
            <span className="text-[var(--color-primary)]">Strength &</span>{" "}
            <br />
            <span className="text-[var(--color-primary)]">Confidence</span>
          </h1>

          <p className="max-w-md mx-auto md:mx-0 text-sm md:text-lg text-gray-300">
            Start your fitness journey today with professional <br />
            trainers and modern equipment.
          </p>

          <a href="#contact" className="btn-primary inline-block">
            Start Training
          </a>
        </div>

        {/* Right side */}
        <div className="relative w-full flex-1 flex justify-center md:justify-end">
          {/* Hero image */}
          <img
            src={heroImage}
            alt="Fitness Hero"
            className="w-[350px] md:w-[600px] object-contain"
          />

          {/* Left edge fade */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

          {/* Right edge fade */}
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>

          {/* Top edge fade */}
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
