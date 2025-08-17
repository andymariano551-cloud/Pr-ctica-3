# Informe de Implementación

## Resumen
Se implementó un pipeline de CI/CD en GitHub Actions para una app web estática con Node.js. El pipeline construye, ejecuta pruebas (unitarias e integración), genera cobertura y despliega automáticamente a GitHub Pages.

- Repositorio: https://github.com/andymariano551-cloud/Pr-ctica-3
- Sitio (Pages): https://andymariano551-cloud.github.io/Pr-ctica-3/

## Alcance y decisiones
- **Estructura** minimalista: `src/`, `public/`, `tests/`.
- **Pruebas**:
  - Unitarias con Jest (`src/**/*.test.js`).
  - Integración con Playwright (`tests/`), ejecutadas con servidor de `dist`.
- **Cobertura** con `c8` y reporter `lcov` para uso futuro con servicios de badges.
- **Despliegue** mediante `actions/deploy-pages@v4`, con artifacts preparados en el job previo.

## Detalle del pipeline
- Ver `docs/PIPELINE.md` para descripción completa de jobs, permisos y artifacts.

## Evidencias sugeridas (para anexar)
- Captura del workflow **en verde** (build-and-test y deploy).
- Captura de **coverage** (resumen de terminal o reporte HTML).
- URL pública de **GitHub Pages** funcionando.

## Trabajo futuro
- Agregar pruebas de UI más ricas con Playwright.
- Integrar un linter (`eslint`) y formateo (`prettier`) en CI.
- Añadir badge de cobertura (ej. vía Coveralls/Codacy).
