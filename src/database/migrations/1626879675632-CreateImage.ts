import { MigrationInterface, QueryRunner,Table } from "typeorm";

export class createImages1626717317708 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Images",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        unsigned: true,
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "path",
                        type: "varchar",
                    },
                    {
                        name: "news_id",
                        type: "integer",
                    },
                    {
                        name:"created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name:"updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ],
                foreignKeys: [
                    {
                        name: "FKImageNews",
                        columnNames: ["news_id"],
                        referencedTableName: "news",
                        referencedColumnNames: ["id"],
                        onUpdate: "CASCADE",
                        onDelete: "CASCADE",
                    },
                ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Images");
    }

}