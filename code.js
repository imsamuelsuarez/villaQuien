var cv = document.getElementById("canvas");
var ctx = cv.getContext('2d');
var z;

var cargaOK = false;

var url = 
{
    vaca:"img/vaca.png",
    pollo:"img/pollo.png",
    cerdo:"img/cerdo.png",
    fondo: "img/tile.png"
};

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

/* creamos objetos pollo, vaca, cerdo.  Cargamos y dibujamos */


vaca.image = new Image();
vaca.image.src = vaca.url;
vaca.image.addEventListener("load", cargarVaca);

/* creamos objeto 'image' para el fondo */

fondo.image = new Image();
fondo.image.src = fondo.url;
fondo.image.addEventListener("load", cargarFondo);

 /* funcion para dibujar el fondo, vaca, pollo y cerdo en el canvas */



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
    {   for(var i=0;i<10;i++)
        {
            ctx.drawImage(vaca.image, aleatorio(0,420), aleatorio(0,420));
        }
        
    }
}

/* ciclo usando la funcion de numeros aleatorios para obtener distintos numeros*/

for(var i=0; i<10; i++)
{
    z = aleatorio(1,500);
    
}

/* funcion para obtener un numero aleatorio entre un min y un max */

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min
    return resultado;
}

