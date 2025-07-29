// console.log("Hello, world !!");

// console.error("123");
// console.info("test");
// console.warn("test warning");
// console.log("test log");

// console.time("test");
// console.timeEnd("test");

// console.table(["chat", "chien", "poisson"]);

// console.assert(true, "Bonjour 1 !");
// console.assert(false, "Bonjour 2 !");

// //compter le nb d'exécution :
// //Nous "étudions les boucles en
// for (let i = 0; i < 10; i++) {
//   console.count("compteur");
// }

//declaration d'une variable nb, lettre _ et $
//camelcase : fistName : ici camelcase
//pascalcase : FirstName
var firstName;

//initialisation
firstName = 1;
console.log(firstName);
var myvar;
var myvar1;
var myvar2;

myvar = 123;
myvar1 = 55;
myvar2 = 303;

console.log(myvar, myvar1, myvar2);

let name = "Julien";
console.log(name);

//on ne peut pas reassigner les constantes
const name1 = "jean";

const user = {
  name: "tristan",
};

user.name = "kevin";

console.log(user);

// const > let > var
//pb 1 confusion dans laes blocs
var x = 1;
if (true) {
  var x = 2; // mme variable car sa portée n'est pas cele du bloc
  console.log(x);
}
console.log(x);
// pb portée n'est pas restreinte aux blocs {}
var a = 1;
var b = 2;
if (a === 1) {
  var a = 3; // portee globale
  let b = 4; // portee est celle du bloc
  console.log(a);
  console.log(b);
}
console.log(a);
console.log(b);
console.log("====================");
//pb 3 : pas d'erreur en cas de declaration multiples
var i = 1;
var i = 2;
var ajouter = function (a, b) {
  return a + b;
};
var ajouter = function (a, b) {
  return a + b;
};
console.log(a + b);

console.log("====================");
// Problème 4 : problème des boucles avec de l'asynchrone :
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}
