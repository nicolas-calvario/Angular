function classDecorator() {
    
}
@classDecorator
class SuperClass{
    public myProperty :string='ABCD';
    print(){
        console.log('Hola ', this.myProperty);
        
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);

