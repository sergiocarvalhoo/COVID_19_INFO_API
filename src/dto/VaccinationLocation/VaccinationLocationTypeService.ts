import { Administrator } from "../../models/Administrator";

export type VaccinationLocationTypeService = {
    name: string,
    description: string,
    latitude: number,
    longitude: number,
    author:Administrator
}