let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d")

//
function Circle(x , y , speedX , speedY , radius)
{
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.radius = radius;

    this.draw = function()
    {
        c.beginPath();
        c.arc(this.x, this.y, this.radius ,0, Math.PI * 2 , false);      
        c.fillStyle = "white";
        c.fill();
        c.stroke();
    }

    this.update = function()
    {
        //
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0)
        {
            this.speedX = -this.speedX;
        }
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0)
        {
            this.speedY = -this.speedY;
        }
    
        this.x+= this.speedX;
        this.y+= this.speedY;

        this.draw();
    }
}




var circleArray = [];

for(let i = 0;i < 200;i++)
{   
    var radius = 3;
    // (innerWidth - radius * 2) + radius ova tuke e za sekogas dolzinata na x koordinato da ni bidi pogolema od samio radius na 
    //krugo levo, i desno da bidi sekogas - radiuso na samio krug za da ne se prikazuva do pola nekogas "ako krugojte bida golemi"
    var x = Math.random() *  (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    //Da oda krugojte napred i nazad ako daj pogolem random brojo od 0.8 odzemi 0.5 ce daj pozitiven broj
    //ako daj 0.2 odzemi 0.5 da daj nekogas i negativen,za da ne se dviza non stop samo nanapred na x i na y
    var speedX = (Math.random() - 0.5) * 1;
    var speedY = (Math.random() - 0.5) * 1;
    circleArray.push(new Circle(x , y , speedX , speedY , radius))
}


function animate()
{
    requestAnimationFrame(animate);
    //Cisti sekogas prethodnio
    c.clearRect(0 , 0 , innerWidth , innerHeight);

    for(let i = 0;i < circleArray.length;i++)
    {
        circleArray[i].update();
    }
}

animate();
