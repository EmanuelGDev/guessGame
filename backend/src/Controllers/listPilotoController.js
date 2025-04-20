import listPilotoService from "../Services/listPilotoService.js";

class listPilotoController{

    async handle(request, reply){

        const listService = new listPilotoService();

        const nomePiloto = request.params.nome;

        const piloto = await listService.execute(nomePiloto);

        reply.send(piloto)
    }
}

export default listPilotoController