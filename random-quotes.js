function handleQuotes() {
    fetch("https://api.kanye.rest")
        .then((res) => res.json())
        .then((data) => getQuotes(data));
}
handleQuotes();
function getQuotes({ quote }) {
    const quotesWrap = document.getElementById("quotes");
    quotesWrap.textContent = quote;
}
