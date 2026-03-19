import Card from "./Card";

const plans = [
  {
    name: "Basic",
    price: "$20 / month",
    features: ["Access to gym", "Basic equipment", "Locker facility"],
  },
  {
    name: "Standard",
    price: "$40 / month",
    highlight: true,
    features: [
      "Full gym access",
      "Group classes",
      "Locker facility",
      "Basic trainer support",
    ],
  },
  {
    name: "Premium",
    price: "$60 / month",
    features: [
      "All Standard features",
      "Personal trainer",
      "Nutrition guidance",
      "Priority support",
    ],
  },
];

function Plans() {
  return (
    <section
      id="plans"
      className="py-20 bg-[var(--color-lightBg)] text-[var(--color-darkBg)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">

        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Membership Plans
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {plans.map((plan) => (

            // Card component
            <Card
              key={plan.name}
              className={`p-8 flex flex-col h-full ${
                plan.highlight
                  ? "bg-[var(--color-primary-soft)] scale-105"
                  : ""
              }`}
            >
             
              <div>
                <h3 className="mb-2 font-semibold">{plan.name}</h3>

                <p className="mb-4 text-xl font-bold">{plan.price}</p>

                <ul className="mb-6 text-sm space-y-2 text-left list-disc pl-5">
                  {plan.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`mt-auto block px-4 py-2 rounded-lg text-center transition-transform hover:scale-105 ${
                  plan.highlight
                    ? "bg-[var(--color-primary)] text-black"
                    : "border border-[var(--color-primary)]"
                }`}
              >
                Join Now
              </a>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Plans;