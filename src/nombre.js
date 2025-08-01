//declaration d'un nb
const monnombre = 45;

console.log(monnombre);

console.log(Number(10));
console.log(new Number(10));

const dec = 15.46;
console.log(dec);
console.log((0.1 * 10 + 0.2 * 10) / 10);

// 1puissance6
const prix = 1e6;
console.log(prix);

//creer nombre à partir chaine caractere
console.log(Number("44"));
// convertir un nombre avec un plus
console.log(+"48");
console.log(1 + +"49");

console.log("dans un base donnée");
console.log(parseInt("11", 2));
console.log(parseFloat("11.55"));

// convertir un nombre avec un plus
const a = 1.5555555;
const b = new Number(1);

console.log(a);
console.log(b);

console.log(parseFloat(a.toFixed(2)));

let liste = [1, 2, 3];
let texte = liste.toString();
console.log(texte);

const c = Number("123azaz");
console.log(Number.isNaN(c));

//objet natif  math
const d = Math.pow(2, 3);
console.log(d);

const e = Math.PI;
console.log(e);

//arrondir au sup
const f = Math.ceil(1.2);
console.log(f);

//arrondir à l"inf
const g = Math.floor(1.2);
console.log(g);

//arrondir au plus proche
const h = Math.round(1.25);
console.log(h);

//retourne le max
const h1 = Math.max(10, 8, 2, 1, 4);
console.log(h1);

//retourne le max
const h2 = Math.min(10, 8, 2, 1, 4);
console.log(h2);

//genere un nb decimal entre 0 et 100
const h3 = Math.round(Math.random() * 100);
console.log(h3);

//genere un nb decimal entre 0 et 5
const h4 = Math.round((Math.random() * 10) % 5);
console.log(h4);
