import { Injectable, Inject } from '@nestjs/common';
import { CreateBagelDto } from './dto/create-bagel.dto';
import { Bagel } from './bagel.entity';

@Injectable()
export class BagelsService {
  constructor(
    @Inject('BagelsRepository') private readonly bagelsRepository: typeof Bagel,
  ) {}

  async create(createBagelDto: CreateBagelDto): Promise<Bagel> {
    const bagel = new Bagel();
    bagel.flavor = createBagelDto.flavor;
    bagel.spread = createBagelDto.spread;
    bagel.addons = createBagelDto.addons;
    bagel.toasted = createBagelDto.toasted;
    bagel.calories = createBagelDto.calories;

    return await bagel.save();
  }

  async findAll(): Promise<Bagel[]> {
    return await this.bagelsRepository.findAll<Bagel>();
  }

  async update(id, createBagelDto) {
    const bagel = await this.bagelsRepository.findOne({
        where: { id }
    });

    return await bagel.update(createBagelDto);
  }

  async delete(id) {
      console.log(id);
    const bagel = await this.bagelsRepository.findOne({
        where: { id }
    });
    return await bagel.destroy();
  }
}