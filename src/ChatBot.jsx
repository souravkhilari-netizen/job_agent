import React, { useEffect, useRef } from "react";
import ReactWebChat from "botframework-webchat";

const ChatBot = () => {
  const webchatRef = useRef(null);

  useEffect(() => {
    const styleOptions = {
      botAvatarInitials: "AI",
      userAvatarInitials: "You"
    };

    window.WebChat.renderWebChat(
      {
        directLine: window.WebChat.createDirectLine({
          token: "https://aa332dbd0e82ed44bfa3f251608425.5a.environment.api.powerplatform.com/copilotstudio/dataverse-backed/authenticated/bots/auto_agent_pzrmV/conversations?api-version=2022-03-01-preview"
        }),
        styleOptions
      },
      webchatRef.current
    );
  }, []);

  return (
    <div
      ref={webchatRef}
      style={{ height: "500px", width: "100%" }}
    />
  );
};

export default ChatBot;