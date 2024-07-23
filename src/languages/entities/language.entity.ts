import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity('language')
export class Language {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  name: string;

  @OneToMany(() => User, (user) => user.language)
  user: User;
}
