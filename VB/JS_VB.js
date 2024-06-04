document.addEventListener('DOMContentLoaded', function () {
    const text = document.getElementById("textToConvert");
    const convertBtn = document.getElementById("convertBtn");

    if (!text || !convertBtn) {
        console.error("Required elements not found in the DOM");
        return;
    }

    convertBtn.addEventListener('click', function () {
        const speechSynth = window.speechSynthesis;
        const enteredText = text.value.trim();
        const error = document.querySelector('.error-para');

        if (!enteredText.length) {
            error.textContent = "Nothing to Convert! Enter text in the text area.";
            return;  // Exit the function early if there's no text
        }

        error.textContent = "";

        if (!speechSynth.speaking) {
            const newUtter = new SpeechSynthesisUtterance(enteredText);
            newUtter.onstart = function() {
                convertBtn.textContent = "Sound is Playing...";
            };
            newUtter.onend = function() {
                convertBtn.textContent = "Play Converted Sound";
            };
            speechSynth.speak(newUtter);
        }
    });
});
