import { Controller, Get, Post, Patch, Body, Delete, Param } from '@nestjs/common';
import { CreateBagelDto } from './dto/create-bagel.dto';
import { BagelsService } from './bagels.service';
import { Bagel } from './bagel.entity';

@Controller('bagels')
export class BagelsController {
  constructor(private readonly bagelsService: BagelsService) {}

  @Post()
  async create(@Body() createBagelDto: CreateBagelDto) {
    return await this.bagelsService.create(createBagelDto);
  }

  @Get()
  async findAll(): Promise<Bagel[]> {
    return await this.bagelsService.findAll();
  }

  @Patch(':bagelID')
  async update(@Param() param, @Body() createBagelDTO) {
    return await this.bagelsService.update(param.bagelID, createBagelDTO);
  }

  @Delete(':bagelID')
  async delete(@Param() param) {
    return await this.bagelsService.delete(param.bagelID); 
  }
}