import { Entity, 
    PrimaryGeneratedColumn,
    Column,
    ManyToOne } 
    from "typeorm";

import { Administrator } from './Administrator'    


@Entity("VaccinationLocation")
class VaccinationLocation{

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;
      
    @ManyToOne(() => Administrator, administrator => administrator.registration)
    author: Administrator;

}

export {VaccinationLocation}
