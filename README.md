# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


La estructura de carpetas funciona de la siguiente manera
src/
├── assets/            # Imágenes, SVGs, fuentes globales.
├── components/        # UI de propósito general (Buttons, Inputs, Modals).
├── config/            # Variables de entorno, constantes, config de Firebase/Axios.
├── features/          # El núcleo: lógica dividida por dominio de negocio.
│   ├── properties/    # Todo lo relacionado con inmuebles.
│   │   ├── api/       # Llamadas a la API de esta feature.
│   │   ├── components/ # Componentes exclusivos de inmuebles (PropertyCard).
│   │   ├── hooks/     # Hooks específicos (usePropertyList).
│   │   ├── types/     # Interfaces de TS para inmuebles.
│   │   └── index.ts   # Punto de entrada público de la feature.
│   ├── auth/          # Login, Registro, Recuperación.
│   └── search/        # Filtros complejos y lógica de búsqueda.
├── hooks/             # Hooks globales reutilizables (useDebounce, useLocalStorage).
├── layouts/           # Estructuras de página (MainLayout, AuthLayout).
├── pages/             # Componentes que representan rutas (Home, PropertyDetail).
├── services/          # Clientes de API globales o servicios compartidos.
├── store/             # Estado global (Zustand/Redux si es necesario).
├── types/             # Tipos de TypeScript compartidos a nivel global.
└── utils/             # Funciones puras de ayuda (formateo de moneda, fechas).
