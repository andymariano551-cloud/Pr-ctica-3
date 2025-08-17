# Instrucciones de Despliegue

## Producción (GitHub Pages)
1. En el repositorio: **Settings → Pages → Build and deployment** → selecciona **GitHub Actions**.
2. Haz `git push` a `main`.
3. Revisa **Actions**: pipeline en verde.
4. El sitio quedará publicado en:  
   https://andymariano551-cloud.github.io/Pr-ctica-3/

## Local
```bash
npm run build
npm run start:dist
# abrir http://localhost:8080
```

## Notas
- Si usas otra rama distinta a `main`, ajusta los triggers del workflow y el environment.
