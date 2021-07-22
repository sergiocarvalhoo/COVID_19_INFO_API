import { MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBulletin1626878435334 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"Bulletin",
                columns:[
                    {
                        name: "confirmed",
                        type: "integer",
                    },
                    {
                        name: "recovered",
                        type: "integer",
                    },
                    {
                        name: "discarded",
                        type: "integer",
                    },
                    {
                        name: "under_review",
                        type: "integer",
                    },
                    {
                        name: "admitted",
                        type: "integer",
                    },
                    {
                        name: "deaths",
                        type: "integer",
                    },
                    {
                        name: "publication_date",
                        type: "timestamp",
                        default: "now()",
                        isPrimary: true,
                    },
                    {
                        name: "author_registration",
                        type: "varchar",
                    }
                ],
                foreignKeys: [
                    {
                      name: "FKAuthorRegistration", // nome da chave estrangeira, caso queria deletar. fica mais facil achar
                      columnNames: ["author_registration"], // coluna da chave estrangeira
                      referencedTableName: "Administrator", // tabela que vai se relacionar
                      referencedColumnNames: ["registration"], // coluna da tabela que vai se relacionar
                      onUpdate: "CASCADE",
                      onDelete: "CASCADE",
                    },
                  ],
            })
            
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("Bulletin");

    }

}
