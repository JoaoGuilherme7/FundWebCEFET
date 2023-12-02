const hoteis = [
    {
        id: 1,
        nome: 'Burj Al Arab',
        cidade_id: 1,
        imagens: ['hoteis/Burj-Al-Arab/Burj.png',
            'hoteis/Burj-Al-Arab/burj-acomodation.png',
            'hoteis/Burj-Al-Arab/Burj2.png',
            'hoteis/Burj-Al-Arab/burj-pool.png'],
        rating: 5

    },

    {
        id: 2,
        nome: 'Jumeirah Al Qasr',
        cidade_id: 1,
        imagens: ['hoteis/Jumeirah-Al-Qasr/Jumeirah.jpg',
            'hoteis/Jumeirah-Al-Qasr/Jumeirah-river.png',
            'hoteis/Jumeirah-Al-Qasr/Jumeirah-from-top.jpg'],
        rating: 5
    },

    {
        id: 3,
        nome: 'Four Seasons Disney World',
        cidade_id: 2,
        imagens: ['hoteis/Four-Seasons/Four-Seasons.jpg',
        'hoteis/Four-Seasons/FS-lazer.jpg',
        'hoteis/Four-Seasons/FS-toboagua.jpg', 'hoteis/Four-Seasons/FS-waterfall-pool.jpg'],
        rating: 5
    },

    {
        id: 4,
        nome: 'Mont Blanc Hotel',
        cidade_id: 3,
        imagens: ['hoteis/Mont-Blanc/mont-blanc-chamonix.jpg', 'hoteis/Mont-Blanc/MB-pool.jpg', 'hoteis/Mont-Blanc/MB-skiing.jpg','hoteis/Mont-Blanc/MB-night.jpg' ],
        rating: 5
    }, 

    {
        id: 5,
        nome: 'Les-Grands-Montets',
        cidade_id: 3,
        imagens: [ 'hoteis/Les-Grands-Montets/LGM-snow.jpg', 'hoteis/Les-Grands-Montets/LGM-bedroom.jpg', 'hoteis/Les-Grands-Montets/LGM-day.jpg', 'hoteis/Les-Grands-Montets/LGM-pool.jpg', 'hoteis/Les-Grands-Montets/LGM.jpg', 'hoteis/Les-Grands-Montets/LGM-ski-station.jpg',],
        rating: 4
    }


]

const cidades = [
    {
        id: 1,
        nome: 'Dubai',
        imagem: 'cidades/dubai.png'
    },

    {
        id: 2,
        nome: 'Orlando',
        imagem: 'cidades/orlando.jpg'
    },

    {
        id: 3,
        nome: 'Chamonix Mont Blanc',
        imagem: 'cidades/Chamonix-Mont-Blanc.jpg'
    }




]

const seletor = (seletor) => document.querySelector(seletor);
const newElement = tag => document.createElement(tag);

function limparMain() {
    seletor('main').querySelectorAll('main > *').forEach(element => {
        seletor('main').removeChild(element);
    })
}

function openCityPage(city) {
    window.location.href = `cityPage.html?search=${encodeURIComponent(city)}`;
}

seletor('#search-go').addEventListener('click', () => {
    const termoPesquisa = seletor('#search').value.trim().toLowerCase();

    if (termoPesquisa != '') {
        openCityPage(termoPesquisa);
    }
})