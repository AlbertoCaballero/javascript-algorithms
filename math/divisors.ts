/** Returns a list of all valid whole divisors */
const divisors = (n: number) => {
    let divs = [];
    for (let i = 0; i <= n; i++) {
        if (n % i == 0) {
            divs.push(i);
        }
    }
    return divs;
}

console.log(`Divisors of ${5} are ${divisors(5)}`);
console.log(`Divisors of ${10} are ${divisors(10)}`);
console.log(`Divisors of ${25} are ${divisors(25)}`);
