# Práctica 3 – CI/CD con GitHub Actions y GitHub Pages

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
## Scripts
```bash
npm run build       # construye dist/
npm run start:dist  # sirve dist/ en http://localhost:8080
npm test            # unit tests (Jest)
npm run test:int    # integración (Playwright)
npm run coverage    # cobertura con c8
```

