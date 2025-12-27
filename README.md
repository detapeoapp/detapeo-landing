# DeTapeo Landing (Waitlist)

Esta es una landing estática (HTML/CSS/JS) para que puedas tener un **link único** en X con:
- mensaje producto-first
- formulario de waitlist (email)
- aviso de privacidad simple

## 1) Configurar el formulario (rápido)

### Opción A (recomendada): Formspree (1 minuto)
1. Crea una cuenta en Formspree.
2. Crea un formulario nuevo y copia tu endpoint (algo como `https://formspree.io/f/abcdwxyz`).
3. Abre `index.html` y reemplaza:

```html
action="https://formspree.io/f/REEMPLAZA_ESTE_ID"
```

por tu endpoint real, por ejemplo:

```html
action="https://formspree.io/f/abcdwxyz"
```

Listo: ya recoge emails.

> Si quieres separar waitlist y beta, puedes duplicar el formulario o crear otro endpoint.

### Opción B: Google Forms (cero cuentas extra)
- Crea un Google Form con:
  - Email (obligatorio)
  - Ciudad (opcional)
  - Producto favorito (opcional)
- Luego puedes:
  - enlazar directamente el Google Form desde el botón (menos bonito), o
  - embeberlo con iframe (no incluido aquí), o
  - usar Apps Script como endpoint (más pro).

Si quieres, te preparo la versión Google Forms/Sheets con Apps Script y CORS (sin Formspree).

## 2) Cambios rápidos de texto
- Cambia el copy en `index.html` (Hero, bullets y FAQ).
- Cambia el enlace a X en el footer.
- Cambia el email en `privacy.html`.

## 3) Publicarlo gratis (GitHub Pages)

1. Crea un repo en GitHub, por ejemplo `detapeo-landing`.
2. Sube estos archivos tal cual.
3. En GitHub:
   - Settings → Pages
   - Source: `Deploy from a branch`
   - Branch: `main` / `/root`
4. Guarda y te dará una URL tipo:
   `https://TUUSUARIO.github.io/detapeo-landing/`

Ese es tu link único para X.

## 4) (Opcional) Dominio propio
Puedes apuntar un dominio propio a GitHub Pages o usar Netlify/Vercel.

---

Si quieres que te lo deje “más DeTapeo”:
- dime 3 productos estrella (croquetas/tortilla/bravas…)
- y ciudad inicial (Salamanca / otra)
y te lo adapto en 2 minutos.
