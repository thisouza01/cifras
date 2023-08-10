const mensagemSecreta = 'minha mensagem secreta';

console.log(mensagemSecreta)

function cifraMensagem(mensagem, movimentos) {
    const mensagemCifrada = mensagem.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0)

        return String.fromCharCode( codigoCaractere + movimentos )
    } )

    return mensagemCifrada.join('')
};

const mensagemCifrada = cifraMensagem(mensagemSecreta, 3)

console.log(mensagemCifrada);



function decifraMensagem(mensagem, movimentos) {
    const mensagemCifrada = mensagem.split('').map( caractere => {
        const codigoCaractere = caractere.charCodeAt(0)

        return String.fromCharCode( codigoCaractere - movimentos )
    } )

    return mensagemCifrada.join('')
};

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 3)

console.log(mensagemDecifrada);


// testanto - Cifrar ('+' offset)

function cifrar(offset, mensagem) {
    let resultado = "";
    for (let i = 0; i < mensagem.length; i++) {
      let codLetraAscii = mensagem.charCodeAt(i);
      if (codLetraAscii >= 65 && codLetraAscii <= 90) {
        let calculoOffset = ((codLetraAscii - 65 + offset) % 26) + 65;
        resultado += String.fromCharCode(calculoOffset);
      } else if (codLetraAscii >= 97 && codLetraAscii <= 122) { 
        let calculoOffset = ((codLetraAscii - 97 + offset) % 26) + 97;
        resultado += String.fromCharCode(calculoOffset);
      } else {
        resultado += String.fromCharCode(codLetraAscii); 
      }
    }
    return resultado;
  }

console.log(cifrar(1, 'BANANA')); 
console.log(cifrar(6, 'ZUMBA')); 

// testando - Decifrar ('-' offset)

function decode(offset, mensagem) {
    let resultado = "";
    for (let i = 0; i < mensagem.length; i++) {
      let codLetraAscii = mensagem.charCodeAt(i);
      if (codLetraAscii >= 65 && codLetraAscii <= 90) {
        let calculoOffset = ((codLetraAscii - 90 - offset) % 26) + 90;
        resultado += String.fromCharCode(calculoOffset);
      } else if (codLetraAscii >= 97 && codLetraAscii <= 122) {
        let calculoOffset = ((codLetraAscii - 122 - offset) % 26) + 122;
        resultado += String.fromCharCode(calculoOffset);
      } else {
        resultado += String.fromCharCode(codLetraAscii);
      }
  
    }
    return resultado;
}

console.log(decode(1, 'CBOBOB')); 
console.log(decode(6, 'FASHG')); 