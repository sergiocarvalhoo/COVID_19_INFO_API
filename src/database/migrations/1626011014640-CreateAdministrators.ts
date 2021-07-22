import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAdministrators1625837261241 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"Administrators",
                columns:[
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "registration",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "cpf",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "birth_date",
                        type: "timestamp",
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "occupation",
                        type: "varchar",
                    },
                ]
            })
            
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("Administrators");

    }

}
