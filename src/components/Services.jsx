import Card from "./Card";
import { FaDumbbell } from "react-icons/fa";
import { GiBowlOfRice } from "react-icons/gi";
import { Ri24HoursFill } from "react-icons/ri";
const services = [
  {
    icon: <FaDumbbell />,
    title: "Personal Training",
    desc: "Customized workout plans for your fitness goals and progress.",
  },
  {
    icon: <GiBowlOfRice />,
    title: "Nutrition Guidance",
    desc: "Expert-designed diet plans to support a healthy and balanced lifestyle.",
  },
  {
    icon: <Ri24HoursFill />,
    title: "Flexible Schedule",
    desc: "Work out anytime with 24/7 access that fits your daily routine.",
  },
];
function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-[var(--color-lightBg)] text-[var(--color-darkBg)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <h2 className="mb-12 text-2xl md:text-3xl font-bold">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (

            // Card component
            <Card key={service.title} className="p-8">
              <div className="mb-4 text-3xl text-[var(--color-primary)] flex justify-center">
                {service.icon}
              </div>
              <h3 className="mb-2 font-semibold"> {service.title} </h3>
              <p className="text-sm opacity-70"> {service.desc} </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;
