createHomePage();
startOutdoorSlide()
startCardSlide();

function createHomePage() {
    limparMain();
    createHomeOutdoor();

    const container = newElement('div');
    container.id = 'estadias'
    container.classList.add('container');
    seletor('main').appendChild(container);

    hoteis.forEach(hotel => {

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
    })
}

function createHomeOutdoor() {
    const outdoor = newElement('div');
    outdoor.classList.add('outdoor');
    seletor('main').appendChild(outdoor);

    const outdoorSlide = newElement('div');
    outdoorSlide.classList.add('outdoorSlide');
    outdoor.appendChild(outdoorSlide);


    cidades.forEach(cidade => {
        const outdoorCityLink = newElement('a');
        outdoorCityLink.classList.add('outdoorCityLink');
        outdoorCityLink.href = `cityPage.html?search=${cidade.nome}`;
        outdoorSlide.appendChild(outdoorCityLink);

        const outdoorSlideItem = newElement('div');
        outdoorSlideItem.classList.add('outdoorSlideItem');
        outdoorCityLink.appendChild(outdoorSlideItem);

        const outdoorImage = newElement('img');
        outdoorImage.src = cidade.imagem;
        outdoorSlideItem.appendChild(outdoorImage);

        const outdoorText = newElement('h1');
        outdoorText.innerText = cidade.nome;
        outdoorSlideItem.appendChild(outdoorText);
    })
}

function startOutdoorSlide() {
    const outdoorSlide = seletor('.outdoorSlide');

    const qtdOtdItms = document.querySelectorAll('.outdoorSlideItem').length;
    console.log(qtdOtdItms)
    let i = 0;

    setInterval(() => {
        if (i > qtdOtdItms - 1) {
            i = 0;
        }
        if (i <= qtdOtdItms - 1) {
            outdoorSlide.style.transform = `translateX(-${i}00%)`;
            i++;
        }
    }, 3000)

}