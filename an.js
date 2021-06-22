function anagrams(word, words) {
    let arr = [];

    for (let i = 0; i < words.length; i++) {
        let sortedWords = words[i].toLowerCase().split("").sort().join("");
        let sortedWord = word.toLowerCase().split('').sort().join('');
        if (sortedWords == sortedWord) {
            arr.push(words[i])
        }

    }

    return arr;
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])// => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) //=> ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy', 'lacer']) //=> []