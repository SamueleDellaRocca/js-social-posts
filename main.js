const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "25-06-2021"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "03-09-2021"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "15-05-2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "03-04-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "05-03-2021"
    }
];

//SELEZIONO IL CONTAINER
const divContainer = document.getElementById('container');
// FUNZIONE PER CREARE POST IN HTML
function creaPost(objectPost) {
    const divPost = document.createElement('div');
    divPost.classList.add('post');
    divPost.innerHTML = `
    <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${objectPost.author.image}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${objectPost.author.name}</div>
                        <div class="post-meta__time">${objectPost.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${objectPost.content}</div>
            <div class="post__image">
                <img src="${objectPost.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${objectPost.likes}</b> persone
                    </div>
                </div> 
            </div>            
    `
    divContainer.append(divPost);
}

// APPLICO LA FUNZIONE AD OGNI OGGETTO DELL ARRAY
for (let index = 0; index < posts.length; index++) {
    creaPost(posts[index]);
}


//SELEZIONO IL BTNMIPIACE
const btnMiPiace = document.querySelectorAll('.js-like-button');
// CREO LA FUNZIONE PER CAMBIARE LA SCRITTA IN VERDE E LA APPLICO AD OGNI BTN CON UN CICLO FOR
function funzioneLike(indiceArrayPost, btnCliccato) {
    btnCliccato.classList.add('like-button--liked');
    event.preventDefault();
    addLike(indiceArrayPost);
    addIdArray(indiceArrayPost);
}


for (let index = 0; index < btnMiPiace.length; index++) {
    btnMiPiace[index].addEventListener('click', function (event) {
        funzioneLike(index, this);
    });
}

// FUNZIONE PER AGGIUNGERE I LIKE
const divLike = document.querySelectorAll('.likes__counter');
console.log(divLike);

function addLike(indicePost) {
    let newLike = posts[indicePost].likes + 1;
    divLike[indicePost].innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${newLike}</b> persone`;
}


//FUNZIONE PER AGGIUNGERE GLI ID IN UN ARRAY
const arrayId = [];

function addIdArray(indicePost) {
    if (arrayId.includes(posts[indicePost].id)) {

    } else {
        arrayId.push(posts[indicePost].id);
        console.log(arrayId);
    }

}