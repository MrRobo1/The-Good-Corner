import { Request, Response } from "express";
import { Ad } from "../entities/ad";
import { Like } from "typeorm";

const adsController = {
    read: async (req: Request, res: Response) => {
        let result: Ad[] = [];

        try {
            if (req.query.title !== undefined) {
                result = await Ad.find({
                    where: { title: Like(`%${req.query.title}%`)},
                    relations: {
                        category: true,
                        tags: true,
                    },
                });
            } else {
                console.log("no title in query");
                result = await Ad.find({
                    relations: {
                        category: true,
                        tags: true,
                    },
                });
            }
            res.send(result);
        } catch (err) {
            console.log(err);
            res.status(500).send("Error while reading the ads");
        }
    },

    readOne: async (req: Request, res: Response) => {
        try {
            const adId = parseInt(req.params.id);
            const result = await Ad.findOneByOrFail({ id : adId });
            res.send(result);
        } catch (err) {
            console.log(err);
            res.status(500).send("Error while reading the ad");
        }
    },
    create: async (req: Request, res: Response) => {
        try {
            // const newAd = new Ad();
            // newAd.title = req.body.title;
            // newAd.price = req.body.price;
            await Ad.save(req.body);
            res.send("The ad has been added");
        } catch (err) {
            console.log(err);
            res.status(500).send("Error while creating the ad");
        }
    },
    delete: async (req: Request, res: Response) => {
        try {
            const adId = parseInt(req.params.id);
            const adToDelete = await Ad.findOneByOrFail({ id: adId });
            adToDelete.remove();
            res.send("The ad has been deleted");
        } catch (err) {
            console.log(err);
            res.status(500).send("Error while deleting the ad");
        }  
    },
    put: async (req: Request, res: Response) => {
        try {
            const oldAd = await Ad.findOneByOrFail({ id: req.body.idToEdit });
            await Ad.save({ ...oldAd, ...req.body.newAd });
            res.send("The ad has been updated");
        } catch (err) {
            console.log(err);
            res.status(500).send("Error while updating the ad");                  
        }
    }
};

export default adsController;