import { Router } from 'express';
import { IndexController } from './../controllers/indexControler';
class indexRoutes {


 public router : Router =Router();

        constructor(){

            this.config();

        }

        config() : void{
            this.router.get('/',IndexController.index);
        }

}


const indexRoute = new indexRoutes();

export default indexRoute.router;