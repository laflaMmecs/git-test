let mode = 'full'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

//-----------ЗДЕСЬ ЮЗАЕМ ЗАМЫКАНИЯ-------------------
function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}
//----------------
fullBtn.onclick = bindMode('full')
dateBtn.onclick = bindMode('date')
timeBtn.onclick = bindMode('time')

setInterval( update, 1000)

function update() {
    output.textContent = format(mode)
}

//Pure Function:
//Pure Function - функция которая зависит только от входящий параметров

function format(formatMode) {
    const now = new Date()

    switch (formatMode) {
        case 'time': 
            return now.toLocaleTimeString()
        case 'date': 
            return now.toLocaleDateString()
        case 'full':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default:
            return now.toLocaleTimeString()

    }
}