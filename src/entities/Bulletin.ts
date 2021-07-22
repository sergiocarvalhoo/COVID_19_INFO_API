import { Entity, 
    PrimaryColumn,
    CreateDateColumn, 
    Column,
    ManyToOne } 
    from "typeorm";

import { Administrator } from './Administrator'    

@Entity("Bulletin")
class Bulletin{

    @Column()
    confirmed: number;

    @Column()
    recovered: number;

    @Column()
    discarded: number;

    @Column()
    under_review: number;

    @Column()
    admitted: number;

    @Column()
    deaths: number;

    @PrimaryColumn()
    publication_date: Date;
      
    @ManyToOne(() => Administrator, administrator => administrator.registration)
    author: Administrator;

}

export {Bulletin}