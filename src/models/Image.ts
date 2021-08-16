import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import { News } from "./News";


@Entity("Images")
class Image {

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  path: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => News, (news) => news.imagesPath, {
    onDelete:'CASCADE',onUpdate:'CASCADE'
  })
  @JoinColumn({ name: "news_id" })
  news: News;

}

export { Image }
