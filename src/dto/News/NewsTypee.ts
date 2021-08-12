import { Administrator } from "../../models/Administrator";

export type NewsTypee = {
    title: string;
    description: string;
    publication_date: Date;
    author: Administrator;
}