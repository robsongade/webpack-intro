
import 'src/main.scss'
var span = document.createElement('span')

var h1 = document.createElement('h1')

h1.innerHTML = "Olá mundo, meu nome é Robson!"
span.innerHTML = "Este é apenas um exemplo simples de uma aplicação com webpack e typescript!!!<br /><br /><br />"


var img = document.createElement("img")


img.src = require('src/css/images/webpack-ts.jpg').default

document.body.appendChild(h1)
document.body.appendChild(span)
document.body.appendChild(img);

var module : any


if(module.hot){
    module.hot.accept()
    module.hot.dispose(()=>span.parentNode.removeChild(span))
    module.hot.dispose(()=>h1.parentNode.removeChild(h1))
}