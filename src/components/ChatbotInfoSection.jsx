const ChatbotInfoSection = () => {
  const featureCards = [
    {
      title: "Job Search",
      description: "Find real-time jobs based on your preferences",
      icon: "briefcase",
    },
    {
      title: "Interview Preparation",
      description: "Practice interviews step-by-step with AI guidance",
      icon: "target",
    },
    {
      title: "Smart Q&A",
      description: "Get accurate answers from Microsoft documentation",
      icon: "spark",
    },
  ];

  const renderIcon = (icon) => {
    if (icon === "briefcase") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path
            fill="currentColor"
            d="M8 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2V4Zm2 2h4V4h-4v2Zm-5 6h14V9a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3Zm0 2v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3h-5v1a1 1 0 1 1-2 0v-1H5Z"
          />
        </svg>
      );
    }

    if (icon === "target") {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
          <path
            fill="currentColor"
            d="M12 2a1 1 0 0 1 1 1v1.06A8.002 8.002 0 0 1 19.94 11H21a1 1 0 1 1 0 2h-1.06A8.002 8.002 0 0 1 13 19.94V21a1 1 0 1 1-2 0v-1.06A8.002 8.002 0 0 1 4.06 13H3a1 1 0 1 1 0-2h1.06A8.002 8.002 0 0 1 11 4.06V3a1 1 0 0 1 1-1Zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm0 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
          />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M13.5 2a1 1 0 0 1 .95.68l1.2 3.56a1 1 0 0 0 .62.62l3.56 1.2a1 1 0 0 1 0 1.9l-3.56 1.2a1 1 0 0 0-.62.62l-1.2 3.56a1 1 0 0 1-1.9 0l-1.2-3.56a1 1 0 0 0-.62-.62l-3.56-1.2a1 1 0 0 1 0-1.9l3.56-1.2a1 1 0 0 0 .62-.62l1.2-3.56A1 1 0 0 1 13.5 2ZM6 14a1 1 0 0 1 .95.68l.46 1.36a1 1 0 0 0 .62.62l1.36.46a1 1 0 0 1 0 1.9l-1.36.46a1 1 0 0 0-.62.62l-.46 1.36a1 1 0 0 1-1.9 0l-.46-1.36a1 1 0 0 0-.62-.62l-1.36-.46a1 1 0 0 1 0-1.9l1.36-.46a1 1 0 0 0 .62-.62l.46-1.36A1 1 0 0 1 6 14Z"
        />
      </svg>
    );
  };

  return (
    <section className="mx-auto w-full max-w-4xl space-y-10">
      <div className="rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm sm:px-10">
        <p className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
          AI Career Support
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          AI Career Assistant
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Your smart companion for job search, interview preparation, and Power
          Apps learning.
        </p>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          This AI agent helps you find jobs, prepare for interviews, and answer
          technical questions instantly.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10">
        <h2 className="text-2xl font-semibold text-slate-900">How To Use</h2>
        <div className="mt-6 space-y-4 text-slate-700">
          <p>
            Type <strong>"job search"</strong> in chat - the agent collects
            your details and shows real-time job opportunities.
          </p>
          <p>
            Type <strong>"interview prep"</strong> - follow guided steps to
            practice interview questions and get feedback.
          </p>
          <p>
            Ask any question - the agent answers using Microsoft documentation,
            especially Power Apps topics.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10">
        <h2 className="text-2xl font-semibold text-slate-900">Features</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md"
            >
              <span className="inline-flex rounded-xl bg-blue-100 p-2 text-blue-700">
                {renderIcon(feature.icon)}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <footer className="pb-2 text-center text-sm font-medium text-slate-500">
        Powered by AI Copilot Agent
      </footer>
    </section>
  );
};

export default ChatbotInfoSection;
