# DeTapeo Landing — Waitlist (v2)

Landing estática (HTML/CSS/JS) para tener un **link único** en X mientras la app está en desarrollo.

## Qué incluye
- Mensaje “producto primero” + tono DeTapeo
- Formulario de waitlist (email) + opción beta
- Página de privacidad (`privacy.html`)
- Estilos modernos, ligeros y responsive

---

## 1) Configurar el formulario (lo mínimo para capturar emails)

En `index.html`, busca esto:

```html
<form id="waitlistForm" ... action="https://formspree.io/f/REEMPLAZA_ESTE_ID">
```

### Opción A — Formspree (rápido)
1. Crea una cuenta en Formspree.
2. Crea un formulario nuevo.
3. Copia tu endpoint (ejemplo): `https://formspree.io/f/abcdwxyz`
4. Reemplaza `REEMPLAZA_ESTE_ID` por tu endpoint real.

✅ Listo.

> Si no lo cambias, la web te avisará con un mensaje en rojo.

### Opción B — Google Forms / Sheets (sin Formspree)
Si quieres, puedes:
- enlazar el botón directamente a un Google Form, o
- usar Google Apps Script como endpoint (más pro).

Si me lo pides, te preparo la versión Google Sheets + Apps Script.

---

## 2) Publicarlo gratis con GitHub Pages

1. Crea un repo en GitHub (ej. `detapeo-landing`).
2. Sube estos archivos a la raíz del repo.
3. En GitHub:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / folder: `/root`
4. Te dará una URL tipo:
   `https://TUUSUARIO.github.io/detapeo-landing/`

Ese es tu link único para X.

---

## 3) Cambios rápidos recomendados
- Cambia el enlace “X” del footer por tu perfil real.
- Si tienes dominio, añade tu OG image y URL.
- Ajusta los textos (productos estrella, ciudad inicial, etc.).

---

## 4) Sugerencia de “tuit fijado”
> Menos “bar famoso”, más “pincho glorioso”. 🍢  
> Estamos construyendo DeTapeo: rankings por producto con votos y fotos reales.  
> Únete a la lista: (tu link)

