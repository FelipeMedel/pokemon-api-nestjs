<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# Descripción

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Ejecutar en Desarrollo

1. Clonar el repositorio
2. Ejecutar

```bash
yarn install
```

3. Tener Nest CLI instalado

```bash
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```bash
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombar la copia a __.env__

6. Llenar las variables de entorno definidas en el archivo ```.env```

7. Ejecutar el api en modo development

```bash
yarn start:dev
```

8. Reconstruir la base de datos con datos semilla

```bash
(GET)
http://localhost:3000/api/v2/seed
```

## Modo Producción

Para crear la imagen del contenedor de la aplicación

```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```

Para ejecutar el y construir el contenedor

```bash
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up
```

> NOTA: Por defecto, docker-compose usa el archivo ```.env```, por lo que si tienen el archivo ```.env``` y lo configuran con sus variables de entorno de producción, bastaría con ejecutar el siguiente comando

```bash
docker-compose -f docker-compose.prod.yaml up --build
```

## Stack usado

* MongoDB
* Nestjs
