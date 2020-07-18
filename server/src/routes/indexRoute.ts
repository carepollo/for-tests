import  { Router } from "express";

class IndexRoute {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', (request, response) => {
            response.send('Pagina de INICIO');
        })
    }
}

const indexRoute = new IndexRoute()
export default indexRoute.router