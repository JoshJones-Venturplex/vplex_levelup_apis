import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript';

@Table
export class Smoothie extends Model<Smoothie> {
  @PrimaryKey
  @Column({type: DataType.INTEGER, autoIncrement: true})
  id: number;

  @Column
  flavor: string;

  @Column
  mixin: string;

  @Column
  calories: number; 

  @Column
  size: string;
}