import {createHash } from 'crypto';

// criando usuario que salvará nome e a senha encriptada

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }
    
    //metodo
    
    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex')
    }

    autentica(nome, senha){
        if (nome === this.nome && this.hash === this.criaHash(senha)){
            console.log('Usuário autenticado com sucesso');
            return true;
        }
    
        // console.log('Usuário ou senha incorretos.');
        return false;
    }
}

const usuario = new Usuario('Thiago', 'senha123');

// requer lista de senhar para testar

const senhasComuns = ["senha", "123456", "senha123", "admin", "blink182","meuAniversario", "senha123456", "brasil", "102030"];

senhasComuns.map(senha => {
    if (usuario.autentica('Thiago', senha)) {
        console.log(`A senha do usuário é: ${ senha }`)
    }
})

// Para se porteger desse tipo de ataque
// Limitar a quantidade de vezes de autenticação
// Ter politica de senha, para não colocar senhas tao fracas
