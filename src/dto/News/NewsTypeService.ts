import { Administrator } from "../../models/Administrator";

interface ImagePath {
    path: string;
}

export type NewsTypeService = {
    title: string;
    description: string;
    publication_date: Date;
    author: Administrator;
    imagesPath: ImagePath[];
}