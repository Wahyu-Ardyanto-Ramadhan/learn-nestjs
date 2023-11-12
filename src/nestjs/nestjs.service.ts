import { Injectable } from '@nestjs/common';
import { CreateNestjsDto } from './dto/create-nestjs.dto';

@Injectable()
export class NestjsService {
  private nestjs = [
    { id: 0, name: 'nestjsA', weapon: 'stars' },
    { id: 1, name: 'nestjsB', weapon: 'nunchucks' },
  ];

  getNestjs(weapon?: 'stars' | 'nunchucks') {
    if (weapon) {
      return this.nestjs.filter((nest) => nest.weapon === weapon);
    }
    return this.nestjs;
  }

  getNest(id: number) {
    const nest = this.nestjs.find((nest) => nest.id === id);
    if (!nest) {
      throw new Error('nest not found');
    }
    return nest;
  }

  createNest(createNestjsDto: CreateNestjsDto) {
    const newnestjs = {
      ...createNestjsDto,
      id: Date.now(),
    };
    this.nestjs.push(newnestjs);
    return newnestjs;
  }
}
