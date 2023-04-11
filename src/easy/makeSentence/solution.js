function fixSentence(sentence) {
    // capitalize the first letter
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    
    // check if there is already some form of punctuation at the end
    if (!/[.?!]$/.test(sentence)) {
      sentence += ".";
    }
    
    return sentence;
  }
  console.log(fixSentence("hello World"));