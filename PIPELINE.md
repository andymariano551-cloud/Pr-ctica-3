# Documentación del Pipeline

Este pipeline compila, prueba y despliega la aplicación a **GitHub Pages**.

## Disparadores
- `push` a `main`
- `pull_request` hacia `main`

## Jobs
### build-and-test
1. **Checkout** del repo.
2. **Setup Node 20** (con cache de `npm`).
3. **Instalación** de dependencias (`npm ci`).
4. **Unit tests + coverage** con Jest/c8.
5. **Build** del sitio estático (`dist/`).
6. **Servidor temporal** de `dist` para pruebas de integración.
7. **Instalación de Playwright** (navegadores).
8. **Pruebas de integración** (Playwright).
9. **Artifacts**:
   - `coverage/` (subido con `actions/upload-artifact`)
   - `dist/` (subido con `actions/upload-pages-artifact`)

### deploy
- Requiere que el job anterior pase.
- Usa `actions/deploy-pages@v4` para publicar `dist/` en **GitHub Pages**.
- Permisos requeridos en el workflow:
  - `pages: write`
  - `id-token: write`

## Artefactos
- **coverage**: reporte de cobertura (incluye `lcov.info`).
- **pages**: artefacto para GitHub Pages (contenido de `dist/`).

## Caching
- `actions/setup-node@v4` con `cache: npm`.

## Logs útiles
- **build-and-test**: mira los pasos *Unit tests + coverage*, *Integration tests*, *Upload Pages artifact*.
- **deploy**: imprime la **URL** de GitHub Pages como output del step `deployment` (environment `github-pages`).

## Troubleshooting
- **Falla Jest con ESM**: ejecutar Jest mediante `node --experimental-vm-modules` y asegurarse de que `jest` ignore `/tests/` y `/dist/`.
- **Playwright no arranca**: instalar navegadores con `npx playwright install --with-deps` (ya se hace en el workflow).
- **Deploy no publica**: verifica permisos en `permissions:` y que el step `Upload Pages artifact` apunte a `dist/`.
- **404 en Pages**: confirma que `Settings → Pages → Build and deployment` está en **GitHub Actions** y que el job `deploy` terminó en verde.
