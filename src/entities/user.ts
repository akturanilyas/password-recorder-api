import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { MinLength } from 'class-validator';
import { Password } from './password';

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({
      nullable: false,
    })
  name: string;

    @Column({
      nullable: false,
    })
    lastName: string;

    @Column({
      nullable: false,
    })
    email: string;

    @MinLength(6)
    @Column({
      nullable: false,
    })
    password: string;

    @OneToMany(() => Password, (password) => password.user)
    passwords: Password;
}
