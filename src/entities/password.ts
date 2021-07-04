import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user';

@Entity('passwords')
export class Password {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.passwords)
    user:User;

    @Column()
    name: string;

    @Column()
    password: string;

    @Column()
    description: string;
}
