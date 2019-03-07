
    
import { Injectable, Inject } from '@nestjs/common';
import { CreateSmoothieDto } from './dto/create-smoothie.dto';
import { Smoothie } from './smoothie.entity';

@Injectable()
export class SmoothiesService {
  constructor(
    @Inject('SmoothiesRepository') private readonly smoothiesRepository: typeof Smoothie,
  ) {}

  async create(createSmoothieDto: CreateSmoothieDto): Promise<Smoothie> {
    const smoothie = new Smoothie();
    smoothie.flavor = createSmoothieDto.flavor;
    smoothie.mixin = createSmoothieDto.mixin;
    smoothie.calories = createSmoothieDto.calories;
    smoothie.size = createSmoothieDto.size;

    return await smoothie.save();
  }

  async findAll(): Promise<Smoothie[]> {
    return await this.smoothiesRepository.findAll<Smoothie>();
  }

  async update(id, createSmoothieDto) {
    const smoothie = await this.smoothiesRepository.findOne({
        where: { id }
    });

    return await smoothie.update(createSmoothieDto);
  }

  async delete(id) {
      console.log(id);
    const smoothie = await this.smoothiesRepository.findOne({
        where: { id }
    });
    return await smoothie.destroy();
  }
}