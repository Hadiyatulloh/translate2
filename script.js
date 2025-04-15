function translateText() {
    const text = document.getElementById("inputText").value;
    const fromLang = document.getElementById("fromLang").value.split("-")[0];
    const toLang = document.getElementById("toLang").value.split("-")[0];

    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${fromLang}|${toLang}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const translated = data.responseData.translatedText;
            document.getElementById("outputText").value = translated;
        })
        .catch(err => {
            console.error("Tarjima xatosi:", err);
            alert("Tarjima qilishda xatolik yuz berdi.");
        });
}

function speak(which) {
    let text = "";
    let lang = "uz-UZ";

    if (which === "input") {
        text = document.getElementById("inputText").value;
        lang = document.getElementById("fromLang").value;
    } else {
        text = document.getElementById("outputText").value;
        lang = document.getElementById("toLang").value;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    speechSynthesis.speak(utterance);
}