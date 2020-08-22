var fs = require('fs')

window.onload = function () {
    var btn = this.document.querySelector('#btn')
    var baby = this.document.querySelector('#baby')
    btn.onclick = function () {
        fs.readFile('demo.txt', (err, data) => {
            baby.innerHTML = data
        })
    }
}