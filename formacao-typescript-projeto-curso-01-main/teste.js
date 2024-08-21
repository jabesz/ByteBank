let num = []

for(let i = 0; i <=9; i++) {
  num[i] = prompt(`Informe o valor ${i + 1}: `)
}

console.log(num.sort((a, b) => b - a))