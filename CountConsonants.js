// Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    let cons = 'bcdfghjklmnpqrstvwxyz';
    return str.toLowerCase().split('').reduce((a,c) => cons.includes(c) ? a + 1 : a, 0);
}