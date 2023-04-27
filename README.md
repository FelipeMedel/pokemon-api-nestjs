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

5. Ejecutar el api

```bash
yarn start:dev
```

6. Reconstruir la base de datos con datos semilla

```bash
(GET)
http://localhost:3000/api/v2/seed
```

## Stack usado

* MongoDB
* Nestjs
