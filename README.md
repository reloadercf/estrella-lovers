# Bienvenida a mundo estrella    
![mariobros](https://i2.wp.com/data.whicdn.com/images/220555186/original.gif)
### Antes de empezar
Recuerda que puedes hacer un fork de este proyecto y clonarlo en tu computadora.  
-Una vez realizado el fork recuerda instalar las dependecias de nodejs usando el comando:  
`npm install`  
-Para correr el proyecto recuerda usar:  
`npm start`
-Por ultimo accede a la dirección `localhost:5000` para entrar

#### Ahora si ultimo ultimo !!
-Para el primer y segundo ejecicio recuerda abrir y editar solo tu archivo **estrellas.js**
>también encontratas  un archivo **script.js** el cual **NO** debes modificar.js

## Primer ejercicio del GYM
Comenzamos!!!
En este primer ejercicios deberas escribir una funcion llamada `estrella` en tu archivo **estrellas.js** la cual recibe un parametro de un numero el cual sera el numero de estrellas y deberas retornar una cade con las estrellas.
Ejemplo:  
> Recibe: ***3***
> y retorna una cadena con:`***`  

Donde `***` es el numero de estrellas devueltas en la función, las cuales se van a imprimir en el DOM cuando la usuaria introdusca un numero y haga click en el boton `Dibujar`  
Como resultado tu DOM se vera así:
![dom](https://user-images.githubusercontent.com/6140157/126437893-96714255-d967-47b1-9c0b-407c68c3b470.png)

Si logras imprimir las estrellas en el DOM lo haz logrado!!

#### Consideraciones adicionales:
-Recuerda usar tu consola como una herramienta :)
-La cadena debe contener solo `*`(asteriscos) para representar el numero de estrellas.
-Considera que el valor de ***retorno*** de la funcion estrellas tiene que ser un ***string***
-Recuerda que la manipulación del DOM ***ya esta escrita***, solo debes codear la logica en tu ***funcion estrellas*** para retornar el string.


## Segundo ejercicio
Para este segundo ejercicio deberas crear una funcion llamada: ***arregloEstrellas*** la cual recibira el mismo numero que haz escrito como parametro la cual debera retornar un arreglo y adentro tendra cadenas con las estrellas sumadas consecutivamente ejemplo:
> Recibe: ***3***
> y retorna una Arreglo de 3 dimenciones con las siguientes cadenas: ["`*`","`**`","`***`"]

Como resultado final cuando la usuaria le de click al boton ***Dibujar Arreglo*** tu DOM lucira de esta forma:
![arrayDom](https://user-images.githubusercontent.com/6140157/126439800-31442d75-b8e6-4bf6-bb61-829a4f3f0521.png)

#### Consideraciones adicionales:
-Considera que el valor de ***retorno*** de la funcion arregloEstrellas tiene que ser un ***array***
-El arreglo debe contener cadenas (***string***) unicamente con `*`(asteriscos) para representar el numero de estrellas.
-Recuerda que la manipulación del DOM ***ya esta escrita***, solo debes codear la logica en tu ***funcion arregloEstrellas*** para retornar el arreglo.