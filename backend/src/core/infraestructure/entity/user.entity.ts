import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { unique: true })
    username: string;

    @Column('varchar')
    password: string;

    @Column('varchar', { unique: true })
    email: string;
}
