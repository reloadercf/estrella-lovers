import { estrellas, arregloEstrellas } from '../src/estrellas.js';

describe('Esta colección de test es para el primer ejercicio', () => {
    it("Ejecución de la funcion", () => {
       expect(estrellas(3)).toBe('***');
    })
    it("Es el mismo tamñano de longitud", () => {
        expect(estrellas(3).length).toBe(3)
    })
    it("La Funcion retorna un string",() => {
        expect(typeof(estrellas(3))).toBe("string")
    })
    it("La Funcion es una funcion",() => {
        expect(typeof(estrellas)).toBe("function")
    })
});

describe("Coleccion de test para el segundo ejercicio",() =>{
    it("Ejecución esperada",() => {
        expect(arregloEstrellas(3)).toStrictEqual(["*","**","***"])
    })
    it("Accediendo a la posicion 2 del arreglo deberia ser igual a ***",() => {
        expect(arregloEstrellas(3)[2]).toEqual("***")
    })
    it("Es el mismo tamñano de longitud", () => {
        expect(arregloEstrellas(3).length).toBe(3)
    })
    it("La Funcion retorna un Arreglo",() => {
        expect(typeof(arregloEstrellas(3))).toBe("object")
    })
    it("La Funcion es una funcion",() => {
        expect(typeof(estrellas)).toBe("function")
    })
})