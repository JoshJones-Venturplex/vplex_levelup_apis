import { Injectable, HttpException } from '@nestjs/common';
import { CreateCoffeeDto } from './create-coffee.dto';
import { Coffee } from './coffee.interface';

@Injectable()
export class AppService {
  private readonly coffees: Coffee[] = [
    { id: 1, flavor: 'vanilla', type: 'latte', style: 'hot', size: 'venti' },
    {
      id: 2,
      flavor: 'caramel',
      type: 'macchiato',
      style: 'iced',
      size: 'grande',
    },
    { id: 3, flavor: '', type: 'espresso', style: 'hot', size: 'tall' },
  ];

  getCoffees(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.coffees);
    });
  }

  getCoffee(coffeeID): Promise<any> {
    let id = Number(coffeeID);
    return new Promise(resolve => {
      const coffee = this.coffees.find(coffee => coffee.id === id);
      resolve(coffee);
    });
  }

  addCoffee(coffee): Promise<any> {
    return new Promise(resolve => {
      let index = this.coffees.length++;
      this.coffees.push({id: index, ...coffee});
      resolve(this.coffees);
    });
  }

  updateCoffee(CreateCoffeeDto, coffeeID): Promise<any> {
    let id = Number(coffeeID);
    return new Promise(resolve => {
      let index = this.coffees.findIndex(coffee => coffee.id === id);
      if (index === -1) {
        throw new HttpException('Coffee does not exist!', 404);
      }
      const coffee = this.coffees.find(coffee => coffee.id === id);
      this.coffees.splice(1, index, coffee);
      resolve(this.coffees);
    });
  }

  deleteCoffee(coffeeID): Promise<any> {
    let id = Number(coffeeID);
    return new Promise(resolve => {
      let index = this.coffees.findIndex(coffee => coffee.id === id);
      if (index === -1) {
        throw new HttpException('Coffee does not exist!', 404);
      }
      this.coffees.splice(index, 1);
      resolve(this.coffees);
    });
  }
}
