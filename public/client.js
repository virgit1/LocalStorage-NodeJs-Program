console.log('Client-side code running');

if (localStorage.getItem("Keys") == null) {
    lista = []
}else{
    lista = JSON.parse(localStorage.getItem("Keys"))
}

window.onload = function () {
    const button_1 = document.getElementById("1");
    const button_2 = document.getElementById("2");
    const button_3 = document.getElementById("3");
    crear_Lista()

    button_1.addEventListener('click', function (e) {
        console.log('Ezabatu')
        localStorage.clear();
    });
    button_2.addEventListener('click', function (e) {
        console.log('Igo')

        fetch('/',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(lista)
            })

    });

    button_3.addEventListener('click', function (e) {
        console.log('Jaitsi')
        fetch('/click',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(r => r.json()).then(r =>
        {
            let y = JSON.parse(r)
            const currentDiv = document.getElementById("contenido");
            for (const x of y) {
                let newDiv = document.createElement("li")
                newDiv.innerHTML = x.text;
                currentDiv.appendChild(newDiv)
                lista.push({"text": contenido});
                localStorage.setItem('Keys', JSON.stringify(lista))
            }})


    });
}

function crear_Lista(){
    if(localStorage.getItem("Keys") != null){
        let keys = localStorage.getItem("Keys")
        let json = JSON.parse(keys)
        json.forEach(r=>{
        let newDiv = document.createElement("li")
        newDiv.innerHTML = r.text;
        const currentDiv = document.getElementById("contenido");
        currentDiv.appendChild(newDiv)
    })}
}

document.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        let contenido = document.getElementById("Lista").value
        let newDiv = document.createElement("li")
        newDiv.innerHTML = contenido;
        const currentDiv = document.getElementById("contenido");
        currentDiv.appendChild(newDiv)
        document.getElementById("Lista").value = ""
        lista.push({"text":contenido});

        localStorage.setItem('Keys', JSON.stringify(lista))

    }
}, false);

