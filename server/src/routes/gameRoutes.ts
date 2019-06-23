import { Router } from 'express';
import  gameController  from './../controllers/gameController';

class GameRoutes {


 public router : Router =Router();

        constructor(){

            this.config();

        }

        config() : void{

            this.router.get('/',gameController.index);

            this.router.get('/:id',gameController.getOne);
            this.router.post('/',gameController.create);
            this.router.delete('/:id',gameController.delete);
            this.router.put('/:id',gameController.update);
        }

}


const gameRoutes = new GameRoutes();

export default gameRoutes.router;