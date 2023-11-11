function start() {
    const h1 = document.createElement('h1');
    h1.textContent = 'RECEITAS';
    document.body.appendChild(h1);

    const divReceitas = document.createElement('h1');
    divReceitas.classList.add('receitas');
    document.body.appendChild(divReceitas);
}

function newReceita(titulo, descricao, imagem, ingredientes, preparo) {

    const divReceitas = document.querySelector('.receitas');
    const div = document.createElement('div');
    div.classList.add('receita');
    divReceitas.appendChild(div);


    const tituloReceita = document.createElement('h3');
    tituloReceita.classList.add('receita_titulo');
    tituloReceita.innerText = titulo ;
    div.appendChild(tituloReceita);


    const descricaoReceita = document.createElement('p');
    descricaoReceita.classList.add('receita_descricao');
    descricaoReceita.innerText = descricao;
    div.appendChild(descricaoReceita);


    const img = document.createElement('img');
    img.setAttribute('src', imagem);
    img.setAttribute('alt', titulo);
    img.setAttribute('title', titulo);

    div.appendChild(img);


    const ingredientesTitulo = document.createElement('h4');
    ingredientesTitulo.classList.add('receita__ingredientes-tiulo');
    ingredientesTitulo.innerText = 'INGREDIENTES:';
    div.appendChild(ingredientesTitulo);


    const listaIngredientes = document.createElement('ul');
    listaIngredientes.classList.add('receita__ingredientes_lista');
    ingredientes.forEach(ingrediente => {
        const li = document.createElement('li');
        li.innerText = ingrediente;
        listaIngredientes.appendChild(li);
    });
    div.appendChild(listaIngredientes);


    const tituloPreparo = document.createElement('h4')
    tituloPreparo.innerText= 'Forma de preparo:';
    div.appendChild(tituloPreparo);

    const listaPreparo = document.createElement('ul');
    preparo.forEach(passo => {
        const li = document.createElement('li');
        li.innerText = passo;
        listaPreparo.appendChild(li);
    });
    div.appendChild(listaPreparo);
}

function criarReceitas(){
    receitaList.forEach(receita =>{
        newReceita(receita.nome, receita.descricao, receita.foto, receita.ingredientes, receita.preparo);
    });
}
start();
criarReceitas();
