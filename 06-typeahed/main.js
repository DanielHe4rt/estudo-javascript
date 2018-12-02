document.getElementById('search').addEventListener('keyup',evt => {
    let input = evt.target.value
    let resultTable = document.getElementById('result')
    
    fetch('https://restcountries.eu/rest/v2/name/' + input + "?fullText=false")
        .then((res) => res.json())
        .then(res => {
            if(res.length == 0){
                return false;
            }
            resultTable.textContent = ''
            res.forEach(element => {
                console.log(element)
              let frag = document.createDocumentFragment();
              let name = document.createElement('div'), population = document.createElement('div')
              name.className = 'cell',population.className = "cell"
              name.textContent = element.name;
              population.textContent = element.population
              frag.appendChild(name)
              frag.appendChild(population)
              resultTable.appendChild(frag)
            });
        })
        .catch(err => {
            console.log(err)
        })
})