import { ImgModel } from "../models/imgModel.js"

export class ImgCtrl{


    static async GetImg(req, res){
        const response = await ImgModel.getImg()
        return res.status(200).json(response) 
    } 

    static async Env(req, res){
        const { originalname, location, key } = req.file
        const response = await new ImgModel( originalname, location, key).insert()  
        return res.status(200).json(response) 
    } 

    static async deleteImg(req, res){
        try {
                const { imgID } = req.params
                const { originalname, path, keyImg } = req.body
                const delImg = await new ImgModel(originalname, path, keyImg, imgID).delete()
                return res.status(200).json(delImg)
        } 
        catch (error) 
        {
            console.log(error)
            return res.status(500).json(error)
        }
    }

}