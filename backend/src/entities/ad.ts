import { 
  BaseEntity, 
  Column, 
  Entity, 
  PrimaryGeneratedColumn, 
  ManyToOne,
  ManyToMany, 
  JoinTable} from "typeorm";
import { Category } from "./category";
import { Tag } from "./tag";

@Entity()
export class Ad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  owner: string;

  @Column()
  imageUrl: string;

  @Column()
  location: string;

  // an ad has only 1 category
  // a catogry can contain multiple ads
  // Many to  One relationship (many ads one category)
  @ManyToOne(() => Category, (category) => category.ads)
  category: Category;
  
  @JoinTable()
  @ManyToMany(() => Tag, (tag) => tag.ads)
  tags: Tag[];
}