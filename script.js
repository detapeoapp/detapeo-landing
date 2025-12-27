// DeTapeo Landing (v3)
// - year
// - CTA intent (beta)
// - optional AJAX submit with friendly status

(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // If user clicks the "beta" CTA, pre-check beta checkbox when arriving to the form.
  const betaLinks = document.querySelectorAll('[data-intent="beta"]');
  betaLinks.forEach((a) => {
    a.addEventListener("click", () => {
      // Give the browser a moment to scroll to #waitlist first.
      setTimeout(() => {
        const beta = document.getElementById("betaOptIn");
        if (beta) beta.checked = true;
      }, 250);
    });
  });

  const form = document.getElementById("waitlistForm");
  const statusEl = document.getElementById("formStatus");
  if (!form || !statusEl) return;

  const submitBtn = form.querySelector('button[type="submit"]');

  const action = form.getAttribute("action") || "";
  const looksPlaceholder = action.includes("REEMPLAZA_ESTE_ID");

  if (looksPlaceholder) {
    statusEl.className = "status bad";
    statusEl.textContent =
      "⚠️ Falta configurar el endpoint del formulario. Abre README y cambia el action.";
    return;
  }

  // Progressive enhancement: try AJAX submit (keeps user on the page).
  // If fetch isn't supported, the form will submit normally.
  form.addEventListener("submit", async (e) => {
    if (!window.fetch) return;

    e.preventDefault();
    statusEl.className = "status";
    statusEl.textContent = "Enviando…";
    if (submitBtn) submitBtn.disabled = true;

    try {
      const formData = new FormData(form);

      const res = await fetch(action, {
        method: form.method || "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        statusEl.className = "status ok";
        statusEl.textContent =
          "✅ Dentro. Te avisamos cuando salga (y cuando haya guerra de tortilla).";
      } else {
        statusEl.className = "status bad";
        statusEl.textContent =
          "❌ No se pudo enviar. Revisa el endpoint del formulario o prueba otra vez.";
      }
    } catch (err) {
      statusEl.className = "status bad";
      statusEl.textContent =
        "❌ Error de red. Revisa tu conexión y vuelve a intentarlo.";
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
})();
