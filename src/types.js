//string
console.log("====String======");
const name = "jean";
console.log(typeof name);
console.log("=====Age=======");
const age = 18.5;
console.log(typeof age);
console.log("=====Null=======");
const hobbies = null;
console.log(typeof hobbies);
console.log("=====undefined=======");
let action;
console.log(typeof action);
console.log("=====symbole=======");
let sym = Symbol();
console.log(typeof sym);
console.log("=====boolean=======");
let actif = true;
console.log(typeof true);

console.log("=====objet litteral=======");
const ville = {
  name: "Paris",
  state: "France",
};
console.log(typeof ville);

console.log("=====fonction=======");
const greetings = function () {
  console.log("hello");
};
console.log(typeof greetings);

console.log("=====date=======");
const today = new Date();

console.log(typeof today);

console.log("=====Array=======");
const arr = [1, 2, 3];
console.log(typeof arr);

//Assignement ( associativité puis précédence)

//conversion implicite - coercion
console.log("conversion");
let d = 1;
let e = "2";
console.log(String(d));
console.log(`L'addition de d + e est : ${d + e}`);

//conversion en booleen
Boolean({}); // true
Boolean([]); // true
Boolean(Symbol()); // true
Boolean(function () {}); // true
Boolean("test"); // true
Boolean(22); // true
Boolean(""); // false
Boolean(0); // false
Boolean(NaN); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(false); // false

//conversion en nombre
Number(null); // 0
Number(undefined); // NaN
Number(true); // 1
Number(false); // 0
Number(" 22 "); // 22
Number("-12.32"); // -12.32
Number(""); // 0
Number(" 55s "); // NaN
Number(42); // 42
// Number(Symbol("bonjourl")); // TypeError

//opérateur de comparaison === si c'est pas le meme type c'est pas égale
console.log("opérateur de comparaison");
let a = 1,
  b = 1;

console.log(1 === "1");

//!a convertie en booleen et donnée la valeur opposé
// et le double !!a réinverse
console.log(!a);
console.log(!!a);

console.log(false & true);

if (a && b) {
  console.log("ok");
}

//passage par valeur et reference
console.log("copie par valeur");
let v = 1;
let w = v;

console.log({ v, w });
w += 3;
console.log({ v, w });

console.log("copie par reference");
let x = { y: 1 };
let z = x;

z.y = 2;
console.log(x);
console.log(z);

// Copie par valeur (types primitifs comme les nombres, chaînes, booléens)
console.log("Copie par valeur");

let a1 = 10;
let b1 = a1; // b reçoit une copie de la valeur de a

console.log("Avant modification : ", { a1, b1 });

b1 = 20; // on modifie b, mais a reste inchangé

console.log("Après modification : ", { a1, b1 });

// Copie par référence (objets, tableaux, fonctions)
let obj1 = { nombre: 5 };
let obj2 = obj1;

console.log("Avant modification :", JSON.parse(JSON.stringify({ obj1, obj2 })));

obj2.nombre = 15;

console.log("Après modification :", JSON.parse(JSON.stringify({ obj1, obj2 })));

// opérateurs cohalescence des null
const user = {
  name: "julien",
};

let username = user.name;
console.log(username);

const user1 = {};

let username1 = user1.name || "tristan";
console.log(username1);

const user2 = {};

let username2 = 0 ?? "Kevin";

username && console.log(username2);
