import "./App.css";
import ChatBot from "./ChatBot";

const featureCards = [
  {
    icon: "🔎",
    title: "Job Search",
    description:
      "Type 'job search' in the chat and the agent will collect your preferences and show real-time job opportunities.",
  },
  {
    icon: "🎯",
    title: "Interview Preparation",
    description:
      "Type 'interview prep' and follow guided steps to practice questions, get feedback, and improve your answers.",
  },
  {
    icon: "💡",
    title: "Q&A Support",
    description:
      "Ask any question related to Power Apps or technical topics and get answers based on Microsoft documentation.",
  },
];

function App() {
  const scrollToChat = () => {
    const chatSection = document.getElementById("chatbot-section");
    chatSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <p className="hero__eyebrow">Smart Career Support</p>
          <h1>AI Career Assistant</h1>
          <p className="hero__subtitle">
            Your smart companion for job search, interview preparation, and
            learning Power Apps
          </p>
          <button className="hero__cta" onClick={scrollToChat} type="button">
            Start Chatting
          </button>
        </div>
      </header>

      <main className="content">
        <section className="section">
          <div className="section__header">
            <h2>How It Works</h2>
            <p>Simple guided prompts to help you achieve your career goals.</p>
          </div>

          <div className="features-grid">
            {featureCards.map((card) => (
              <article className="feature-card" key={card.title}>
                <span className="feature-card__icon" aria-hidden="true">
                  {card.icon}
                </span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="chatbot-section" className="chatbot-section">
          <div className="chatbot-card">
            <h2>Chat with AI Assistant</h2>
            <p>
              Open the floating chat button at the bottom-right to start your
              conversation instantly.
            </p>
          </div>
        </section>
      </main>

      <ChatBot />
    </div>
  );
}

export default App;
