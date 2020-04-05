var persona = {
    nombre: 'Ginnio',
    apellido: 'Sarabia',
    edad: 28
}

function imprimirNombreEnMayusculas(n) {
    n = n.toUpperCase()
    console.log(n)
}

imprimirNombreEnMayusculas(persona.nombre)

function cumpleanos(persona) {
    return {
        ...persona,
        edad : persona.edad + 1
    }
}

