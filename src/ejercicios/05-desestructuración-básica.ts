/*
    ===== Código de TypeScript =====
*/

import { isConstructorDeclaration } from "typescript";

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
};

interface Detalles {
    autor: string;
    anio: number;
};

const reproductor : Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    },
};


const {volumen, segundo, cancion, detalles} = reproductor;

const {autor} = detalles;

// console.log('El volumen actual es de: ', volumen);
// console.log('El segundo actual es de: ', segundo);
// console.log('La canción actual es de: ', cancion);
// console.log('El autor es actual es de: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = dbz;

console.log('Personaje 1:', );
console.log('Personaje 2:', );
console.log('Personaje 3:', p3);