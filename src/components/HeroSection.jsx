const HeroSection = ({ onStartChatting }) => {
  return (
    <header className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Smart Career Support</p>
        <h1>AI Career Assistant</h1>
        <p className="hero__subtitle">
          Your smart companion for job search, interview preparation, and
          learning Power Apps
        </p>
        <button className="hero__cta" onClick={onStartChatting} type="button">
          Start Chatting
        </button>
      </div>
    </header>
  );
};

export default HeroSection;
