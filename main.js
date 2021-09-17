

document.getElementById("Search-button").onclick = function () {
    let word = document.getElementById("word.input").value;

    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
        .then(response => response.json())
        .then(data => {

            let definicion = document.getElementById("definition");
            console.log(data);
            Object.keys(data[0].meanings.map((definitions) => {
                definitions.definitions.forEach(definition => {

                    let option = document.createElement("option");
                    option.innerHTML = definition.definition;
                    definicion.appendChild(option);
                    console.log(definition.definition);
                });
            }))

            let usos = document.getElementById("partOfSpeech");
            Object.keys(data[0].meanings.map((definitions) => {
                definitions.definitions.forEach(partOfSpeech => {

                    let option = document.createElement("option");
                    option.innerHTML = definitions.partOfSpeech;
                    usos.appendChild(option);
                    console.log(definitions.partOfSpeech);
                });
            }));

            let ejemplo = document.getElementById("example");
            Object.keys(data[0].meanings.map((definitions) => {
                definitions.definitions.forEach(example => {

                    let option = document.createElement("option");
                    option.innerHTML = example.example;
                    ejemplo.appendChild(option);
                    console.log(example.example);
                });
            }))

            let audioo = document.getElementById("word.input").value;
            fetch('https://ssl.gstatic.com/dictionary/static/sounds/20200429/' + audioo + '--_gb_1.mp3')
                .then(response => response.json())
                .then(data => {
                    document.getElementById("audi").setAttribute("src", data[0].audio);
                });
        });

}