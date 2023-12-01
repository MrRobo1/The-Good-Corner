import { Request, Response } from "express";
import { Category } from "../entities/category";

const categoryController = {
    read: async (_req: Request, res: Response) => {
        try {
            const result = await Category.find();
            res.send(result);
        } catch (err) {
            console.log(err);
            res.status(500).send("Error while reading the categories");
        }
    },
    create: async (req: Request, res: Response) => {
        try {
          await Category.save(req.body);
          res.send("Category has been created");
        } catch (err) {
          console.log("err", err);
          res.send("Error");
        }
      },
      edit: async (req: Request, res: Response) =>{
        try{
          await Category.update({id: req.body.id}, {...req.body.newCategory});
          res.send("Category has been updated");
        } catch (err) {
          res.status(400).send("Error while updating the category");
        }
      },
      delete: async (req: Request, res: Response) => {
        try {
          const adId = parseInt(req.params.id);
          const adToDelete = await Category.findOneByOrFail({ id: adId });
          adToDelete.remove();
          res.send("The ad has been deleted");
      } catch (err) {
          console.log(err);
          res.status(500).send("Error while deleting the ad");
      }
    }  
    };

export default categoryController;