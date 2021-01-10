accounts = [[1,2,3],[4,5,6],[7,8,9]]

console.log(accounts)
console.log(Math.max(...accounts.map(x => x.reduce((a,b) => a + b))))
console.log(max_wealth(accounts))

function max_wealth(accounts) {
  return Math.max(
    ...accounts.map(
      x => x.reduce(
        (a,b) => a + b
      )
    )
  )
}
