# IA generativa como motor para diseñar

Landing del curso **IA generativa como motor para diseñar** · FADEU · Pontificia Universidad Católica de Chile · Segundo semestre 2026.

Construido con [Astro](https://astro.build).

## Desarrollo local

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `npm install`       | Instala las dependencias                     |
| `npm run dev`       | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`     | Genera el sitio en `./dist/`                 |
| `npm run preview`   | Previsualiza el build localmente             |

## Despliegue en GitHub Pages

1. Reemplaza `<tu-usuario>` en `astro.config.mjs` por tu usuario de GitHub.
2. Si el repositorio en GitHub tiene otro nombre que no sea `landing`, actualiza también `base: '/landing/'`.
3. Crea un repositorio en GitHub y sube este proyecto:
   ```sh
   git remote add origin https://github.com/<tu-usuario>/landing.git
   git branch -M main
   git push -u origin main
   ```
4. En GitHub, ve a **Settings → Pages** y selecciona la fuente **GitHub Actions**.
5. Cada push a `main` activará el workflow y desplegará automáticamente el sitio.

La URL resultante será: `https://<tu-usuario>.github.io/landing/`.
