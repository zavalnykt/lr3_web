document.getElementById('wordsButton').addEventListener('click', function(){
    let wordsInput = document.getElementById('wordsInput').value;
    let words = inputString.trim().split(/\s+/);
    let wordsInputt = words.length > 0 ? words.length : 0;
    document.getElementById('wordsOutput').textContent = 'К-сть слів: ${wordsInputt}';
});

