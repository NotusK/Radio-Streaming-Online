const radio = document.getElementById('radio');
const stationName = document.getElementById('station-name');
const stationButtons = document.querySelectorAll('.station-button');

stationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const stationUrl = button.getAttribute('data-url');
        const stationTitle = button.getAttribute('data-name');

        radio.src = stationUrl;
        stationName.textContent = stationTitle;

        radio.load(); // Load the new audio source
        radio.play(); // Start playing
    });
});