document.addEventListener('DOMContentLoaded', function() {
    const jokeBtn = document.getElementById('jokeBtn');
    const jokeDisplay = document.getElementById('jokeDisplay');

    jokeBtn.addEventListener('click', function() {
        // Fetching a random joke from an API
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json()) // Parsing the JSON response
            .then(data => {
                // Displaying the joke on the webpage
                jokeDisplay.textContent = `${data.setup} ::::: ${data.punchline}`;
            })
            .catch(error => {
                // Handling errors
                jokeDisplay.textContent = 'Oops! Something went wrong. Please try again later.';
                console.error('Error fetching joke:', error);
            });
    });
});
