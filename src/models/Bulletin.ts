import { Entity, 
    Column,
    ManyToOne, 
    PrimaryGeneratedColumn} 
    from "typeorm";

import { Administrator } from './Administrator'    


@Entity("Bulletin")
class Bulletin{

    @PrimaryGeneratedColumn("increment")
    id: number;

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

    @Column({ unique: true })
    publication_date: Date;
      
    @ManyToOne(() => Administrator, administrator => administrator.registration, {
        onDelete:'CASCADE',onUpdate:'CASCADE'
    })
    author: Administrator;

}

export {Bulletin}
