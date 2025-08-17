# Práctica 3 – CI/CD con GitHub Actions y GitHub Pages

<<<<<<< HEAD
[![CI](https://github.com/andymariano551-cloud/Pr-ctica-3/actions/workflows/ci.yml/badge.svg)](https://github.com/andymariano551-cloud/Pr-ctica-3/actions/workflows/ci.yml)

Aplicación web estática + Node.js con **pipeline de CI/CD** en GitHub Actions:
- Build de artefacto estático (`dist/`)
- Pruebas unitarias (Jest) y de integración (Playwright)
- Cobertura de código (c8)
- Despliegue automático a **GitHub Pages**
---
## Estructura
```
src/         # código fuente (ESM)
public/      # HTML estático
tests/       # pruebas de integración (Playwright)
.github/workflows/ci.yml  # pipeline de GitHub Actions
```
=======
>>>>>>> a561fb7 (ci: add package-lock.json y docs)
## Scripts
- `npm run build` – construye `dist/`
- `npm start:dist` – sirve `dist` en http://localhost:8080
- `npm test` – pruebas unitarias (Jest)
- `npm run test:int` – pruebas de integración (Playwright)
- `npm run coverage` – cobertura (c8)

<<<<<<< HEAD
=======
## CI/CD
Al hacer push a `main`:
1) Build + tests + coverage
2) Deploy a GitHub Pages
>>>>>>> a561fb7 (ci: add package-lock.json y docs)
