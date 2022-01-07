var cv = document.getElementById("canvas");
var ctx = cv.getContext('2d');
var z;

var fondo =
{
    url: "img/tile.png",
    cargaOK: false
};

var vaca = 
{
    url: "img/vaca.png",
    cargaOK: false
};

var pollo = 
{
    url: "img/pollo.png",
    cargaOK: false
};

var cerdo = 
{
    url: "img/cerdo.png",
    cargaOK: false
};

/* creamos objetos pollo, vaca, cerdo.  Cargamos y dibujamos */

pollo.image = new Image();
pollo.image.src = pollo.url;
pollo.image.addEventListener("load", cargarPollo);

cerdo.image = new Image();
cerdo.image.src = cerdo.url;
cerdo.image.addEventListener("load", cargarCerdo);

vaca.image = new Image();
vaca.image.src = vaca.url;
vaca.image.addEventListener("load", cargarVaca);

/* creamos objeto 'image' para el fondo */

fondo.image = new Image();
fondo.image.src = fondo.url;
fondo.image.addEventListener("load", cargarFondo);

 /* funcion para dibujar el fondo, vaca, pollo y cerdo en el canvas */

 function cargarPollo()
 {
  pollo.cargaOK = true;
  dibujar()
 }

 function cargarCerdo()
 {
  cerdo.cargaOK = true;
  dibujar()
 }

function cargarVaca()
{
 vaca.cargaOK = true;
 dibujar()
}

function cargarFondo()
{
    fondo.cargaOK = true;
     dibujar()
 
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        ctx.drawImage(fondo.image, 0,0);
    }
    if (vaca.cargaOK)
    {   for(var i = 0; i < 10;i++)
        {
            ctx.drawImage(vaca.image, aleatorio(0,420), aleatorio(0,166));
        }
        
    }

    if(fondo.cargaOK)
    {
        for(var i = 0; i < 10; i++)
            {
             ctx.drawImage(pollo.image, aleatorio(0,420), aleatorio(166,333));
            }
    }

    if(fondo.cargaOK)
    {
        for(var i = 0; i < 10; i++)
        {
            ctx.drawImage(cerdo.image, aleatorio(0,333), aleatorio(333,420));

        }
    }
}

/* ciclo usando la funcion de numeros aleatorios para obtener distintos numeros*/



/* funcion para obtener un numero aleatorio entre un min y un max */

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
    return resultado;
}

/* todo lo que hace funcionar el personaje movible*/



var keyCode;
var pigman = 
{
    url: "img/pigman.png",
    cargaOK: false
};

var teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

pigman.image = new Image();
pigman.image.src = pigman.url;
pigman.image.addEventListener("load", cargarPigman);

document.addEventListener("keydown", dibujarPigman);

function cargarPigman()
{
    dibujarPigman()    
}

var x = 100;
var y = 100;
var movimiento = 25;


function dibujarPigman(evento)
{ 

        if(fondo.cargaOK == true)
        {
            switch(evento.keyCode)
    {
        

        case teclas.UP:
            ctx.drawImage(pigman.image, x, y);
            y = y - movimiento;
        break

        case teclas.DOWN:
            ctx.drawImage(pigman.image, x, y);
            y = y + movimiento;
        break

        case teclas.LEFT:
            ctx.drawImage(pigman.image, x, y);
            x = x - movimiento;
        break

        case teclas.RIGHT:
            ctx.drawImage(pigman.image, x, y);
            x = x + movimiento;
        break
    }   
        }
}

