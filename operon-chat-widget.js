(() => {
  const VAPI_PUBLIC_KEY = "c36946f6-b963-4a3d-ae7d-9e9fde92ab24";
  const ASSISTANT_ID = "5eff3889-6f97-4f77-9c23-a61507346a11";
  let previousChatId = null;

  // Styles
  const style = document.createElement("style");
  style.textContent = `
#operon-chat-launcher{
  position:fixed; right:24px; bottom:24px; z-index:2147483647;
  width:56px; height:56px; border-radius:999px; border:none;
  background:#111; color:#fff; font-size:14px; cursor:pointer;
}
#operon-chat {
  position:fixed; right:24px; bottom:92px; z-index:2147483647;
  width:360px; max-width:calc(100vw - 48px); height:520px; max-height:calc(100vh - 140px);
  background:#0b0b0b; color:#fff; border:1px solid rgba(255,255,255,.12);
  border-radius:16px; overflow:hidden; display:none;
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
}
#operon-chat header{
  display:flex; justify-content:space-between; align-items:center;
  padding:12px 12px; background:#111; border-bottom:1px solid rgba(255,255,255,.12);
}
#operon-chat header button{ background:transparent; border:none; color:#fff; cursor:pointer; font-size:18px; }
#operon-chat .msgs{ padding:12px; height:410px; overflow:auto; display:flex; flex-direction:column; gap:10px;}
#operon-chat .msg{ padding:10px 12px; border-radius:12px; max-width:85%; white-space:pre-wrap; }
#operon-chat .user{ align-self:flex-end; background:#2563eb; }
#operon-chat .bot{ align-self:flex-start; background:#1f2937; }
#operon-chat form{ display:flex; gap:8px; padding:12px; border-top:1px solid rgba(255,255,255,.12); background:#0b0b0b; }
#operon-chat input{
  flex:1; padding:10px 12px; border-radius:10px; border:1px solid rgba(255,255,255,.12);
  background:#0f172a; color:#fff; outline:none;
}
#operon-chat form button{
  padding:10px 12px; border-radius:10px; border:none; background:#22c55e; color:#0b0b0b; cursor:pointer;
  font-weight:600;
}`;
  document.head.appendChild(style);

  // UI
  const launcher = document.createElement("button");
  launcher.id = "operon-chat-launcher";
  launcher.type = "button";
  launcher.textContent = "Chat";
  launcher.setAttribute("aria-label", "Chat");

  const chat = document.createElement("div");
  chat.id = "operon-chat";
  chat.setAttribute("role", "dialog");
  chat.setAttribute("aria-label", "Operon chat");
  chat.innerHTML = `
  <header>
    <div>Operon Labs</div>
    <button id="operon-chat-close" aria-label="Close">×</button>
  </header>
  <div class="msgs" id="operon-chat-msgs"></div>
  <form id="operon-chat-form">
    <input id="operon-chat-input" placeholder="Type a message…" autocomplete="off" />
    <button type="submit">Send</button>
  </form>
`;

  document.body.appendChild(launcher);
  document.body.appendChild(chat);

  const closeBtn = chat.querySelector("#operon-chat-close");
  const form = chat.querySelector("#operon-chat-form");
  const input = chat.querySelector("#operon-chat-input");
  const msgs = chat.querySelector("#operon-chat-msgs");

  const addMsg = (text, who) => {
    const div = document.createElement("div");
    div.className = "msg " + who;
    div.textContent = text;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  };

  launcher.onclick = () => {
    chat.style.display = "block";
    if (msgs.children.length === 0) addMsg("Hi! How can we help?", "bot");
    input.focus();
  };

  closeBtn.onclick = () => (chat.style.display = "none");

  form.onsubmit = async (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    addMsg(text, "user");

    const body = { assistantId: ASSISTANT_ID, input: text };
    if (previousChatId) body.previousChatId = previousChatId;

    try {
      const resp = await fetch("https://api.vapi.ai/chat", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + VAPI_PUBLIC_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!resp.ok) {
        addMsg("Sorry — chat is unavailable right now.", "bot");
        return;
      }

      const data = await resp.json();
      previousChatId = data.id;

      const out = (data.output || [])
        .map((m) => m.content)
        .filter(Boolean)
        .join("\n");

      addMsg(out || "(No response)", "bot");
    } catch (err) {
      addMsg("Sorry — chat is unavailable right now.", "bot");
    }
  };
})();
