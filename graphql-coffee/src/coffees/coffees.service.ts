import { Injectable } from '@nestjs/common';
import { CreateCoffeeInput } from './dto/create-coffee.input';

@Injectable()
export class CoffeesService {
  async findAll() {
    return [];
  }

  async findOne(id: number) {
    console.log('id: ', id);
    return null;
  }

  async create(сreateCoffeeInput: CreateCoffeeInput) {
    console.log('createCoffeeInput: ', сreateCoffeeInput);
    return null;
  }
}
