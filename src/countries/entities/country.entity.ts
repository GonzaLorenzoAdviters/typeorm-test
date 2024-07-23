import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity('country')
export class Country {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  name: string;

  @OneToMany(() => User, (user) => user.country)
  user: User;
}
