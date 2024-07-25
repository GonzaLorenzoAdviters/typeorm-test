import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/user.entity";

@Entity('language')
export class Language {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  name: string;

  @CreateDateColumn({nullable : true})
  createdDate: Date

  @DeleteDateColumn({nullable : true})
  deletedDate: Date;

  @OneToMany(() => User, (user) => user.language)
  user: User;
}
