# QuickBudget

QuickBudget es una aplicación React para registrar ingresos y gastos con una experiencia moderna. Está pensada para practicar hooks, contextos y validaciones en formularios, además de ofrecer una base para futuros módulos como persistencia y visualización de datos.

## Características

- **Gestión rápida de movimientos**: formularios separados para ingresos y gastos con validaciones personalizadas.
- **Agrupación por categoría**: los gastos se organizan automáticamente en tarjetas por categoría para facilitar la lectura.
- **Resumen en tiempo real**: cálculo del total de gastos e ingresos disponibles sin necesidad de recargar.
- **Context API + hooks personalizados**: `QuickBudgetContext` centraliza el estado y `useInputHandler` ofrece handlers reutilizables.
- **Estilos modernos**: componentes estilizados con CSS puro y gradientes inspirados en UI fintech.

## Tecnologías

- React 19 + React Router DOM 7
- TypeScript
- Vite
- Context API y hooks personalizados
- CSS Modules “handmade” (archivos `.css` por componente)

## Requisitos

- Node.js **20.19+** (Vite 7 requiere esta versión o superior).
- npm o yarn.

## Instalación

```bash
# Instalar dependencias
npm install

# Entorno de desarrollo
npm run dev

# Linter
npm run lint

# Build de producción
npm run build

# Vista previa del build
npm run preview
```

## Estructura del proyecto

```
src/
├─ components/
│  ├─ Layout/
│  ├─ ShowItems/
│  └─ forms/
├─ context/
├─ Hooks/
├─ utils/
│  ├─ totalCalculate/
│  └─ validate/
└─ types/
```

- `components/forms`: formularios de ingreso y gasto con estilos compartidos.
- `components/ShowItems`: listado agrupado y resumen de totales.
- `context/quickBudgetContext.tsx`: estado global para ingresos, gastos y totales.
- `Hooks/useInputsHandlers.tsx`: lógica de validación y handlers para los formularios.
- `utils/`: funciones de ayuda para validaciones y cálculos.

## Roadmap

1. Persistir datos en LocalStorage o IndexedDB.
2. Añadir filtros (por categoría, rango de fechas, tipo de movimiento).
3. Conectar con un backend/Firebase para multiusuario.
4. Incluir gráficos (Chart.js, Recharts) y widgets adicionales.
5. Desplegar en Vercel/Netlify y documentar en portafolio.

## Licencia

Uso personal/educativo. 

