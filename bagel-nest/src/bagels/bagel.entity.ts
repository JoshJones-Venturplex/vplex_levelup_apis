import { Table, Column, Model, PrimaryKey, DataType } from 'sequelize-typescript';

@Table
export class Bagel extends Model<Bagel> {
    @PrimaryKey
    @Column({type: DataType.INTEGER, autoIncrement: true})
    id: number;

    @Column
    flavor: string;

    @Column
    spread: string;

    @Column
    addons: string;

    @Column
    toasted: boolean;

    @Column
    calories: number;
}