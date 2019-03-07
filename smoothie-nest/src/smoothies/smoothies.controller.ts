import { Controller, Get, Post, Patch, Body, Delete, Param } from '@nestjs/common';
import { CreateSmoothieDto } from './dto/create-smoothie.dto';
import { SmoothiesService } from './smoothies.service';
import { Smoothie } from './smoothie.entity';

@Controller('smoothies')
export class SmoothiesController {
  constructor(private readonly smoothiesService: SmoothiesService) {}

  @Post()
  async create(@Body() createSmoothieDto: CreateSmoothieDto) {
    return await this.smoothiesService.create(createSmoothieDto);
  }

  @Get()
  async findAll(): Promise<Smoothie[]> {
    return await this.smoothiesService.findAll();
  }

  @Patch(':smoothieID')
  async update(@Param() param, @Body() createSmoothieDTO) {
    return await this.smoothiesService.update(param.smoothieID, createSmoothieDTO);
  }

  @Delete(':smoothieID')
  async delete(@Param() param) {
    return await this.smoothiesService.delete(param.smoothieID); 
  }
}