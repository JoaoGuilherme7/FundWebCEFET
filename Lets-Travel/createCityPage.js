document.addEventListener('DOMContentLoaded', ()=>{
    // console.log(new URLSearchParams(window.location.search).get('search'))
    let city = new URLSearchParams(window.location.search).get('search').toLowerCase();

    cidades.forEach(cidade => {
        if (city === cidade.nome.toLowerCase()) {
            limparMain();
            createCityPage(cidade);
            startCardSlide();
        }
    })
})


function createCityPage(cidade) {

    createCityOutdoor(cidade);

    const container = newElement('div');
    container.classList.add('container');
    seletor('main').appendChild(container);

    hoteis.forEach(hotel => {
        if (hotel.cidade_id === cidade.id) {

            const linkCard = newElement('a');
            container.appendChild(linkCard);

            const card = newElement('div');
            card.classList.add('card');
            linkCard.appendChild(card);


            const slideRadios = newElement('div');
            slideRadios.classList.add('slide-radios');
            card.appendChild(slideRadios);

            hotel.imagens.forEach(imagem => {
                const radioBtn = newElement('input');
                radioBtn.type = 'radio';
                radioBtn.name = `${hoteis.indexOf(hotel)}img-idx`;
                radioBtn.id = `radio${hotel.imagens.indexOf(imagem)}`
                slideRadios.appendChild(radioBtn);
            })
            slideRadios.querySelector('#radio0').checked = true;

            const slide = newElement('div');
            slide.classList.add('slide');
            card.appendChild(slide);

            hotel.imagens.forEach(imagem => {
                const img = newElement('img');
                img.src = imagem;
                slide.appendChild(img);
            })

            const cardDetails = newElement('div');
            cardDetails.classList.add('card-details');
            card.appendChild(cardDetails);

            const hotelName = newElement('h3');
            hotelName.innerText = hotel.nome;
            cardDetails.appendChild(hotelName);

            const rating = newElement('img');
            rating.classList.add('stars');
            rating.src = `stars/${hotel.rating}.png`;
            cardDetails.appendChild(rating);
        }
    })
}

function showCityError() {
    const cityError = newElement('div');
    cityError.classList.add('cityError');
    cityError.innerText = 'Nos desculpe, ainda não possuimos resultados para esta localidade.'

    seletor('main').appendChild(cityError);
}

function createCityOutdoor(cidade) {



    const outdoor = newElement('div');
    outdoor.classList.add('outdoor');
    seletor('main').appendChild(outdoor);

    const outdoorSlide = newElement('div');
    outdoorSlide.classList.add('outdoorSlide');
    outdoor.appendChild(outdoorSlide);

    const outdoorSlideItem = newElement('div');
    outdoorSlideItem.classList.add('outdoorSlideItem');
    outdoorSlide.appendChild(outdoorSlideItem);

    const outdoorImage = newElement('img');
    outdoorImage.src = cidade.imagem;
    outdoorSlideItem.appendChild(outdoorImage);

    const outdoorText = newElement('h1');
    outdoorText.innerText = cidade.nome;
    outdoorSlideItem.appendChild(outdoorText);

}