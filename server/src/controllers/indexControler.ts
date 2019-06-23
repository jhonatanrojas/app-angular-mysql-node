import { Request, Response } from 'express';

class indexController {

    constructor() {
        
    }

    public index(req : Request,res:Response){

        res.json({text:' la api esya en api/games'})
    }
}

export const IndexController = new indexController();