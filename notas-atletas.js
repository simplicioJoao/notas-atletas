let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ]

   atletas.forEach(function(atleta) {
    console.log(`Atleta: ${atleta.nome}`)

    function compareNumbers(a, b) {
        return a - b;
      }


    atleta.notas.sort(compareNumbers)
    console.log(`Notas Obtidas: ${atleta.notas.join(", ")}`)

    let notasValidas = atleta.notas.slice(1, 4)
    let somaNotas = 0

    notasValidas.forEach(function(nota) {
        somaNotas += nota
    })
    
    let media = somaNotas / notasValidas.length
    console.log(`Média Válida: ${media}\n`)
   })