import { useState } from "react";

function AiTutorAvatar() {
  return (
    <span
      className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 via-cyan-600 to-fuchsia-600 shadow-lg shadow-cyan-500/30 ring-2 ring-white/20"
      role="img"
      aria-label="AI tutor"
    >
      <svg
        className="h-[18px] w-[18px] text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    </span>
  );
}

function LearnerAvatar() {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-500/25 bg-slate-800/90 shadow-inner ring-1 ring-white/10"
      role="img"
      aria-label="You"
    >
      <svg
        className="h-[18px] w-[18px] text-cyan-200/90"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    </span>
  );
}

export default function AIChat() {
  const [messages, setMessages] = useState([
    { id: 1, role: "ai", text: "Hi! Ask me anything about your expressions." },
    { id: 2, role: "user", text: "Can you explain this phrase naturally?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: "user",
        text: input.trim(),
      },
    ]);

    setInput("");
  };

  const lastAiIndex = messages.reduce(
    (idx, m, i) => (m.role === "ai" ? i : idx),
    -1
  );
  const lastUserIndex = messages.reduce(
    (idx, m, i) => (m.role === "user" ? i : idx),
    -1
  );

  return (
    <div className="flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/70 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-2xl">
      <div className="flex shrink-0 items-center justify-between border-b border-white/10 px-5 py-4">
        <div>
          <h2 className="text-lg font-bold text-white">AI Chat</h2>
          <p className="text-xs text-cyan-300">Online</p>
        </div>

        <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
      </div>

      <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-4 py-5">
        {messages.map((message, index) => {
          const showAvatar =
            message.role === "ai"
              ? index === lastAiIndex
              : index === lastUserIndex;

          return (
            <div
              key={message.id}
              className={`flex items-end gap-2.5 ${
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {showAvatar ? (
                message.role === "ai" ? (
                  <AiTutorAvatar />
                ) : (
                  <LearnerAvatar />
                )
              ) : (
                <span
                  className="h-9 w-9 shrink-0"
                  aria-hidden
                />
              )}
              <div
                className={`min-w-0 max-w-[calc(100%-2.75rem)] rounded-2xl px-4 py-3 text-sm leading-relaxed sm:max-w-[min(80%,28rem)] ${
                  message.role === "user"
                    ? "border border-cyan-400/30 bg-cyan-500/20 text-cyan-50"
                    : "border border-white/10 bg-white/10 text-slate-100"
                }`}
              >
                {message.text}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex shrink-0 gap-3 border-t border-white/10 p-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
        />

        <button
          onClick={handleSend}
          className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.45)] hover:bg-cyan-300 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}