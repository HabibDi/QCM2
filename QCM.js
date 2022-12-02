//Objet : deux manières de rajouter un attribut :

const object = {
    greeting: "hello"
}

const saluto = "ciao"

object.salutation = "salut"
object.saluto = saluto



//Objet : comment boucle-t-on sur un objet ? 


//Objet : rajouter deux méthode de 2 manières différentes : 

function greet() {
    console.log(this.greeting)
}
object.greet = greet


object.salue = function () {
    console.log(this.salutation)
}

object.greet()
object.salue()

//Objet : à partir de l'objet suivant, renvoyez un tableau comportant uniquement les clés de l'objet :
const obj = {
    width: '10px',
    height: '10px',
    color: 'red'
}

console.log(Object.keys(obj))


//Class : écrivez une class (prenom, nom, age) et instanciez vous !

class Person {
    constructor(prenom, nom, age) {
        this.prenom = prenom,
            this.nom = nom,
            this.age = age
    }
}
// const habib = new Person("Habib", "Diallo", 32)
// console.log(habib)


//Ecrivez une sous-classe (possible de réutiliser la classe ci dessus)

class FamilyMember extends Person {
    constructor(prenom, nom, age, role) {
        super(prenom, nom, age)
        this.role = role
    }
}

const habib = new FamilyMember("Habib", "Diallo", 32, "Père")
console.log(habib)

//Les 4 cas où la console renvoie undefined 

let first
console.log(first) //La variable first est déclarée sans qu'aucune valeur ne lui soit attribuée
console.log(habib.voiture) //La propriété voiture n'existe pas dans l'objet habib
console.log(6 * "bonjour")
