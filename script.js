//your code here
const textbox = document.getElementById('evaluatedText');
const letterCountElement = document.getElementById('letterCount');
 
textbox.addEventListener('input', () => {
    const letterCount = textbox.value.length;
 
    letterCountElement.textContent = letterCount;
});