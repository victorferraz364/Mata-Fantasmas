var widhtBody = 0 
var heightBody = 0
var life = 1
var chrRmng = 10

function sizeFix() {
	heightBody = window.innerHeight
     widhtBody = window.innerWidth
	console.log(widhtBody, heightBody)

}
sizeFix()




function posRnd() {   
    
    if (document.getElementById('idPng')) {
        document.getElementById('idPng').remove()
        
        if (life > 4) {
            window.location.href = "over.html"
          
        } else {
            document.getElementById('lf' + life).src = "img/life_over.png"
            life++
        }
    }
    var posX = Math.floor(Math.random() * widhtBody) - 100
    var posY = Math.floor(Math.random() * heightBody) - 100
    
    posX = posX < 0 ? 0 : posX 
    posY = posY < 0 ? 0 : posY
    console.log(posX, posY)
    

    var png = document.createElement('img')
    png.src = 'img/png_1.jpg'
    png.className = 'caixa'
    png.style.left = posX + 'px'
    png.style.top = posY + 'px'
    png.style.position = 'absolute'
    png.id = 'idPng'
    document.body.appendChild(png) 
    png.onmouseover = function () {
        this.remove()
    }
}
var chr = setInterval(function () {
    chrRmng -= 1

    if (chrRmng < 0) {
        clearInterval(chr)
        window.location.href = 'win.html'
    } else {
        document.getElementById('chr').innerHTML = chrRmng
    }
}, 1000)