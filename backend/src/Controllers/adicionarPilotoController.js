import adicionarPilotoService from '../Services/adicionarPilotoService.js'
//import {request, }

class adicionarPilotoController {
    async handle(request, reply) {
        try {
            const dados = request.body;
            
            const pilotoService = new adicionarPilotoService();
            
            const piloto = await pilotoService.execute(dados);

            reply.send(piloto);

        } catch (error) {
            console.error(error);
            reply.status(500).send({ error: 'Erro ao adicionar piloto.' });
        }
    }
    
}

export default adicionarPilotoController