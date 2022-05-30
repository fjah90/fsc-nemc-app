# fsc-nemc-app

#### Frontend APP to Code Challenge to consuming fsc-nemc-api
#### Heroku Deploy -> [link-APP](https://fsc-nemc-app.herokuapp.com)

## Requisitos para el código del frontend

- Se deberá usar programación funcional y Hook Effects en React.
- El código que envíes debe correr usando NodeJS 16 y no depender de librerías instaladas de forma global, variables de entorno o
configuraciones de algún sistema operativo especifico.
- El código debe ser escrito en JavaScript (ES6+).
- No están permitidas las siguientes herramientas: TypeScript, Dart, Elm, ni similares.
- En cuanto a las librerías y frameworks, puedes usar la versión que consideres apropiadas de:
  - **Webpack** [https://webpack.js.org/]
  - **React** [https://reactjs.org/]
  - **React Bootstrap** [https://react-bootstrap.github.io/]

## Intrucciones

Deberás desarrollar una App en React que deberá actuar como cliente del API ya desarrollado y que permita ver la información de /files
/data de manera ordenada en pantalla.

## Layout

### Usando React + React Bootstrap se debe crear una pantalla similar a la que se muestra en el siguiente wireframe:

![image](https://user-images.githubusercontent.com/9141370/170899812-fea1d38c-8bb4-46fa-9774-908c20b3d0e6.png)


## Puntos opcionales para el frontend

- **Usar Redux** [https://redux.js.org/]
- **Test unitarios usando Jest** [https://jestjs.io/]
- **Poder filtrar por "fileName" usando el punto opcional del API de listado de archivos y filtro por queryparam.**

### Punto opcional global

- Usar Docker o Docker Compose para correr las apps.

## Notas del desarrollador
### Se implemento CLEAN Architecture

- Application - Redux
  - Toda la lógica de negocio reside en Redux Middleware
- Views - React
  - Todas las vistas y componentes
- Infrastructure - Axios
  - Todos los servicios
