import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import { MinLength } from 'class-validator';
import { User } from './user';

@Entity('passwords')
export class Password extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

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

    @ManyToOne(() => User, (user) => user.passwords)
    user:User;
}
