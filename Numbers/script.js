let bt_questao1 = document.getElementById("q1_executa");
let bt_questao2 = document.getElementById("q2_executa");
let bt_questao3_add = document.getElementById("q3_adicionar");
let bt_questao3_ord_asc = document.getElementById("q3_ord_asc");
let bt_questao3_ord_desc = document.getElementById("q3_ord_desc");
let bt_questao4_azul = document.getElementById("q4_azul");
let bt_questao4_branco = document.getElementById("q4_branco");
let bt_questao4_verde = document.getElementById("q4_verde");
let bt_questao4_cinza = document.getElementById("q4_cinza");
let bt_questao5 = document.getElementById("q5_executa");

const seletor = (seletor) => document.querySelector(seletor);
function calcularMedia(array) {
    if (array.length === 0) {
        return 0;
    }
    const soma = array.reduce((acc, num) => acc + num, 0);
    const media = soma / array.length;
    return media.toFixed(2);
}

let alturasMasculino = [];
let alturasFeminino = [];
let somaMaculino = 0;
let somaFeminino = 0;

let resposta1 = () => {
    const sexo = seletor('#q1_sexo').options[seletor('#q1_sexo').selectedIndex].value;

    if (sexo == 'M') {
        alturasMasculino.push(Number(seletor("#q1_altura").value));

        seletor('tr:nth-child(2) td:nth-child(2)').innerText = alturasMasculino.length;
        seletor('tr:nth-child(3) td:nth-child(2)').innerText = calcularMedia(alturasMasculino);
    }

    if (sexo == 'F') {
        alturasFeminino.push(Number(seletor("#q1_altura").value));

        seletor('tr:nth-child(2) td:nth-child(3)').innerText = alturasFeminino.length;
        seletor('tr:nth-child(3) td:nth-child(3)').innerText = calcularMedia(alturasFeminino);
    }
}

let resposta2 = () => {
    seletor('#q2_resposta').innerText = 'não fiz esta';
}

let resposta3_add = (novoNome) => {
    // resposta da questão 3 - adição de novos elementos aqui.
    if(novoNome != ''){
        const lista = seletor('#q3_lista')

        const li = document.createElement('li');
        li.innerText = novoNome;
        lista.appendChild(li);
    }
}

let resposta3_ordena_asc = () => {
    const listaNomes = document.querySelectorAll('#q3_lista li');
    const nomes = [...listaNomes].map((li) => li.innerText);
    nomes.sort()
    seletor('#q3_lista').innerHTML = '';
    nomes.forEach(nome => {
        resposta3_add(nome)
    })
}

let resposta3_ordena_desc = () => {
    const listaNomes = document.querySelectorAll('#q3_lista li');
    const nomes = [...listaNomes].map((li) => li.innerText);
    nomes.sort().reverse();
    seletor('#q3_lista').innerHTML = '';
    nomes.forEach(nome => {
        resposta3_add(nome)
    })

}

const body = seletor('body');
let resposta4_azul = () => {
    body.style.backgroundColor = 'blue';
}

let resposta4_branco = () => {
    body.style.backgroundColor = 'white';
}

let resposta4_verde = () => {
    body.style.backgroundColor = 'green';
}

let resposta4_cinza = () => {
    body.style.backgroundColor = '#777';
}

let resposta5 = () => {
    const termoUser = seletor('#q5_termo').value;

    if(termoUser !=''){
        const texto = Array.from(document.querySelectorAll('#questao5_texto p'));
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
    
        seletor('#questao5_texto').innerHTML = texto2;
        seletor('#q5_resposta').innerHTML = `O termo <q>${termoUser}</q> aparece ${qtdOcorrencias} vezes.`;
       
    }}


//Atribuindo o evento click dos botões às funções acima
bt_questao1.addEventListener("click", resposta1, false);
bt_questao2.addEventListener("click", resposta2, false);
bt_questao3_add.addEventListener("click", () => { resposta3_add(seletor('#q3_nome').value.trim()) }, false);
bt_questao3_ord_asc.addEventListener("click", resposta3_ordena_asc, false);
bt_questao3_ord_desc.addEventListener("click", resposta3_ordena_desc, false);
bt_questao4_azul.addEventListener("click", resposta4_azul, false);
bt_questao4_branco.addEventListener("click", resposta4_branco, false);
bt_questao4_verde.addEventListener("click", resposta4_verde, false);
bt_questao4_cinza.addEventListener("click", resposta4_cinza, false);
bt_questao5.addEventListener("click", resposta5, false);

