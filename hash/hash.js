import {createHash } from 'crypto';

function criaHash(senha) {
    // createHash( 'qual tipo de hash usar' )
    return createHash('sha256').update(senha).digest('hex')
    // update( qual a senha para ser encriptada )
    // digest( 'hex' - hexadecimal )
};

console.log(criaHash('uma String qualquer '));


// criando usuario que salvará nome e a senha encriptada

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    //metodo
    autentica(nome, senha){
        if (nome === this.nome && this.hash === criaHash(senha)){
            console.log('Usuário autenticado com sucesso');
            return true;
        }
    
        console.log('Usuário ou senha incorretos.');
        return false;
    }
}

const usuario = new Usuario('Thiago', 'senha123');

console.log(usuario)

// caso de sucesso
usuario.autentica('Thiago', 'senha123');


// casos de falha
usuario.autentica('Tiago', 'senha123');
usuario.autentica('Thiago', 'senha1234');