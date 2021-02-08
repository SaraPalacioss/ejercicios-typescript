/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {
    constructor(
        public nombre: string, 
        public lugar: string
    ) {};
};

class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;
   
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super(nombreReal, 'NYC');
    };
};

const ironman = new Heroe('Ironman', 45, 'Tony');

console.log(ironman);