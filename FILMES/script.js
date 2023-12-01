const url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";

const fazerRequisicaoViaFetch = async url => {
    const respostaDaPromessa = await fetch(url)
    const listaDeFilmes =  await respostaDaPromessa.json();
    console.log(listaDeFilmes);
    gerarCards(listaDeFilmes);
}

const gerarCards = listaDeFilmes =>{
    listaDeFilmes.forEach(filme =>{
        const cardContainer = document.querySelector('.card-container');
        const card = construirCardFilme(filme, listaDeFilmes);
        cardContainer.appendChild(card);
    });
}

const construirCardFilme = (filme, listaDeFilmes) =>{
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTop = document.createElement('div');
    cardTop.classList.add('card-top');
    card.appendChild(cardTop);

    const mainImage = document.createElement('img');
    mainImage.src = filme.figura;
    mainImage.classList.add('imagem-filme');
    cardTop.appendChild(mainImage);

    const cardTopDetails = document.createElement('div');
    cardTopDetails.classList.add('details');
    cardTop.appendChild(cardTopDetails);

    const classificacao = document.createElement('p');
    classificacao.classList.add('classificacao');
    if(filme.classificacao ==0){
        classificacao.innerText = 'Livre'
        classificacao.style.backgroundColor = "green";
    }
    else{
        classificacao.innerText = filme.classificacao;
        switch(filme.classificacao){
            case 18:
                classificacao.style.backgroundColor = "black";
                break;
            case 16:
                classificacao.style.backgroundColor = "red";
                break;
            case 14:
                classificacao.style.backgroundColor = "orange";
                break;
            case 12:
                classificacao.style.backgroundColor = "yellow";
                break;
            case 10:
                classificacao.style.backgroundColor = "blue";
                break;
        }
    }
    cardTop.appendChild(classificacao);

    const nomeFilme = document.createElement('h3');
    nomeFilme.innerText = filme.titulo;
    cardTopDetails.appendChild(nomeFilme);
    
    const generos = document.createElement('p');
    filme.generos.forEach(genero =>{ generos.innerText+=genero + ', '});
    
    cardTopDetails.appendChild(generos);

    const elenco = document.createElement('p');
    elenco.innerHTML = `<strong>Elenco: </strong>`;
    filme.elenco.forEach(artista => {elenco.innerText += artista + ', '})
    cardTopDetails.appendChild(elenco);

    const descricao = document.createElement('p');
    descricao.classList.add('descricao');
    descricao.innerText = filme.resumo;
    card.appendChild(descricao);


    const cardBottom = document.createElement('div');
    cardBottom.classList.add('card-bottom')
    card.appendChild(cardBottom);

    const h4TitulosSimilares = document.createElement('h4');
    h4TitulosSimilares.innerText = 'Titulos Similares';
    cardBottom.appendChild(h4TitulosSimilares);

    if(filme.titulosSemelhantes.length > 0){
        filme.titulosSemelhantes.forEach(titulo =>{
            const similar = document.createElement('img');
            similar.classList.add('img-similares');
            
            listaDeFilmes.forEach(filme =>{
                if(filme.id == titulo){
                    similar.src = filme.figura;
                }
            })

            cardBottom.appendChild(similar);
        })
    }


    

    return card;
}

fazerRequisicaoViaFetch(url)