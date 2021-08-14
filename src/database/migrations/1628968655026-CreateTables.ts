import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1628968655026 implements MigrationInterface {
    name = 'CreateTables1628968655026'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Images" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "path" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "news_id" integer)`);
        await queryRunner.query(`CREATE TABLE "News" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "publication_date" datetime NOT NULL DEFAULT (datetime('now')), "title" varchar NOT NULL, "description" varchar NOT NULL, "authorRegistration" varchar)`);
        await queryRunner.query(`CREATE TABLE "Bulletin" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "confirmed" integer NOT NULL, "recovered" integer NOT NULL, "discarded" integer NOT NULL, "under_review" integer NOT NULL, "admitted" integer NOT NULL, "deaths" integer NOT NULL, "publication_date" datetime NOT NULL, "authorRegistration" varchar)`);
        await queryRunner.query(`CREATE TABLE "VaccinationLocation" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "authorRegistration" varchar)`);
        await queryRunner.query(`CREATE TABLE "Administrators" ("name" varchar NOT NULL, "registration" varchar PRIMARY KEY NOT NULL, "cpf" varchar NOT NULL, "birth_date" datetime NOT NULL DEFAULT (datetime('now')), "password" varchar NOT NULL, "email" varchar NOT NULL, "occupation" varchar NOT NULL, CONSTRAINT "UQ_914f0f490951b9a3fc5ab1d6800" UNIQUE ("cpf"), CONSTRAINT "UQ_2561d0122b5239935a327e3a535" UNIQUE ("email"))`);
        await queryRunner.query(`CREATE TABLE "temporary_Images" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "path" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "news_id" integer, CONSTRAINT "FK_0e4648a7d1888a26a587238a7d1" FOREIGN KEY ("news_id") REFERENCES "News" ("id") ON DELETE CASCADE ON UPDATE CASCADE)`);
        await queryRunner.query(`INSERT INTO "temporary_Images"("id", "path", "created_at", "updated_at", "news_id") SELECT "id", "path", "created_at", "updated_at", "news_id" FROM "Images"`);
        await queryRunner.query(`DROP TABLE "Images"`);
        await queryRunner.query(`ALTER TABLE "temporary_Images" RENAME TO "Images"`);
        await queryRunner.query(`CREATE TABLE "temporary_News" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "publication_date" datetime NOT NULL DEFAULT (datetime('now')), "title" varchar NOT NULL, "description" varchar NOT NULL, "authorRegistration" varchar, CONSTRAINT "FK_fc807279d8f838eddf0dd01f80c" FOREIGN KEY ("authorRegistration") REFERENCES "Administrators" ("registration") ON DELETE CASCADE ON UPDATE CASCADE)`);
        await queryRunner.query(`INSERT INTO "temporary_News"("id", "publication_date", "title", "description", "authorRegistration") SELECT "id", "publication_date", "title", "description", "authorRegistration" FROM "News"`);
        await queryRunner.query(`DROP TABLE "News"`);
        await queryRunner.query(`ALTER TABLE "temporary_News" RENAME TO "News"`);
        await queryRunner.query(`CREATE TABLE "temporary_Bulletin" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "confirmed" integer NOT NULL, "recovered" integer NOT NULL, "discarded" integer NOT NULL, "under_review" integer NOT NULL, "admitted" integer NOT NULL, "deaths" integer NOT NULL, "publication_date" datetime NOT NULL, "authorRegistration" varchar, CONSTRAINT "FK_3fe8aa622cc004fe882acc57513" FOREIGN KEY ("authorRegistration") REFERENCES "Administrators" ("registration") ON DELETE CASCADE ON UPDATE CASCADE)`);
        await queryRunner.query(`INSERT INTO "temporary_Bulletin"("id", "confirmed", "recovered", "discarded", "under_review", "admitted", "deaths", "publication_date", "authorRegistration") SELECT "id", "confirmed", "recovered", "discarded", "under_review", "admitted", "deaths", "publication_date", "authorRegistration" FROM "Bulletin"`);
        await queryRunner.query(`DROP TABLE "Bulletin"`);
        await queryRunner.query(`ALTER TABLE "temporary_Bulletin" RENAME TO "Bulletin"`);
        await queryRunner.query(`CREATE TABLE "temporary_VaccinationLocation" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "authorRegistration" varchar, CONSTRAINT "FK_943f54e8b2a579a937404b79303" FOREIGN KEY ("authorRegistration") REFERENCES "Administrators" ("registration") ON DELETE CASCADE ON UPDATE CASCADE)`);
        await queryRunner.query(`INSERT INTO "temporary_VaccinationLocation"("id", "name", "description", "latitude", "longitude", "authorRegistration") SELECT "id", "name", "description", "latitude", "longitude", "authorRegistration" FROM "VaccinationLocation"`);
        await queryRunner.query(`DROP TABLE "VaccinationLocation"`);
        await queryRunner.query(`ALTER TABLE "temporary_VaccinationLocation" RENAME TO "VaccinationLocation"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "VaccinationLocation" RENAME TO "temporary_VaccinationLocation"`);
        await queryRunner.query(`CREATE TABLE "VaccinationLocation" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "description" varchar NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, "authorRegistration" varchar)`);
        await queryRunner.query(`INSERT INTO "VaccinationLocation"("id", "name", "description", "latitude", "longitude", "authorRegistration") SELECT "id", "name", "description", "latitude", "longitude", "authorRegistration" FROM "temporary_VaccinationLocation"`);
        await queryRunner.query(`DROP TABLE "temporary_VaccinationLocation"`);
        await queryRunner.query(`ALTER TABLE "Bulletin" RENAME TO "temporary_Bulletin"`);
        await queryRunner.query(`CREATE TABLE "Bulletin" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "confirmed" integer NOT NULL, "recovered" integer NOT NULL, "discarded" integer NOT NULL, "under_review" integer NOT NULL, "admitted" integer NOT NULL, "deaths" integer NOT NULL, "publication_date" datetime NOT NULL, "authorRegistration" varchar)`);
        await queryRunner.query(`INSERT INTO "Bulletin"("id", "confirmed", "recovered", "discarded", "under_review", "admitted", "deaths", "publication_date", "authorRegistration") SELECT "id", "confirmed", "recovered", "discarded", "under_review", "admitted", "deaths", "publication_date", "authorRegistration" FROM "temporary_Bulletin"`);
        await queryRunner.query(`DROP TABLE "temporary_Bulletin"`);
        await queryRunner.query(`ALTER TABLE "News" RENAME TO "temporary_News"`);
        await queryRunner.query(`CREATE TABLE "News" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "publication_date" datetime NOT NULL DEFAULT (datetime('now')), "title" varchar NOT NULL, "description" varchar NOT NULL, "authorRegistration" varchar)`);
        await queryRunner.query(`INSERT INTO "News"("id", "publication_date", "title", "description", "authorRegistration") SELECT "id", "publication_date", "title", "description", "authorRegistration" FROM "temporary_News"`);
        await queryRunner.query(`DROP TABLE "temporary_News"`);
        await queryRunner.query(`ALTER TABLE "Images" RENAME TO "temporary_Images"`);
        await queryRunner.query(`CREATE TABLE "Images" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "path" varchar NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "news_id" integer)`);
        await queryRunner.query(`INSERT INTO "Images"("id", "path", "created_at", "updated_at", "news_id") SELECT "id", "path", "created_at", "updated_at", "news_id" FROM "temporary_Images"`);
        await queryRunner.query(`DROP TABLE "temporary_Images"`);
        await queryRunner.query(`DROP TABLE "Administrators"`);
        await queryRunner.query(`DROP TABLE "VaccinationLocation"`);
        await queryRunner.query(`DROP TABLE "Bulletin"`);
        await queryRunner.query(`DROP TABLE "News"`);
        await queryRunner.query(`DROP TABLE "Images"`);
    }

}
