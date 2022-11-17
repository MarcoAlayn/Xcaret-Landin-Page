# TEST-FRONTEND

## Se requiere trabajar una landing page en la que se maquete la siguiente estructura

### mobile
https://preview.uxpin.com/89197d8ab185db0334e15c58ec797fd33f56f1be#/pages/149929682/simulate/sitemap?mode=i
### desktop
https://preview.uxpin.com/89197d8ab185db0334e15c58ec797fd33f56f1be#/pages/149929671/simulate/sitemap?mode=i

## Recursos

- Se tendrá que hacer uso de react con <a href="https://nextjs.org/">nextjs</a>.
- Toda la información de la landig, textos, imágenes, links, etc. se deberán consultar desde los siguientes endpoints.
  - textos: https://raw.githubusercontent.com/javialcocer/test-json/main/data.json.
- Deberás hacer uso de <a href="https://redux.js.org/">redux</a>.
- Deberás usar <a href="https://tailwindcss.com/">tailwind</a> como libreria de css
- Deberás usar la libreria react-device-detect para poder cargar la vista mobile o desktop según sea el caso https://www.npmjs.com/package/react-device-detect.

## Consideraciones
- Deberás inicializar el idioma de la landing en español haciendo uso del store de redux.
- Dependiendo del store y el idioma deberás consultar la porción de textos correspondiente y guardar el lenguaje actual en el store.
- Al darle clic generar un código de reserva aleatorio y mostrar un popup con el resumen de compra.
- Al darle clic continuar en el popup, mostrar una thank you page

## Qué se califica
- Entregar liga de repositorio de tu prueba.
- Entrega de versión desktop.
- Entrega de versión mobile.
- Uso de hooks.
- Uso de redux.
- Limpieza del código.
- Tiempo de entrega.

## No te limites 
- En esta sección ten la libertad de agregar los extras que consideres que pueden demostrar tus habilidades.
  - Test de componentes.
  - Creación de componentes sin uso de librerías externas.
  - Deploy en servicios en la nube.
