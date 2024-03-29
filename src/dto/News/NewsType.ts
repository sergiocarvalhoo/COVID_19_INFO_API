interface ImagePath {
    path: string;
}

export type NewsType = {
    title: string;
    description: string;
    publication_date: Date;
    imagesPath: ImagePath[];
}