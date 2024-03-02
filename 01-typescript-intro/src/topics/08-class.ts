export class Person {
    constructor(
        public name: string,
        public addres: string
    ){}
}
export class Hero extends Person{
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string 

    ){
        super("Ironman","new york");
    }
}
const ironman = new Hero(
    'Armadura', 12,'tony'
)





console.log(ironman);
