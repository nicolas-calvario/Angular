function addNumbers(a: number, b: number) {
    console.log('Pirmer funcion')
    console.log(a + b);

}
interface Character {
    name: string;
    hp: number;
    showHp: () => void
}
const healCaracter = (characer: Character, amount: number) => {
    characer.hp += amount
}


addNumbers(12, 20)

const strider: Character = {
    name: 'Nicolas',
    hp: 300,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);

    },
}
healCaracter(strider,300)
strider.showHp();
export { }