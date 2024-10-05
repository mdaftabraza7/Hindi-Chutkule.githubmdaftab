const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const apiKey = '3a072978ad83eb6788a8667c9f51'; // Replace 'your_actual_api_key' with your real API key

jokeBtn.addEventListener('click', generateJoke);
generateJoke();

async function generateJoke() {
    const url = `https://hindi-jokes-api.onrender.com/jokes?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    jokeEl.innerHTML = data.jokeContent;
}
