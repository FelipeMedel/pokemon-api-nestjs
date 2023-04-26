import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/pokemon-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosApdater } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosApdater
    ){}

  async executeSeed() {
    const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=150')

    await this.pokemonModel.deleteMany({})

    const pokemonToInsert: {name: string, no: number}[] = []

    data.results.forEach(({name, url}) => {
      const segments = url.split('/')
      const no: number = +segments[segments.length - 2]
      pokemonToInsert.push({name, no})
    })

    await this.pokemonModel.insertMany(pokemonToInsert)

    return 'Seed Executed'
  }

}
