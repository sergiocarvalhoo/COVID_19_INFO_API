import { Administrator } from "../../models/Administrator";


export type UpdateVaccinationLocationTypeService = {
    id: number,
    name: string,
    description: string,
    latitude: number,
    longitude: number,
    author: Administrator
}
