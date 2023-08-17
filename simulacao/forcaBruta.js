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

const usuario = new Usuario('Thiago', '1233');

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste ++) {
    if (usuario.autentica('Thiago', senhaTeste.toString())) {
        console.log(`A senha do usuário é : ${ senhaTeste }`)
    }
}


// Para se porteger desse tipo de ataque
// não permitir muitas tentativas de senhas por dia ou algum tempo determinado
// etapa de verificação da senha
