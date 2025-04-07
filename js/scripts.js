const textareaToFill = document.getElementById('textarea-to-fill');
const excludeSpaceCheckbox = document.getElementById('exclude-spaces-textarea');
const readingTime = document.getElementById('aprox-reading-time');

let totalCharactersNumber = document.getElementById('total-characters-number');
let wordCountNumber = document.getElementById('word-count-number');
let sentenceCountNumber = document.getElementById('sentence-count-number');

const defineTotalCharactersWithSpaces = () => {
  let readAmountCharacters = textareaToFill.value.length;
  return readAmountCharacters;
};

const defineTotalCharacters = () => {
  let amountCharacters = 0;
  let amountSpaces = 0;

  for (const letter of textareaToFill.value) {
    if (excludeSpaceCheckbox.checked && letter === ' ') {
      amountSpaces++;
      amountCharacters++;
    } else {
      amountCharacters++;
    }
  }

  let charactersWithoutSpaces = amountCharacters - amountSpaces;
  return charactersWithoutSpaces;
};

const defineAmountWords = () => {
  let amountWords = 0;
  let words = textareaToFill.value.split(' ');
  amountWords = words.length;
  console.log(words);

  return amountWords;
};

const defineAmountSentences = () => {
  let sentences = 0;
  for (const letter of textareaToFill.value) {
    if (letter === '.') {
      sentences++;
    }
  }

  return sentences;
};

const defineAllCards = () => {
  if (excludeSpaceCheckbox.checked) {
    totalCharactersNumber.textContent = defineTotalCharacters();
  } else {
    totalCharactersNumber.textContent = defineTotalCharactersWithSpaces();
  }

  wordCountNumber.textContent = defineAmountWords();

  sentenceCountNumber.textContent = defineAmountSentences();
};
textareaToFill.addEventListener('input', defineAllCards);
