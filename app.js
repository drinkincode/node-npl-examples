import natural from 'natural';


const phrase = 'Going to take a sip for the boys while riding a motorcycle'
console.log(phrase + '\n');

// Braking down String into an array
const tokenizer = new natural.WordTokenizer();
const tokenized_phrase = tokenizer.tokenize(phrase)
console.log(tokenized_phrase)

// Stemming- finding the root word... dropping "ing" "ed"... etc
console.log(natural.PorterStemmer.tokenizeAndStem(phrase))


// Hamming 


