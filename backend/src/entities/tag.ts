import { 
    Entity, 
    PrimaryGeneratedColumn, 
    BaseEntity, 
    Column,
    ManyToMany } from 'typeorm';
import { Ad } from "./ad";


@Entity()
export class Tag extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(() => Ad, (ad) => ad.tags)
    ads: Ad[];
}