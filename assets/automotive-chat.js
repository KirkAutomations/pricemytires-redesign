(() => {
  "use strict";
  if (window.__KIRK_AUTOMOTIVE_CHAT__) return;
  window.__KIRK_AUTOMOTIVE_CHAT__ = true;

  const supplied = window.KIRK_CHAT_CONFIG || {};
  const local = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  const config = {
    tenant: supplied.tenant || "bazzi",
    brand: supplied.brand || "Automotive Concierge",
    accent: supplied.accent || "#aa2028",
    phone: supplied.phone || "",
    phoneHref: supplied.phoneHref || "#",
    endpoint: supplied.endpoint || (local ? "http://127.0.0.1:8787/api/chat" : "https://chat.kirkautomations.com/api/chat"),
    greeting: supplied.greeting || "What can I help you with today?",
    prompts: supplied.prompts || ["What are your hours?", "Help me find tires", "What services do you offer?"]
  };

  const style = document.createElement("style");
  style.dataset.kirkAutomotiveChat = "true";
  style.textContent = `
    .kac-root{--kac-accent:${config.accent};position:fixed;left:18px;bottom:18px;z-index:8500;font-family:Inter,Manrope,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#16191d;line-height:1.45}
    .kac-launch{width:58px;height:58px;border:0;border-radius:50%;display:grid;place-items:center;background:var(--kac-accent);color:#fff;box-shadow:0 12px 34px rgba(0,0,0,.24);transition:transform .2s ease,box-shadow .2s ease}
    .kac-launch:hover{transform:translateY(-2px);box-shadow:0 16px 38px rgba(0,0,0,.3)}.kac-launch svg{width:27px;height:27px}.kac-launch[aria-expanded="true"] .kac-chat-icon,.kac-launch[aria-expanded="false"] .kac-close-icon{display:none}
    .kac-panel{position:absolute;left:0;bottom:70px;width:min(390px,calc(100vw - 28px));height:min(650px,calc(100dvh - 105px));display:grid;grid-template-rows:auto 1fr auto;background:#fff;border:1px solid rgba(17,24,39,.14);border-radius:16px;box-shadow:0 22px 70px rgba(0,0,0,.28);overflow:hidden;opacity:0;visibility:hidden;transform:translateY(12px) scale(.985);transform-origin:bottom left;transition:.2s ease}
    .kac-root.kac-open .kac-panel{opacity:1;visibility:visible;transform:none}
    .kac-head{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:16px 18px;background:#111827;color:#fff;border-top:3px solid var(--kac-accent)}
    .kac-head-copy{min-width:0}.kac-eyebrow{display:block;color:#aeb7c5;font-size:10px;font-weight:750;letter-spacing:.14em;text-transform:uppercase}.kac-title{display:block;margin-top:2px;font-size:16px;font-weight:750;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.kac-status{display:flex;align-items:center;gap:6px;margin-top:3px;color:#cdd4de;font-size:11px}.kac-status::before{content:"";width:7px;height:7px;border-radius:50%;background:#42c875;box-shadow:0 0 0 3px rgba(66,200,117,.14)}
    .kac-dismiss{border:0;background:transparent;color:#fff;width:34px;height:34px;display:grid;place-items:center;border-radius:50%}.kac-dismiss:hover{background:rgba(255,255,255,.1)}.kac-dismiss svg{width:18px}
    .kac-log{overflow-y:auto;overscroll-behavior:contain;padding:18px;background:linear-gradient(#f7f8fa,#fff);scrollbar-gutter:stable}
    .kac-message{max-width:88%;margin:0 0 12px;padding:11px 13px;border-radius:13px;font-size:14px;white-space:pre-wrap;overflow-wrap:anywhere;scroll-margin-top:10px}.kac-assistant{background:#fff;border:1px solid #dce1e7;border-bottom-left-radius:4px}.kac-user{margin-left:auto;background:var(--kac-accent);color:#fff;border-bottom-right-radius:4px}
    .kac-typing{display:flex;align-items:center;gap:4px;width:max-content}.kac-typing i{width:6px;height:6px;border-radius:50%;background:#788391;animation:kac-bounce 1.1s infinite}.kac-typing i:nth-child(2){animation-delay:.14s}.kac-typing i:nth-child(3){animation-delay:.28s}@keyframes kac-bounce{0%,60%,100%{transform:none;opacity:.45}30%{transform:translateY(-4px);opacity:1}}
    .kac-prompts{display:flex;gap:7px;flex-wrap:wrap;margin:2px 0 15px}.kac-prompt{border:1px solid color-mix(in srgb,var(--kac-accent) 40%,#cdd3da);border-radius:999px;background:#fff;color:#303741;padding:7px 10px;font:650 11px/1.2 inherit}.kac-prompt:hover{border-color:var(--kac-accent);color:var(--kac-accent)}
    .kac-actions{display:flex;gap:8px;flex-wrap:wrap;margin:2px 0 14px}.kac-action{display:inline-flex;align-items:center;justify-content:center;min-height:34px;padding:7px 10px;border:1px solid #d4dae1;border-radius:8px;color:#252b33!important;background:#fff;font-size:11px;font-weight:750;text-decoration:none!important}.kac-action:first-child{background:#111827;color:#fff!important;border-color:#111827}
    .kac-foot{padding:12px 14px 10px;border-top:1px solid #e2e6eb;background:#fff}.kac-form{display:grid;grid-template-columns:1fr 44px;gap:8px;align-items:end}.kac-input{width:100%;max-height:110px;resize:none;border:1px solid #cbd2da;border-radius:10px;padding:11px 12px;background:#fff;color:#16191d;font:14px/1.35 inherit;outline:0}.kac-input:focus{border-color:var(--kac-accent);box-shadow:0 0 0 3px color-mix(in srgb,var(--kac-accent) 16%,transparent)}.kac-send{width:44px;height:44px;border:0;border-radius:10px;background:var(--kac-accent);color:#fff;display:grid;place-items:center}.kac-send:disabled{opacity:.45}.kac-send svg{width:18px}.kac-disclaimer{margin-top:7px;color:#727d89;font-size:9.5px;line-height:1.35;text-align:center}
    @media(max-width:600px){.kac-root{left:10px;bottom:10px;transition:opacity .2s ease,transform .2s ease}.kac-root.kac-hero-hidden:not(.kac-open){opacity:0;pointer-events:none;transform:translateY(12px)}.kac-panel{position:fixed;inset:8px;width:auto;height:auto;max-height:none;border-radius:14px;transform:translateY(14px)}.kac-launch{width:54px;height:54px}.kac-log{padding:15px}.kac-message{max-width:92%}}
    @media(prefers-reduced-motion:reduce){.kac-panel,.kac-launch,.kac-typing i{transition:none;animation:none}}
  `;

  const root = document.createElement("div");
  root.className = "kac-root";
  root.innerHTML = `
    <button class="kac-launch" type="button" aria-label="Open ${escapeText(config.brand)} AI concierge" aria-expanded="false">
      <svg class="kac-chat-icon" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 10h.01M12 10h.01M16 10h.01" stroke-linecap="round" stroke-width="3"/></svg>
      <svg class="kac-close-icon" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg>
    </button>
    <section class="kac-panel" role="dialog" aria-label="${escapeText(config.brand)} AI concierge" aria-modal="false">
      <header class="kac-head"><div class="kac-head-copy"><span class="kac-eyebrow">AI concierge</span><strong class="kac-title">${escapeText(config.brand)}</strong><span class="kac-status">Ready to help</span></div><button class="kac-dismiss" type="button" aria-label="Close chat"><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg></button></header>
      <div class="kac-log" role="log" aria-live="polite" aria-relevant="additions"></div>
      <footer class="kac-foot"><form class="kac-form"><textarea class="kac-input" rows="1" maxlength="1500" aria-label="Message" placeholder="Ask about tires, service, hours…" required></textarea><button class="kac-send" type="submit" aria-label="Send message"><svg aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4zM22 2 11 13"/></svg></button></form><p class="kac-disclaimer">AI answers may be incomplete. Confirm pricing, inventory and fitment with the shop.</p></footer>
    </section>`;

  function escapeText(value) {
    return String(value).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  const log = root.querySelector(".kac-log");
  const form = root.querySelector(".kac-form");
  const input = root.querySelector(".kac-input");
  const send = root.querySelector(".kac-send");
  const launch = root.querySelector(".kac-launch");
  const dismiss = root.querySelector(".kac-dismiss");
  const storageKey = `kirk-chat-${config.tenant}`;
  const newSessionId = () => globalThis.crypto?.randomUUID?.() || `kac-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
  const sessionId = sessionStorage.getItem(`${storageKey}-session`) || newSessionId();
  sessionStorage.setItem(`${storageKey}-session`, sessionId);
  let messages = [];
  let busy = false;

  function addMessage(role, text) {
    const node = document.createElement("div");
    node.className = `kac-message ${role === "user" ? "kac-user" : "kac-assistant"}`;
    node.textContent = text;
    log.append(node);
    log.scrollTop = log.scrollHeight;
    return node;
  }

  function addPrompts() {
    const wrap = document.createElement("div");
    wrap.className = "kac-prompts";
    config.prompts.forEach(text => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "kac-prompt";
      button.textContent = text;
      button.addEventListener("click", () => { wrap.remove(); submit(text); });
      wrap.append(button);
    });
    log.append(wrap);
  }

  function addActions(actions) {
    const wrap = document.createElement("div");
    wrap.className = "kac-actions";
    const items = [[actions?.tires || "#", "Find tires"], [actions?.service || "#", "Service form"], [actions?.call || config.phoneHref, `Call ${config.phone}`]];
    items.forEach(([href, label]) => {
      if (!href || href === "#") return;
      const link = document.createElement("a");
      link.className = "kac-action";
      link.href = href;
      link.textContent = label;
      wrap.append(link);
    });
    if (wrap.children.length) log.append(wrap);
    return wrap;
  }

  function typing() {
    const node = document.createElement("div");
    node.className = "kac-message kac-assistant kac-typing";
    node.setAttribute("aria-label", "Concierge is typing");
    node.innerHTML = "<i></i><i></i><i></i>";
    log.append(node);
    log.scrollTop = log.scrollHeight;
    return node;
  }

  async function submit(raw) {
    const text = String(raw || "").trim();
    if (!text || busy) return;
    busy = true;
    send.disabled = true;
    input.value = "";
    root.querySelector(".kac-prompts")?.remove();
    const userNode = addMessage("user", text);
    messages.push({ role: "user", content: text });
    const indicator = typing();
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch(config.endpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ tenant: config.tenant, sessionId, messages: messages.slice(-12) }),
        signal: controller.signal
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || "The concierge is unavailable.");
      indicator.remove();
      const answerNode = addMessage("assistant", data.answer);
      messages.push({ role: "assistant", content: data.answer });
      addActions(data.actions);
      requestAnimationFrame(() => userNode.scrollIntoView({ block: "start", behavior: "auto" }));
    } catch (error) {
      indicator.remove();
      const message = error.name === "AbortError" ? "The response took too long. Please try again or call the shop." : (error.message || "The concierge is unavailable.");
      addMessage("assistant", message);
    } finally {
      clearTimeout(timer);
      busy = false;
      send.disabled = false;
      input.focus();
    }
  }

  function setOpen(open) {
    root.classList.toggle("kac-open", open);
    launch.setAttribute("aria-expanded", String(open));
    if (open) setTimeout(() => input.focus(), 50);
  }

  launch.addEventListener("click", () => setOpen(!root.classList.contains("kac-open")));
  dismiss.addEventListener("click", () => setOpen(false));
  form.addEventListener("submit", event => { event.preventDefault(); submit(input.value); });
  input.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); form.requestSubmit(); }
  });
  input.addEventListener("input", () => { input.style.height = "auto"; input.style.height = `${Math.min(input.scrollHeight, 110)}px`; });
  document.addEventListener("keydown", event => { if (event.key === "Escape" && root.classList.contains("kac-open")) setOpen(false); });

  document.head.append(style);
  document.body.append(root);
  const hero = document.querySelector(".hero");
  if (hero && "IntersectionObserver" in window) {
    new IntersectionObserver(entries => {
      root.classList.toggle("kac-hero-hidden", entries[0]?.isIntersecting);
    }, { threshold: 0.02 }).observe(hero);
  }
  addMessage("assistant", config.greeting);
  addPrompts();
})();
