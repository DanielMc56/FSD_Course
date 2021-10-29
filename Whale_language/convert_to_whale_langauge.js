// There are no consonants. Only vowels excluding “y”.
// The u‘s and e‘s are extra long, so we must double them in our program.

let input = 'How are you?' // change input to test
input = input.toLowerCase();
// console.log(input)

const vowels = ['a', 'e', 'i', 'o', 'u']
const resultArray = []

for (let i = 0; i < input.length; i++) {
  // console.log(input[i])
  for (let j = 0; j < vowels.length; j++) {
    if (vowels[j] === input[i]) {
      resultArray.push(vowels[j])
      if (input[i] === 'e') {
      resultArray.push('e')
    } else if (input[i] === 'u') {
        resultArray.push('u')
    } else {
      resultArray.push[input[i]]
  }
  
  }
}
}
console.log(input + ' in whale language is: ' + resultArray.join('').toUpperCase())
