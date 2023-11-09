let bt_questao1 = document.getElementById("q1_executa");
let bt_questao2 = document.getElementById("q2_executa");
let bt_questao3 = document.getElementById("q3_executa");
let bt_questao4 = document.getElementById("q4_executa");
let bt_questao5 = document.getElementById("q5_executa");
const lerFrase = seletor => document.querySelector(seletor).value;
const campo = seletor => document.querySelector(seletor);

let resposta1 = () => {
    // const frase = document.querySelector('#q1_frase').value.toLowerCase();
    const frase = lerFrase("#q1_frase").toLowerCase();

    const q1ResultField = document.querySelector('#q1_resposta strong');
    let qtdVogais = 0;

    const vogais = "aâãáàeéêèiíìoôóòõuúù";

    for (i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i]))
            qtdVogais++;
    }

    if (qtdVogais > 1)
        q1ResultField.textContent = `A frase possui ${qtdVogais} vogais!`;
    else if (qtdVogais <= 1)
        q1ResultField.textContent = `A frase possui ${qtdVogais} vogal!`;
}

let resposta2 = () => {

    const frase = lerFrase('#q2_frase');
    const q2ResultField = document.querySelector('#q2_resposta strong');

    const fraseInvertida = frase.split('').reverse().join('');

    q2ResultField.textContent = fraseInvertida;

}

let resposta3 = () => {
    const frase = lerFrase('#q3_frase').split(' ');
    const palavraUser = lerFrase('#q3_palavra');
    let qtdOcorrencias = 0;
    const q3ResultField = document.querySelector('#q3_resultado strong');

    frase.forEach(palavra => {
        if (palavra == palavraUser)
            qtdOcorrencias++;
    });

    q3ResultField.textContent = `A palavra "${palavraUser}" ocorre ${qtdOcorrencias} vezes.`
}

let resposta4 = () => {
    const termoUser = lerFrase('#q4_termo');

    if(termoUser !=''){
        const texto = Array.from(document.querySelectorAll('#questao4_texto p'));
        let texto2 = '';
        let qtdOcorrencias = 0;
    
        texto.forEach(paragrafo => {
            const palavras = paragrafo.innerText.split(' ');
    
            for (i = 0; i < palavras.length; i++) {
                if (palavras[i].toLowerCase().includes(termoUser.toLowerCase())) {
    
                    let indexInicioPalavraUser = palavras[i].toLowerCase().indexOf(termoUser.toLowerCase());
                    let indexFimPalavraUser = indexInicioPalavraUser + (termoUser.length);
    
                    palavras[i] = `${palavras[i].slice(0, indexInicioPalavraUser)}<span class="destaque">${palavras[i].slice(indexInicioPalavraUser, indexFimPalavraUser)}</span>${palavras[i].slice(indexFimPalavraUser)}`;
                    qtdOcorrencias++;
                }
            }
            texto2 += `<p>${palavras.join(' ')}</p>`;
        });
    
        campo('#questao4_texto').innerHTML = texto2;
        campo('#q4_resposta').innerHTML = `O termo <q>${termoUser}</q> aparece ${qtdOcorrencias} vezes.`;
       
    }
}

let resposta5 = () => {
    const termoBusca = lerFrase('#q5_procurar');
    const termoSubstituto = lerFrase('#q5_substituir');

    if (termoBusca != '' && termoSubstituto != 0) {
        const texto = Array.from(document.querySelectorAll('#questao5_texto p'));
        let texto2 = '';

        texto.forEach(paragrafo => {
            const palavras = paragrafo.innerText.split(' ');

            for (let i = 0; i < palavras.length; i++) {
                if (palavras[i].toLowerCase().includes(termoBusca.toLowerCase())) {

                    const posicaoInicial = palavras[i].toLowerCase().indexOf(termoBusca.toLowerCase());
                    palavras[i] = palavras[i].split('');
                    palavras[i].splice(posicaoInicial, termoBusca.length, `<span class="destaque">${termoSubstituto}</span>`);
                    palavras[i] = palavras[i].join('');
                }
            }
            texto2 += `<p>${palavras.join(' ')}</p>`;
        })

        campo('#questao5_texto').innerHTML = texto2;

    }
}

//Atribuindo o evento click dos botões às funções acima
bt_questao1.addEventListener("click", resposta1, false);
bt_questao2.addEventListener("click", resposta2, false);
bt_questao3.addEventListener("click", resposta3, false);
bt_questao4.addEventListener("click", resposta4, false);
bt_questao5.addEventListener("click", resposta5, false);


