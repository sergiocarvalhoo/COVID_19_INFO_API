import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVaccinationLocation1626878029334 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"VaccinationLocation",
                columns:[
                    {
                        name: "id",
                        type: "integer",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "latitude",
                        type: "decimal",
                        scale: 10,
                        precision: 2,
                    },
                    {
                        name: "longitude",
                        type: "decimal",
                        scale: 10,
                        precision: 2,
                    },
                ]
            })
            
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("VaccinationLocation");

    }

}
