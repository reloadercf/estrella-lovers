//Funcion del primer ejercicio
export function estrellas(numero){
    let string = ""
    for(let i = 0; i<numero; i++){
        string +="*"
    }
    return string;
}

//Funcion del segundo ejercicio
export function arregloEstrellas(numero){
    let array = []
    for(let i = 0; i<numero; i++){
        let elementArray=""
        for(let stars=i;stars>=0;stars--){
            elementArray+="*"
        }
        array.push(elementArray)
    }
    return array;
}