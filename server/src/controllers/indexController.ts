import { Request, Response } from "express";

class IndexController {
    public init(request: Request, response: Response){
        response.send("pagina principal")
    }
}

export const indexController = new IndexController()