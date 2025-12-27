# DeTapeo Landing — Waitlist (v3)

Landing estática (HTML/CSS/JS) para tener un **link único** en X mientras la app está en desarrollo.

✅ Mensaje **producto primero**  
✅ Formulario de **waitlist** (email) + checkbox **beta**  
✅ Página de **privacidad** incluida  
✅ Diseño limpio y profesional (sin recargar)

---

## 1) Configurar el formulario (para capturar emails)

En `index.html`, busca esto:

```html
<form id="waitlistForm" class="form" method="POST" action="https://formspree.io/f/REEMPLAZA_ESTE_ID">
```

### Opción A — Formspree (rápido)
1. Crea una cuenta en Formspree.
2. Crea un formulario nuevo.
3. Copia tu endpoint (ejemplo): `https://formspree.io/f/abcdwxyz`
4. Reemplaza `REEMPLAZA_ESTE_ID` por tu endpoint real.

✅ Listo.

> Si no lo cambias, la web mostrará un aviso en rojo.

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

## 3) Cambios recomendados (2 minutos)

- En el header y footer ya está el link a X: **@DeTapeoApp**
- Si quieres cambiar el texto “Próximamente”, edita la hero card en `index.html`.
- En `privacy.html` está tu política de privacidad.

---

## 4) Assets incluidos

- `assets/detapeo-icon-256.png` y `assets/detapeo-icon-512.png` (logo de la app)
- `assets/celsoria-apps.png` (logo pequeño del desarrollador, usado en el footer)
- `assets/og.png` (imagen para compartir en X/WhatsApp; si quieres lo ideal es poner la URL absoluta en las metas OG)

---

## 5) Sugerencia de tuit fijado

> Menos “bar famoso”, más “pincho glorioso”. 🍢  
> Estamos construyendo DeTapeo: rankings por producto con votos y fotos reales.  
> Únete a la lista: (tu link)
