document.getElementById('main').remove()

let newHeader = document.createElement('h1')
document.head.appendChild(newHeader)

newHeader.className = "victory"
newHeader.id = "victory"

let p = document.createElement('p')
    p.innerHTML = "ALEX is the champion"
newHeader.appendChild(p)
