

var arrow = document.getElementById('arrow'),
    arrow1 = document.getElementById('arrow1'),
    arrow2 = document.getElementById('arrow.2'),
    arrow12 = document.getElementById('arrow1.2'),
    arrow3 = document.getElementById('arrow.3'),
    arrow13 = document.getElementById('arrow1.3'),
    carousel = document.getElementById('carousel'),
    items = document.getElementsByClassName('carousel-item')[0],
    carousel1 = document.getElementById('carousel1'),
    items1 = document.getElementsByClassName('carousel-item')[1],
    carousel2 = document.getElementById('carousel2'),
    items2 = document.getElementsByClassName('carousel-item')[2],
    pos = 0,
    pos1 = 0,
    pos2 = 0;

arrow.addEventListener('click', moveCarL);
arrow1.addEventListener('click', moveCarR);

arrow2.addEventListener('click', moveCarL1);
arrow12.addEventListener('click', moveCarR1);

arrow3.addEventListener('click', moveCarL2);
arrow13.addEventListener('click', moveCarR2);


function moveCarL() {
    switch (pos) {
        case -2:
            //You could make it jiggle a bit to show that its not possible to go more left
            console.log(pos);
            break;
        case -1:
            carousel.classList.add("pos-2");
            carousel.classList.remove("pos-1");
            pos--;
            console.log(pos);
            break;
        case 0:
            carousel.classList.add("pos-1");
            pos--;
            console.log(pos);
            break;
        default:
            break;
    }
}

function moveCarR() {
    switch (pos) {
        case -2:
            carousel.classList.remove("pos-2");
            carousel.classList.add("pos-1");
            pos++;
            console.log(pos);
            break;
        case -1:
            carousel.classList.remove("pos-1");
            pos++;
            console.log(pos);
            break;
        case 0:
            //This could do with a little wiggle too
            console.log(pos);
            break;
        default:
            break;
    }
}

function moveCarL1() {
    switch (pos1) {
        case -2:
            //You could make it jiggle a bit to show that its not possible to go more left
            console.log(pos1);
            break;
        case -1:
            carousel1.classList.add("pos-2");
            carousel1.classList.remove("pos-1");
            pos1--;
            console.log(pos1);
            break;
        case 0:
            carousel1.classList.add("pos-1");
            pos1--;
            console.log(pos1);
            break;
        default:
            break;
    }
}

function moveCarR1() {
    switch (pos1) {
        case -2:
            carousel1.classList.remove("pos-2");
            carousel1.classList.add("pos-1");
            pos1++;
            console.log(pos1);
            break;
        case -1:
            carousel1.classList.remove("pos-1");
            pos1++;
            console.log(pos1);
            break;
        case 0:
            //This could do with a little wiggle too
            console.log(pos1);
            break;
        default:
            break;
    }
}

function moveCarL2() {
    switch (pos2) {
        case -2:
            //You could make it jiggle a bit to show that its not possible to go more left
            console.log(pos2);
            break;
        case -1:
            carousel2.classList.add("pos-2");
            carousel2.classList.remove("pos-1");
            pos2--;
            console.log(pos2);
            break;
        case 0:
            carousel2.classList.add("pos-1");
            pos2--;
            console.log(pos2);
            break;
        default:
            break;
    }
}

function moveCarR2() {
    switch (pos2) {
        case -2:
            carousel2.classList.remove("pos-2");
            carousel2.classList.add("pos-1");
            pos2++;
            console.log(pos2);
            break;
        case -1:
            carousel2.classList.remove("pos-1");
            pos2++;
            console.log(pos2);
            break;
        case 0:
            //This could do with a little wiggle too
            console.log(pos2);
            break;
        default:
            break;
    }
}