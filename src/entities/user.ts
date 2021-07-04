import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Password } from './password';

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToMany(() => Password, (password) => password.user)
    passwords: Password;
}
