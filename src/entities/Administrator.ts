import {Entity, 
    PrimaryColumn, 
    CreateDateColumn, 
    Column} 
    from "typeorm";

@Entity("Administrators")
class Administrator{
    
    @Column()
    name:string;

    @Column({ unique: true })
    registration:string;

    @PrimaryColumn()
    readonly cpf:string;

    @CreateDateColumn()
    birth_date:Date;

    @Column()
    password:string;

    @Column({ unique: true })
    email:string;

    @Column()
    occupation:string;
}

export {Administrator}