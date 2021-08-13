import { Request, Response } from "express";
import { DeleteVaccinationLocationService } from '../../services/VaccinationLocation/DeleteBulletinService'
import { DeleteVaccinationLocationType } from '../../dto/VaccinationLocation/DeleteVaccinationLocationType'


class DeleteVaccinationLocationController {

    async handle(request: Request, response: Response) {

        const id = request.body as DeleteVaccinationLocationType;

        const deleteVaccinationLocationService = new DeleteVaccinationLocationService();

        await deleteVaccinationLocationService.execute(id);

        return response.status(200).json({ message: "The location has been deleted successfully!" })

    }

}

export { DeleteVaccinationLocationController }
