import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    content: string

    @Column()
    userNama: string
}