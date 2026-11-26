# Optimerma - Sistema de Control de Mermas Industriales

## Descripción General

**Optimerma** es una aplicación web diseñada para optimizar el control, registro y seguimiento de mermas y desperdicios de material industrial. La plataforma resuelve la problemática de la pérdida de trazabilidad en líneas de producción o almacenes, permitiendo calcular de forma rápida y precisa el peso neto real de los lotes tras descontar desperdicios, mejorando la toma de decisiones operativas y reduciendo pérdidas financieras.

## Tecnologías y Librerías Utilizadas

* **HTML5:** Estructura semántica de la interfaz de usuario y formularios de registro.
* **CSS3:** Diseño visual responsivo, estilos de contenedores (`.caja`) y presentación de tablas de datos.
* **JavaScript (ES6+):** Lógica de negocio, validaciones en tiempo real, cálculo dinámico de mermas y manipulación del DOM.
* **JSON:** Estructura ligera para el almacenamiento e intercambio de registros de inventario.

## Estructura del Repositorio

```text
optimerma/
├── index.html      # Interfaz principal de la aplicación con el formulario de registro y tabla de resultados.
├── style.css       # Hoja de estilos encargada de la maquetación, colores y diseño responsivo.
├── app.js          # Lógica central del sistema: validaciones, cálculos matemáticos y renderizado dinámico.
├── data.json       # Archivo de datos estructurados para el almacenamiento de registros de mermas (opcional/local).
└── README.md       # Documentación oficial y guía de uso del repositorio.
```

## Instrucciones de Instalación y Configuración

Para ejecutar el proyecto de forma local en tu estación de trabajo, sigue estos sencillos pasos:

1. **Descargar:**
   Descarga la carpeta del proyecto comprimida en formato `.zip` y extráela en tu computadora.

2. **Ejecutar la aplicación:**
   Haz doble clic directamente sobre el archivo `index.html` para abrirlo en cualquier navegador web moderno (Chrome, Edge, Firefox).

## Guía Rápida de Uso

1. **Ingresar datos del lote:** En la sección del formulario principal, escribe el nombre o código del material industrial, el peso inicial y el porcentaje o cantidad de merma detectada.
2. **Validar y registrar:** Haz clic en el botón de **Registrar / Calcular**. El sistema validará automáticamente que no existan campos vacíos ni caracteres inválidos.
3. **Visualizar resultados:** El sistema calculará de manera automática el material aprovechable y agregará el registro a la tabla inferior para su consulta inmediata.
