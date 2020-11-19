const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const URL = 'https://api.chucknorris.io/jokes/random';

btn.addEventListener('click', ()=> {
    fetch(URL)
    .then(data => data.json())
    .then(response => content.textContent = response.value);
})

