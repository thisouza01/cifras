import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';
import { create } from 'domain';

const mensagem = 'Demonstração do curso';
const chave = randomBytes(32);
const iv = randomBytes(16);

const cifra = createCipheriv('aes256', chave, iv);

const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');

console.log(mensagemCifrada)


// transmissão   ----------- chave, iv, mensagem


// Decifrar a mensagem

const decifra = createDecipheriv('aes256', chave, iv);

const mensagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8');

console.log(`Decifrado: ${ mensagemDecifrada.toString('utf-8') }`)