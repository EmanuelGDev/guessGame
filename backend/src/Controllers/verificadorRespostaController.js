import verificadorRespostaService from "../Services/verificadorRespostaService.js";

class verificadorRespostaController{

    async handle(request,reply){

        const verificadorService = new verificadorRespostaService();

        const chute = request.params.nome;

        const respostas = await verificadorService.execute(chute) 
        
        reply.send(respostas)
    }

}

export default verificadorRespostaController;