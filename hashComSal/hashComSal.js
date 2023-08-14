import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSal(senha) {
    const sal = randomBytes(16).toString('hex');   // randomBytes = tamanho da geraçao em bytes aleatoria e tranformando para uma string hexadecimal

    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');  // scryptSync = senha, sal, tamanho da senha

    return `${sal}: ${senhaHasheada}`
};

class Usuario{
    constructor(nome, senha){
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }
    autentica(nome, senha){
        if (nome === this.nome){
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

            if (hashesCorrespondem){
                console.log("Usuário autenticado com sucesso")
                return true;
            }
        }

        console.log("Usuário ou senha incorretos.")
        return false;
    }
}

const ts = new Usuario('Thiago Souza', 'senhaSecreta');

console.log(ts)

// testes de sucesso
ts.autentica('Thiago Souza', 'senhaSecreta')


// testes de falha
ts.autentica('ts', 'senhaSecreta')
ts.autentica('ts', 'senhaErrada')