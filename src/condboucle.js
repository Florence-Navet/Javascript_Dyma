const name = "julien";

// console.log(!!condition);

if (name == "Julie") {
  console.log("bonjour jean");
} else if (name == "Paul") {
  console.log("bonjour Paul");
} else {
  console.log(`Bonjour ${name} ! `);
}

// quand on a une seule instruction

if (name === "tristan") console.log("bon app Tristan");
else if (name === "quentin") console.log("a dimanche");
else console.log("plage !");

//si on utilise une valeur pour tester un if elle  est convertie en booleen
// opérateur ternaire

console.log("valeur longue");

const age = 15;

let isMajor;

if (age >= 18) {
  isMajor = true;
} else {
  isMajor = false;
}

console.log(isMajor);

//l'operateur ternaire est le seul qui agisse sur trois éléments
// on peut le remplacer par
console.log("valeur ternaire");
const age1 = 2;

const status = age1 >= 18 ? "majeur" : age1 <= 2 ? "baby" : "mineur";

console.log(status);

const age3 = 2;
const statut = age3 > 18 ? "Majeur" : age3 > 12 ? "Adolescent" : "Enfant";
console.log(statut); // "Enfant"

//switch case
const roues = 9;
let vehiculeType;

switch (roues) {
  case 2:
    vehiculeType = "moto";
    break;
  case 4:
    vehiculeType = "voiture";
    break;
  default:
    vehiculeType = "camion";
    break;
}

console.log(vehiculeType);

const age4 = 18;
switch (age4) {
  case 21:
    console.log("Tu peux commencer à boire de l’alcool aux Etats-Unis.");
    break;
  case 18:
    console.log("Tu peux commencer à boire de l’alcool en France.");
    break;
  case 16:
    console.log("Tu peux commencer à boire de l’alcool à Cuba.");
    break;
  case 14:
    console.log("Tu peux commencer à boire de la bière en Allemagne.");
    break;
  default:
    console.log("Rien pour toi cette année.");
}

const ag5 = 18;
switch (ag5) {
  case 21:
    console.log("Tu peux boire de l’alcool aux Etats-Unis.");
  case 18:
    console.log("Tu peux boire de l’alcool en France.");
  case 16:
    console.log("Tu peux boire de l’alcool à Cuba.");
  case 14:
    console.log("Tu peux boire de la bière en Allemagne.");
    break;
  default:
    console.log("Rien pour toi cette année.");
}

const pays = "France";
switch (pays) {
  case "France":
  case "Allemagne":
  case "Italie":
  case "Espagne":
    console.log("Tu es européen !");
    break;
  case "Corée":
  default:
    console.log("Tu n’es pas européen.");
}

// boucles
console.log("boucle avec break");
for (let i = 0; i < 3; i++) {
  console.log(i);
  if (i == 1) {
    break;
  }
}
console.log("out");

console.log("boucle avec continue");
for (let i = 0; i < 3; i++) {
  if (i == 1) {
    continue;
  }
  console.log(i);
}
console.log("out");

//boucle while
console.log("boucle while");
let i = 0;
let j = 9;
while (i < 10) {
  console.log(i);
  i++;
}
console.log("out");

//do while
console.log("boucle do while");
do {
  console.log(j);
  j++;
} while (j < 10);
console.log("out");
