import  { Router } from "express";

class CatalogRoute {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', (request, response) => {
            response.send('aqui ira el catalogo de publicaciones');
        })
    }
}

const catalogRoute = new CatalogRoute()
export default catalogRoute.router