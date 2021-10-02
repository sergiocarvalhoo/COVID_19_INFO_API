import {
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn
} from "typeorm";

import { Administrator } from './Administrator'
import { Image } from './Image'


@Entity("News")
class News {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @ManyToOne(() => Administrator, administrator => administrator.registration, {
        onDelete:'CASCADE',onUpdate:'CASCADE'
    })
    author: Administrator;

    @CreateDateColumn()
    publication_date: Date;

    @Column()
    title: string;

    @OneToMany((type) => Image, (image) => image.news, {
        cascade:true
    })
    @JoinColumn({ name: "news_id" })
    imagesPath: Image[];

    @Column()
    description: string;

}

export { News }
