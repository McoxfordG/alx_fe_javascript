document.addEventListener('DOMContentLoaded', function() {
const quote = [
    {text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty", category: "Motivational"},
    {text: "You learn more from failure than from success. Don’t let it stop you. Failure builds character", category: "Motivational"},
    {text: "Experience is a hard teacher because she gives the test first, the lesson afterward.", category: "Motivational"},
    {text: "Rejoice Always", category: "Biblical"},
    {text: "I can do everything through Christ who strengthens me", category: "Biblical"},
    {text: "For my yoke is easy and my burden is light.", category: "Biblical"},
    {text: "Education is the most powerful weapon which you can use to change the world.", category: "Education"},
    {text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go", category: "Education"},
    {text: "The purpose of education is to replace an empty mind with an open one.", category: "Education"}            
];

//Dealing with html elements
const displayQuote = document.getElementById("quoteDisplay");
const theButton = document.getElementById("newQuote");

function showQuote() {
    const randomQuote = Math.floor(Math.random() * quote.length);
    const quoteCombine = quote[randomQuote]
    displayQuote.textContent = `"${quoteCombine.text}" - ${quoteCombine.category}`;

}


//New Quote 
function addQuote() {
    const textInput = document.getElementById("newQuoteText");
    const categoryInput = document.getElementById("newQuoteCategory");

    const text = textInput.value.trim();
    const category = categoryInput.value.trim();

    if (text && category) {
        const newAddedquote = {text, category};
        quote.push(newAddedquote);
        displayQuote.textContent = `"${newAddedquote.text}" - ${newAddedquote.category}`;

        textInput.value = '';
        categoryInput.value = '';
    }else {
        alert('Please enter both a quote and a category.');
    }


}
theButton.addEventListener('click', showQuote);

showQuote();

window.addQuote = addQuote;

});