import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
import { BadRequestException } from '@nestjs/common/exceptions';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {

  transform(value: string, metadata: ArgumentMetadata) {
    // validamos si el string es un MongoId válido
    if (!isValidObjectId(value)) {
      throw new BadRequestException(`${value} is not a valid MongoId`)
    }
    return value;
  }

}
