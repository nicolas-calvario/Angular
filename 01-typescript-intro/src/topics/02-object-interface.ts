let skills: string[] =['Bash','Counter','Healing']
interface Character{
    name: string
    hp :number
    skills: string[]
    homethown?:string

}
const strider: Character={
    name:"Nicolas",
    homethown:"Quechult",
    hp:300,
    skills: skills
}
strider.homethown ='Quechultenango'
console.table({strider})
export{}