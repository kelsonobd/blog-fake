//https://jsonplaceholder.typpicode.com/posts

async function readPosts() {
    let postArea = document.querySelector(`.posts`);
    postArea.innerHTML = 'Carregando...'

    let response = await fetch('https://jsonplaceholder.typpicode.com/posts')
    let json = await response.json();

}


readPosts()