console.log("¡Hola, mundo!");
function rand(n){
    // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
     return(Math.floor(Math.random() * n + 1 ));
    }
    //guardas imagenes en el array
    var cambia_imagen = new Array();
    cambia_imagen[0] = "conta.jpg";
    cambia_imagen[1] = "contamina.jpeg";
    cambia_imagen[2] = "-Contaminacion.jpeg";
    cambia_imagen[3] = "2019070100405669050.jpg";
    cambia_imagen[4] = "descarga.jpeg";
    cambia_imagen[5] = "Internet-y-la-nube-tambien-contaminan-la-atmosfera.webp";
    cambia_imagen[6] = "contaminacion.webp";
    cambia_imagen[7] = "img_207053.jpg";
    cambia_imagen[8] = "ordenador-portada-BOLETIN-1.jpg";
    cambia_imagen[9] = "pollution-numerique-825x293.png";
   
    //la función para que al clickear establezca el source del tag imagem que tiene id "ia" (Imagen aleatoria)
    //como no son tantas, puede que alguna vez se repita 2 veces la misma
    //incluso, si usamos numeros para las imágenes, la script puede ser más sencilla
    
    
    function cambiar(){
         document.getElementById("ia").src = cambia_imagen[rand(9)-0];
    }
    