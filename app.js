const jokeBtn = document.getElementById('jokeBtn');
const jokeText = document.getElementById('jokeText');
const punchline = document.getElementById('punchline');

jokeBtn.addEventListener('click', ()=>{
    console.log('clicked the button')
    const url = "https://official-joke-api.appspot.com/random_joke";
    fetch(url)
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data.setup)
        console.log(data.punchline)
        jokeText.innerHTML = data.setup
        punchline.innerHTML = data.punchline
    });
})