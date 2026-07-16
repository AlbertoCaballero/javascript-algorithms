type Letter = 'A' | 'B' | 'C';
type Digit  = 1 | 2 | 3;

type LetterDigit = `${Letter}${Digit}`;

const test: LetterDigit = "C1";