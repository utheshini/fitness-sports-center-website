import trainer1 from "../assets/trainer1.jpg";
import trainer2 from "../assets/trainer2.jpg";
import trainer3 from "../assets/trainer3.jpg";
import Card from "./Card";

const trainers = [
  {
    name: "John Doe",
    role: "Fitness Coach",
    img: trainer1,
  },
  {
    name: "Daniel Williams",
    role: "Personal Trainer",
    img: trainer2,
  },
  {
    name: "Michael Joe",
    role: "Nutrition Specialist",
    img: trainer3,
  },
];

function Trainers() {
  return (
    <section
      id="trainers"
      className="py-20 bg-[var(--color-lightBg)] text-[var(--color-darkBg)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h2 className="mb-12 text-2xl md:text-3xl font-bold">
          Meet Our Trainers
        </h2>

        {/* Card component */}
        <div className="grid gap-8 md:grid-cols-3">
          {trainers.map((t) => (
            <Card key={t.name} className="p-6 text-center">
              <img
                src={t.img}
                alt={t.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />

              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-sm opacity-70">{t.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;
