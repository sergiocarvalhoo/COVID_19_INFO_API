import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateNews1626878414712 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"News",
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
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "publication_date",
                        type: "timestamp",
                        default: "now()",
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
        queryRunner.dropTable("News");

    }

}
