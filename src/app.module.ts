import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { Envconfigutarion } from './config/app.config';
import { JoiValitaionSchema } from './config/joi.validation';

@Module({
  imports: [
    // Para cargar las variables de entorno
    ConfigModule.forRoot({
      load: [Envconfigutarion],
      validationSchema: JoiValitaionSchema
    }),
    // paquete para devolver contenido estatico
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public')
    }),

    MongooseModule.forRoot(process.env.MONGO_DB),

    PokemonModule,

    CommonModule,

    SeedModule
  ]
})
export class AppModule {}
