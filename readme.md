# Notas de react con expo (24 de marzo de 2025)

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

---

## Snippets

- `rnf` crea un componente funcional

## Estructura de carpetas recomendada

### assets

Dentro de assets se guardan las imágenes, iconos, fuentes, etc.

### components

Dentro de components se guardan los componentes de la aplicación.

### constants

Dentro de constants se guardan las cosas como los colores para usarlos globalmente o otros valores que se repitan en la aplicación.

### hooks

Dentro de hooks se guardan los hooks personalizados.

---

## Slots

Los slots son una forma de renderizar componentes hijos en un componente padre.

```jsx
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const RootLayout = () => {
  return (
    <SafeAreaView>
      <Slot />
    </SafeAreaView>
  );
};

export default RootLayout;
```

## SafeAreaView

El SafeAreaView es un componente que se utiliza para que los elementos no se salgan de la pantalla en dispositivos con notch.

```jsx
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
    </SafeAreaView>
  );
};
```

con notch me refiero a la barra que tienen los dispositivos en la parte superior de la pantalla.

---

## fuentes

Las fuentes por defecto:

Android: Roboto
iOS: San Francisco

Para cambiar la fuente de la aplicación se puede hacer de la siguiente manera:

```jsx
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Text } from "react-native";

const RootLayout = () => {
  // cargar la fuente
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // si la fuente no se ha cargado
  if (!loaded) {
    // puedes retornar un componente de carga o otro tipo de cosas como null
    return null;
  }

  return (
    <SafeAreaView>
      <Text style={{ fontFamily: "SpaceMono" }}>App</Text>
      <Slot />
    </SafeAreaView>
  );
};

export default RootLayout;
```

## constantes

Para usar constantes en la aplicación se puede hacer de la siguiente manera:

```jsx
export const Colors = {
  darkGray: "#2D2D2D",
  lightGray: "#9B9B9B",
  orange: "#FF9427",

  textPrimary: "white",
  textSecondary: "#666666",
  background: "#000000",
} as const;
```

con el `as const` se hace que las constantes sean inmutables.

---

## Estilos globales

Para usar estilos globales en la aplicación se puede hacer de la siguiente manera:

Crear un archivo globalStyles.ts:

```jsx
import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
```

Y luego importar los estilos globales en el componente:

```jsx
import { globalStyles } from "@/styles/globalStyles";

const App = () => {
  return (
    <SafeAreaView style={globalStyles.background}>
      <Text>App</Text>
    </SafeAreaView>
  );
};
```

---

## Navegación

Para la navegación se puede usar `expo-router`.

```jsx
import { Router, Route } from "expo-router";
import { Home } from "@/screens/Home";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
};
```

---

## haptics

Para usar el haptics se puede hacer de la siguiente manera:

```jsx
import { Haptics } from "expo";

Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
```

Que es un hapitc? Es una vibración que se siente al tocar la pantalla.

---
