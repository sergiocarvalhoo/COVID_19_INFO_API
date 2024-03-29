import { Entity, 
    PrimaryColumn, 
    CreateDateColumn, 
    Column,
    OneToMany } 
    from "typeorm";

import { News } from './News'   
import { Bulletin } from './Bulletin' 
import { VaccinationLocation } from './VaccinationLocation'


@Entity("Administrators")
class Administrator{
    
    @Column()
    name: string;

    @PrimaryColumn()
    readonly registration: string;

    @Column({ unique: true})
    readonly cpf: string;

    @CreateDateColumn()
    birth_date: Date;

    @Column()
    password: string;

    @Column({ unique: true })
    email: string;

    @Column()
    occupation: string;

    @OneToMany(() => News, news => news.author, {
        cascade:true
    })
    news: News[];

    @OneToMany(() => Bulletin, bulletin => bulletin.author, {
        cascade:true
    })
    bulletin: Bulletin[];

    @OneToMany(() => VaccinationLocation, vaccinationlocation => vaccinationlocation.author, {
        cascade:true
    })
    vaccinationlocation: VaccinationLocation[];
}

export {Administrator}
