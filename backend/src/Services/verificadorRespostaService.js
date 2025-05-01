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
                console.log("O piloto chutado foi: ", pilotoChutado)
            }
        }

        const pilotoDoDia = cache.getElemento();
        
        let arrayRespotas = []

        const chaves = Object.keys(pilotoDoDia);
        

        for(let chave of chaves){
            if(pilotoChutado[chave] === pilotoDoDia[chave]){
                arrayRespotas.push("igual")
            }else if(pilotoChutado[chave] > pilotoDoDia[chave]){
                arrayRespotas.push("maior")
            }else{
                arrayRespotas.push("menor")
            }
        }
        

        return arrayRespotas;
    }

}

export default verificadorRespostaService