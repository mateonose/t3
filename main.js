canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_array = ["marte superficie.jpeg", "marte 2.jpg", "marte 3.jpg"];
random_number = Math.floor(Math.random()*3);
background_image = nasa_array[random_number];

//Define el ancho y alto de la imagen del explorador.
rover_width = 100;
rover_height = 90;


rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Crea la función "add()"
 function add()
 {
	background_imgTag  = new Image();   
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag  = new Image();   
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;   
  
                                         
 }
 function uploadBackground()
 {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
 }
 function uploadrover()
 {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
 }



window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
		if (keyPressed =='38')
        {
            up();
            console.log("arriba");
        }
    


     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
     if (keyPressed =='40')
     {
         down();
         console.log("abajo");
     }


     if (keyPressed =='37')
     {
         left();
         console.log("izquierda");
     }
     if (keyPressed =='39')
        {
            right();
            console.log("derecha");
        }

    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}
    function up()
    {
        if (rover_y >= 0)
        {
            rover_y = rover_y - 10;
            console.log("posicion en y = " + rover_y);
            uploadBackground();
            uploadrover();
        }
    }
    function down()
    {
        if (rover_y <= 500)
        {
            rover_y = rover_y + 10;
            console.log("posicion en y = " + rover_y);
            uploadBackground();
            uploadrover();
        }
    }
    function left()
    {
        if (rover_x >= 0)
        {
            rover_x = rover_x - 10;
            console.log("posicion en x = " + rover_x);
            uploadBackground();
            uploadrover();
        }
    }
    function right()
    {
        if (rover_x <= 700)
        {
            rover_x = rover_x + 10;
            console.log("posicion en x = " + rover_x);
            uploadBackground();
            uploadrover();
        }
    }





