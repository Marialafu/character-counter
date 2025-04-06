const textareaToFill = document.getElementById('textarea-to-fill')
const excludeSpaceCheckbox = document.getElementById('exclude-spaces-textarea')
const readingTime = document.getElementById('aprox-reading-time')

let totalCharactersNumber = document.getElementById ('total-characters-number')
let wordCountNumber = document.getElementById ('word-count-number')
let sentenceCountNumber = document.getElementById ('sentence-count-number')


const defineTotalCharactersWithSpaces = () => {
    let readAmountCharacters = textareaToFill.value.length
    return readAmountCharacters
}

const defineTotalCharacters = () => {
    let amountCharacters = ''
    let amountSpaces = ''

    for (const letter of textareaToFill.value){
        if (excludeSpaceCheckbox.checked && letter.includes(' ')){
            amountSpaces++
            amountCharacters++
        } else {amountCharacters++}
    }
    
    let charactersWithoutSpaces = amountCharacters - amountSpaces
    return charactersWithoutSpaces
}

const defineAmountWords = () => {
    let words = ''
    
    for (const letter of textareaToFill.value){
       if (letter.includes(' ') || letter.includes('. ')){
        words++
       } 
    }
   
    if (words === ''){
        return '0'
    } else {return words}
}

const defineAmountSentences = () => {
    //¿si o sí debe terminar en .?
    let sentences = ''
    for (const letter of textareaToFill.value){
        if (letter.includes('.')){
         sentences++
        }
     }

    //por qué en ternario no me deja
    if (sentences === ''){
        return '0'
    } else {return sentences}

}


const defineAllCards = (event) => {
   
    if (excludeSpaceCheckbox.checked){
        totalCharactersNumber.textContent = defineTotalCharacters()
    } else {
        totalCharactersNumber.textContent = defineTotalCharactersWithSpaces()
    }

    wordCountNumber.textContent = defineAmountWords()

    sentenceCountNumber.textContent = defineAmountSentences()
    

    
}
textareaToFill.addEventListener('keyup', defineAllCards)