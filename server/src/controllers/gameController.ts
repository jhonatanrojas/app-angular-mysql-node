import { Request, Response } from 'express';

import { Game }  from './../models/game';

class gameController {

    constructor() {
        
    }

    public async index(req : Request,res:Response)  : Promise<void> {

        const data=  await Game.getAll();
         res.json(data)
    }
    public async create(req : Request,res:Response)  : Promise<void> {
        const data=  await Game.create([req.body])
     
            console.log(req.body)
            res.json({"text":"juego guardado"})
       }

       public async getOne(req : Request,res:Response)  : Promise<any>  {
        const { id } = req.params;
        const games: any=  await Game.getOne(id);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });

       }

       public async delete(req : Request,res:Response){
        const { id } = req.params;
        const games: any=  await Game.delete(id );
        res.json({ message: "The game was deleted" });

       }

       public async update(req : Request,res:Response){
        const { id } = req.params;

        const data=  await Game.update([req.body, id]);
     
        res.json({"text":"juego actualizado"})
       }
}

const GameController = new gameController();

export default GameController;