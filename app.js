const containerEl = document.querySelector('.container')

const careers = ["Programador", "Poliglota", "Administrador de Empresas", "Emprendedor"]

let careerIndex = 0


let characterIndex = 0

updateText()


function updateText() {
characterIndex++

    containerEl.innerHTML = `

<h1>Mi nombre es Max soy un ${careers[careerIndex].slice(0,characterIndex)}</h1>
  

`

if (characterIndex === careers[careerIndex].length) {
    careerIndex++
    characterIndex = 0
}

if (careerIndex === careers.length) {
    careerIndex = 0
}
setTimeout(updateText,400)


}


