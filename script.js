// DeTapeo landing — tiny JS for year + optional AJAX submit
(function(){
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById("waitlistForm");
  const statusEl = document.getElementById("formStatus");
  if (!form || !statusEl) return;

  // If you keep the default Formspree placeholder, show a helpful message in dev.
  const action = form.getAttribute("action") || "";
  const looksPlaceholder = action.includes("REEMPLAZA_ESTE_ID");

  if (looksPlaceholder) {
    statusEl.className = "status bad";
    statusEl.textContent = "⚠️ Falta configurar el endpoint del formulario. Abre README y cambia el action.";
    return;
  }

  // Progressive enhancement: try AJAX submit; fallback is normal submit.
  form.addEventListener("submit", async (e) => {
    // If the browser doesn't support fetch, let it submit normally.
    if (!window.fetch) return;

    e.preventDefault();
    statusEl.className = "status";
    statusEl.textContent = "Enviando…";

    try {
      const formData = new FormData(form);
      const res = await fetch(action, {
        method: form.method || "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });

      if (res.ok) {
        form.reset();
        statusEl.className = "status ok";
        statusEl.textContent = "✅ Dentro. Te avisamos cuando salga (y cuando haya guerra de croquetas).";
      } else {
        statusEl.className = "status bad";
        statusEl.textContent = "❌ No se pudo enviar. Prueba otra vez o revisa el endpoint del formulario.";
      }
    } catch (err) {
      statusEl.className = "status bad";
      statusEl.textContent = "❌ Error de red. Revisa tu conexión y vuelve a intentarlo.";
    }
  });
})();
