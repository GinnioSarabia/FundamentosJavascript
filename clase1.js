var nombre = 'Ginnio'
var apellido = 'Sarabia'
var edad = 28
var peso = 75

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinisculas = apellido.toLowerCase()
var primeraLetraNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length
var ultimaLetraDelNombre = nombre.charAt(nombre.length - 1)
var nombreCompleto = nombre + ' ' + apellido  
var nombreCompleto2 = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`
var substringNombre = nombre.substr(1, nombre.length-1)

console.log('Hola ' + nombre + ' ' + apellido + "\nMi edad es: " + edad)