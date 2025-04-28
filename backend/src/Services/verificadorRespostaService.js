import fs from 'fs';
import path from 'path';
import cache from "../Cache/cache.js";

class verificadorRespostaService{

    async execute(chute){

        const filePath = path.join('./pilotos.json');

        let pilotos = [];

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8');
            pilotos = JSON.parse(data);
        }

        let pilotoChutado = [];

        for(let piloto of pilotos){
            if (piloto.nome.toLowerCase() === chute.toLowerCase()) {
                pilotoChutado = piloto;
                console.log("Entrou aqui")
            }
        }

        const pilotoDoDia = cache.getElemento();
        let aux = 0;
        let arrayRespotas = []

        for(index of pilotoChutado){
            if(index == pilotoDoDia[aux]){
                arrayRespotas.push(true)
            }
            else{arrayRespotas.push(false)
            }
        }

        return arrayRespotas;
    }

}

export default verificadorRespostaService
