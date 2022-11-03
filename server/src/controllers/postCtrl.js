import { PostModel } from "../models/postModel.js";


export class PostCtrl{

    static async getHomePost(req, res){

        try {
            const response = await PostModel.get()
            return res.status(200).json(response)    
        } 
        catch (error) 
        {
            return error
        }

    }

}