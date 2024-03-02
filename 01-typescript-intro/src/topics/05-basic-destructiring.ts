interface AudioPlayer {
    volumen: number
    duration: number
    song: string
    details: Details

}

interface Details {
    author: string
    year: number
}

const audioPlayer: AudioPlayer = {
    volumen: 50,
    duration: 33,
    song: "Una mas",
    details: {
        author: "Nicolas",
        year: 2023
    }
}

//Desestructuracion 
const{ author }    = audioPlayer.details;
console.log('Song:', audioPlayer.song);
console.log('Author:', audioPlayer.details.author);
console.log('Author:', author);


const dbz : string[]= ['Vegeta','Goku', 'Gohan']
const [,,gohan = 'not found'] : string[]= ['Vegeta','Goku', 'Gohan']
console.log('Personaje 3:',dbz[4]|| 'Personaje no encontrado');
console.log('Personaje 3: ', gohan);




export { }