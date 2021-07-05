import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MinLength } from 'class-validator';
import { User } from './user';

@Entity('passwords')
export class Password {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.passwords)
    user:User;

    @MinLength(6)
    @Column({
      nullable: false,
    })
    name: string;

    @MinLength(6)
    @Column({
      nullable: false,
    })
    password: string;

    @MinLength(6)
    @Column({
      nullable: false,
    })
    description: string;
}
