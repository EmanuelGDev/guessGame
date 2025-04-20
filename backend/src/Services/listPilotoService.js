import fs from 'fs';
import path from 'path';

class listPilotoService{

    async execute(nome){

        const filePath = path.join('./pilotos.json');

        let pilotos = [];

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8');
            pilotos = JSON.parse(data);
        }

        for(let piloto of pilotos){
            if (piloto.nome.toLowerCase() === nome.toLowerCase()) {
                return piloto;
            }
        }

        return null
    }
}

export default listPilotoService