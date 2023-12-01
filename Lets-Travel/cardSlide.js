
function startCardSlide(){

    const cards = document.querySelectorAll('.card')

    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.add('hovered');
    
            setTimeout(() => {
                changeRadio(card);
                changeImage(card);
            }, 1000)
            startPassigImages(card)
    
            card.querySelector('.slide-radios').addEventListener('click', () => {
                stopPassingImages();
                changeImage(card);
                setTimeout(() => {
                    startPassigImages(card)
                }, 3000);
            })
    
            card.addEventListener("mouseleave", () => {
    
                card.classList.remove('hovered')
        
                isHovered = false;
                stopPassingImages();
        
                card.querySelector(`#radio0`).checked = true;
                card.querySelector('.slide').style.transform = `translateX(0%)`
            })
        })
    })

}

let interval;
function startPassigImages(card) {
    stopPassingImages();
    interval = setInterval(() => { changeRadio(card) }, 2500)
}

function stopPassingImages() {
    clearInterval(interval);
}

function getCheckedRadio(card) {
    const checkedRadio = card.querySelector('input:checked');
    const radios = [...card.querySelectorAll('input')];
    let idxRadio = radios.indexOf(checkedRadio);
    return idxRadio;
}

function changeRadio(card) {
    if (card.classList.contains('hovered')) {

        const radios = [...card.querySelectorAll('input')];
        idxRadio = getCheckedRadio(card);

        if (idxRadio >= radios.length - 1) {
            idxRadio = -1;
        }
        if (idxRadio < radios.length) {
            idxRadio++;
            card.querySelector(`#radio${idxRadio}`).checked = true;
            changeImage(card);
        }
    }
}

function changeImage(card) {
    if (card.classList.contains('hovered')) {
        idxRadio = getCheckedRadio(card);
        card.querySelector(`.slide`).style.transform = `translateX(-${idxRadio}00%)`;
    }
}




