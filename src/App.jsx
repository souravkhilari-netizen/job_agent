import ChatBot from "./ChatBot";
import ChatbotInfoSection from "./components/ChatbotInfoSection";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 lg:h-screen lg:overflow-hidden">
      <main className="flex min-h-screen flex-col lg:h-screen lg:flex-row">
        <section className="order-1 w-full overflow-y-auto px-4 py-6 sm:px-6 lg:order-2 lg:h-screen lg:w-[62%] lg:px-10 lg:py-10">
        <ChatbotInfoSection />
        </section>

        <section className="order-2 w-full px-4 pb-6 sm:px-6 lg:order-1 lg:h-screen lg:w-[38%] lg:p-6">
          <div className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
            <ChatBot />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
