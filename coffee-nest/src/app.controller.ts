import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Coffee } from './coffee.interface';
import { CreateCoffeeDto } from './create-coffee.dto';

@Controller('coffee')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getCoffees() {
    const coffees = await this.appService.getCoffees();
    return coffees;
  }

  @Get(':coffeeID')
  async getCoffee(@Param('coffeeID') coffeeID) {
    const coffee = await this.appService.getCoffee(coffeeID);
    return coffee;
  }

  @Post()
  async addCoffee(@Body() createCoffeeDTO: CreateCoffeeDto) {
    const coffee = await this.appService.addCoffee(createCoffeeDTO);
    return coffee;
  }

  @Patch(':coffeeID')
  async updateCoffee(@Body() createCoffeeDTO: CreateCoffeeDto, @Param('coffeeID') coffeeID) {
    const coffee = await this.appService.updateCoffee(createCoffeeDTO, coffeeID);
    return coffee;
  }

  @Delete(':coffeeID')
  async deleteCoffee(@Param() param) {
    const coffees = await this.appService.deleteCoffee(param.coffeeID);
    return coffees;
  }
}
