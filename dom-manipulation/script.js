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

function showRandomQuote() {
    const randomQuote = Math.floor(Math.random() * quote.length);
    const quoteCombine = quote[randomQuote]
    displayQuote.innerHTML = `"${quoteCombine.text}" - ${quoteCombine.category}`;

}

//Add form section
function createAddQuoteForm() {
    const formContainer = document.createElement('div');

    const textInput = document.createElement('input');
    textInput.id = 'newQuoteText';
    textInput.type = 'text';
    textInput.placeholder = 'Enter a new quote';
    formContainer.appendChild(textInput);

    const categoryInput = document.createElement('input');
    categoryInput.id = 'newQuoteCategory';
    categoryInput.type = 'text';
    categoryInput.placeholder = 'Enter quote category';
    formContainer.appendChild(categoryInput);

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Add Quote';
    submitButton.type = 'button';
    submitButton.addEventListener('click', addQuote);
    formContainer.appendChild(submitButton);

    // Append the form container to the body or a specific container element
    document.body.appendChild(formContainer);
}

//New Quote 
function addQuote() {
    const newText = document.getElementById('newQuoteText').value.trim();
        const newCategory = document.getElementById('newQuoteCategory').value.trim();

    if (newText && newCategory) {
        const newAddedquote = {text: newText, category: newCategory};
        quote.push(newAddedquote);
        displayQuote.innerHTML = `"${newAddedquote.text}" - ${newAddedquote.category}`;

        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';
    }else {
        alert('Please enter both a quote and a category.');
    }


}
theButton.addEventListener('click', showRandomQuote);

showRandomQuote();

window.addQuote = addQuote;

});