function checkWord() {
    const input = document.getElementById('wordInput').value
        .toLowerCase().trim().replace(/^\.+|\.+$/g, '');
    const output = document.getElementById('output');

    const dictionary = {
        'why is itamar always late': ' פששש אתה מקצוען, לך ל/rescue ',
    };

    if (dictionary.hasOwnProperty(input)) {
        output.innerText = dictionary[input];
    } else {
        showLoserGif();
    }
}

function showLoserGif() {
    const apiKey = 'z1BEw7iRUpV9kcZ77GypP5PxJPOhdV6A&tag=&rating=g';
    const searchTerm = 'Wrong'; // The keyword to search for
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.data.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.data.length);
                const gifUrl = data.data[randomIndex].images.original.url;
                console.log(gifUrl);
                const output = document.getElementById('output');
                output.innerHTML = `<div style="margin: 20px" dir="ltr">
                                        <h1>Wrong!<br> not even close!</h1>
                                        <img src="${gifUrl}" alt="Loser Gif">
                                    </div>`;
            } else {
                console.error('No GIFs found.');
            }
        })
        .catch(error => {
            console.error('Failed to fetch loser gif:', error);
        });
}
