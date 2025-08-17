# Práctica 3 – CI/CD con GitHub Actions y GitHub Pages

[![CI](https://github.com/andymariano551-cloud/Pr-ctica-3/actions/workflows/ci.yml/badge.svg)](https://github.com/andymariano551-cloud/Pr-ctica-3/actions/workflows/ci.yml)

Aplicación web estática + Node.js con **pipeline de CI/CD** en GitHub Actions:
- Build de artefacto estático (`dist/`)
- Pruebas unitarias (Jest) y de integración (Playwright)
- Cobertura de código (c8)
- Despliegue automático a **GitHub Pages**

## Enlaces
- **Repositorio**: https://github.com/andymariano551-cloud/Pr-ctica-3
- **Sitio (GitHub Pages)**: https://andymariano551-cloud.github.io/Pr-ctica-3/

> Si cambiaste el nombre del workflow o del archivo (`.github/workflows/ci.yml`), ajusta el badge de arriba.

---

## Requisitos
- Node.js 20+
- Git y cuenta de GitHub
- (Opcional) GitHub CLI `gh`

## Estructura
```
src/         # código fuente (ESM)
public/      # HTML estático
tests/       # pruebas de integración (Playwright)
.github/workflows/ci.yml  # pipeline de GitHub Actions
```
Archivos principales que te interesan para la entrega:
- `README.md` (este archivo)
- `docs/PIPELINE.md` (documentación del pipeline)
- `DEPLOYMENT.md` (instrucciones de despliegue)
- `CONTRIBUTING.md` (guía de contribución)
- `Informe_de_Implementacion.md` (evidencia y explicación de lo realizado)

## Scripts
```bash
npm run build       # construye dist/
npm run start:dist  # sirve dist/ en http://localhost:8080
npm test            # unit tests (Jest)
npm run test:int    # integración (Playwright)
npm run coverage    # cobertura con c8
```

## Ejecutar localmente
```bash
npm run build
npm run start:dist
# abrir http://localhost:8080
```

## Pruebas
- **Unitarias (Jest)**: están en `src/**/*.test.js`.
- **Integración (Playwright)**: están en `tests/`. Se ejecutan aparte.
  ```bash
  npx playwright install
  npm run test:int
  ```
- **Cobertura**:
  ```bash
  npm run coverage
  ```

## CI/CD (resumen)
- En **pull request** y **push a main**: build + tests + cobertura.
- En **push a main**: además **deploy** a GitHub Pages (artifact `dist/`).  
  Detalle completo en [`docs/PIPELINE.md`](docs/PIPELINE.md).

## Licencia
ISC
