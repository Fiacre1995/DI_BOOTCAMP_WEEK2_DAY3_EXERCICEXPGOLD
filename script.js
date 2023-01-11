/*Exercice 1*/

let numbers = [123, 8409, 100053, 333333333, 7]

for(let number of numbers){

    if(number % 3 == 0){
        console.log("true");
    }else{
        console.log("false");
    }
}

/* Exercice 2*/

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }


let nom = prompt("Veuillez entrer votre nom");
for(let compteur1=0; compteur1 > 4; compteur1++){
    if(guestList[compteur1] == nom){
        console.log(nom);
    }else{
        console.log("introuvable")
    }
}


/* Exercice 3*/

let age = [20,5,12,43,98,55];
let somme =0;
let AgePlusEleve =0;

//1: somme des ages
for (let pas = 0; pas < 5; pas++){
    somme = somme + age[pas];
}
console.log(somme);

//2: Comparaison des ages
for (let compteur = 0; compteur < 5; compteur++){

    if(AgePlusEleve < age[compteur]){
        AgePlusEleve = age[compteur];
    }else{
        AgePlusEleve = AgePlusEleve;
    }
}
console.log(AgePlusEleve);