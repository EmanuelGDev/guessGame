import fs from 'fs';
import path from 'path';

class adicionarPilotoService {
    async execute(dados) {
        const novoPiloto = dados

        const filePath = path.join('./pilotos.json');

        let pilotos = [];

        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8');
            pilotos = JSON.parse(data);
        }

        pilotos.push(novoPiloto);

        fs.writeFileSync(filePath, JSON.stringify(pilotos, null, 2), 'utf-8');

        console.log('Piloto salvo com sucesso!');

        return novoPiloto
    }
}

export default adicionarPilotoService
