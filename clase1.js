var nombre = 'Ginnio'
var apellido = 'Sarabia'
var peso = 75
var edad = 28

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinisculas = apellido.toLowerCase()
var primeraLetraNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length
var ultimaLetraDelNombre = nombre.charAt(nombre.length - 1)
var nombreCompleto = nombre + ' ' + apellido  
var nombreCompleto2 = `${nombre.toUpperCase()} ${apellido.toUpperCase()}`
var substringNombre = nombre.substr(1, nombre.length-1)

console.log('Hola ' + nombre + ' ' + apellido + "\nMi edad es: " + edad)

edad += 1

console.log(edad)

peso = peso - 2

console.log(peso)

var sandwich = 2

peso = peso + sandwich

console.log(peso)

var jugarAlFultbol = 3

peso = peso - jugarAlFultbol

console.log(peso)

var precioVino = 200.3

var total = precioVino * 3

console.log(total)

total = precioVino * 100 * 3 / 100


total = Math.round(precioVino * 100 * 3)/100


console.log(total)

var totalStr = total.toFixed(2)

//Pizza
var pizza = 8
var persona = 2
var cantidadDePorcionesPorPersona = pizza / persona
