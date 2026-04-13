const ChatBot = () => {
  return (
    <aside className="h-[70vh] min-h-[520px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl lg:h-full">
      <header className="flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-4">
        <h2 className="text-lg font-semibold text-white">AI Assistant</h2>
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
          Online
        </span>
      </header>

      <div className="h-[calc(100%-73px)] w-full overflow-hidden">
        <iframe
          src="https://copilotstudio.microsoft.com/environments/aa332dbd-0e82-ed44-bfa3-f2516084255a/bots/auto_agent_pzrmV/webchat?__version__=2"
          title="AI Assistant Chat"
          className="h-full w-full border-0"
        />
      </div>
    </aside>
  );
};

export default ChatBot;