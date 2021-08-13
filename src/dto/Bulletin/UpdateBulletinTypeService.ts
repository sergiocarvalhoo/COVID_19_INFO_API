import { Administrator } from "../../models/Administrator";


export type UpdateBulletinTypeService = {
    id:number,
    confirmed:number,
    recovered:number,
    discarded:number,
    under_review:number,
    admitted:number,
    deaths:number,
    publication_date:Date;
    author:Administrator
}
