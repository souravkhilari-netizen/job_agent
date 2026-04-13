const featureCards = [
  {
    icon: "briefcase",
    title: "Job Search",
    description:
      "Type 'job search' in the chat and the agent will collect your preferences and show real-time job opportunities.",
  },
  {
    icon: "target",
    title: "Interview Preparation",
    description:
      "Type 'interview prep' and follow guided steps to practice questions, get feedback, and improve your answers.",
  },
  {
    icon: "sparkles",
    title: "Q&A Support",
    description:
      "Ask any question related to Power Apps or technical topics and get answers based on Microsoft documentation.",
  },
];

const FeatureIcon = ({ type }) => {
  if (type === "briefcase") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 4h6a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v4.25a2 2 0 0 1-1.4 1.91l-5.6 1.74v.35a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.35L2.4 16.16A2 2 0 0 1 1 14.25V10a2 2 0 0 1 2-2h2V6a2 2 0 0 1 2-2Zm6 4V6H9v2h6Z" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 1 0 10 10h-2a8 8 0 1 1-8-8V2Zm8 0v5h-2V5.41l-5.29 5.3-1.42-1.42L16.59 4H15V2h5Zm-8 5a5 5 0 1 0 5 5h-2a3 3 0 1 1-3-3V7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.75a.75.75 0 0 1 .73.58l1.03 4.45a2.25 2.25 0 0 0 1.69 1.69l4.45 1.03a.75.75 0 0 1 0 1.46l-4.45 1.03a2.25 2.25 0 0 0-1.69 1.69l-1.03 4.45a.75.75 0 0 1-1.46 0l-1.03-4.45a2.25 2.25 0 0 0-1.69-1.69L4.1 11.96a.75.75 0 0 1 0-1.46l4.45-1.03a2.25 2.25 0 0 0 1.69-1.69l1.03-4.45a.75.75 0 0 1 .73-.58Z" />
    </svg>
  );
};

const HowItWorksSection = () => {
  return (
    <section className="section" aria-labelledby="how-it-works-title">
      <div className="section__header">
        <h2 id="how-it-works-title">How It Works</h2>
        <p>Simple guided prompts to help you achieve your career goals.</p>
      </div>

      <div className="features-grid">
        {featureCards.map((card) => (
          <article className="feature-card" key={card.title}>
            <span className="feature-card__icon" aria-hidden="true">
              <FeatureIcon type={card.icon} />
            </span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
