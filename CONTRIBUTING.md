# Guía de Contribución

## Flujo
1. Crea una rama desde `main`: `feat/nombre`, `fix/bug-123`, etc.
2. Instala dependencias: `npm ci`.
3. Ejecuta y mantén en verde:
   - `npm test` (unitarias)
   - `npm run test:int` (integración)
4. Abre un Pull Request a `main`:
   - Explica cambios y pruebas realizadas.
   - Añade capturas si afectan UI.
5. Espera CI verde. Se requieren revisiones antes del merge.

## Convenciones
- Commits claros (imperativo): `"fix: corrige suma en main.js"`.
- Código ESM (`import/export`), sin `require()`.
- No subas `node_modules`, `dist`, `coverage`, reportes de Playwright.
