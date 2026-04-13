import { useState } from "react";

const ChatBot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "15px 20px",
          borderRadius: "50%",
          backgroundColor: "#0078ff",
          color: "white",
          border: "none",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "350px",
            height: "500px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            borderRadius: "10px",
            overflow: "hidden",
            background: "white"
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#0078ff",
              color: "white",
              padding: "10px",
              fontWeight: "bold"
            }}
          >
            My Copilot Assistant
          </div>

          {/* Iframe Chat */}
          <iframe
            src="https://copilotstudio.microsoft.com/environments/aa332dbd-0e82-ed44-bfa3-f2516084255a/bots/auto_agent_pzrmV/webchat?__version__=2"
            style={{
              width: "100%",
              height: "100%",
              border: "none"
            }}
          />
        </div>
      )}
    </>
  );
};

export default ChatBot;