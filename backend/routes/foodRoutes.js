import express from 'express'
import multer from 'multer'
import { addFood, listFood, removeFood } from '../controllers/foodController.js';

const foodRouter = express.Router();

//Image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)
// foodRouter.post("/add", addFood);
foodRouter.post("/remove", removeFood);
foodRouter.get("/list",listFood)

export default foodRouter;