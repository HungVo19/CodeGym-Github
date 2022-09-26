function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' + ' height="' + this.size + '"' + ' src="' +
            this.image + '"' + ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;"  alt="Bird"/>';
    }

    this.moveRight = function () {
        this.left += this.speed;
    }
    this.moveLeft = function () {
        this.left -= this.speed;
    }
}

let hero = new Hero('flappybird.gif', 10, 10, 150, 50);

function start() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }


    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500)
}

start();