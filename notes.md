# Notas de react con expo

## app.json

En el app.json se maneja el nombre de la aplicación, la descripción, la versión, el autor, la licencia, el repositorio, las dependencias y los scripts.

```json
{
  "expo": {
    "name": "counter-app",
    "slug": "counter-app",
    "version": "1.0.0",
    "orientation": "portrait", // orientación de la aplicación
    "icon": "./assets/icon.png", // icono de la aplicación
    "userInterfaceStyle": "light",
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/splash-icon.png", //imagen de carga de la aplicación
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    }
  }
}
```

## Snippets

- `rnf` crea un componente funcional

## Estructura de carpetas recomendada

- assets
- components
- constants
- hooks
- navigation
- screens
- services
- utils
