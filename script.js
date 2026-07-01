document.addEventListener("click", (event) => {
  const btn = event.target.closest(".copy-btn");
  if (!btn) return;

  const targetId = btn.dataset.copyTarget;
  const target = targetId && document.getElementById(targetId);
  if (!target) return;

  const text = target.innerText.trim();

  const done = () => {
    const original = btn.dataset.originalLabel || btn.textContent;
    btn.dataset.originalLabel = original;
    btn.textContent = "コピーしました";
    btn.classList.add("copied");
    window.clearTimeout(btn._resetTimer);
    btn._resetTimer = window.setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove("copied");
    }, 1500);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(done, fallbackCopy);
  } else {
    fallbackCopy();
  }

  function fallbackCopy() {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "-1000px";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      done();
    } catch (e) {
      // silently ignore; user can select the text manually
    }
    document.body.removeChild(ta);
  }
});
