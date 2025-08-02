console.log("Declaration chaine de caractere");
const a = "soleil";

const b = String("lune 55");

const c = new String("terre");

// 5.5.toFixed()

console.log(a);
console.log(b);
console.log(c);

const d = 'astre: "soleil"';
const e = "astre et " + c;
const f = "astre et \n" + c;
console.log(d);
console.log(e);
console.log(f);

/**
 *
 * \n // saut de ligne line feed
 * \t // tabulation
 * \f // saut de page
 * \' // échappement guillemet simple
 * \" // échappement guillemet double
 */

//templates litteraux
const g = "UN";
const h = "deux";

const i = `je suis 
          ${g} chaine 
          de charactere`;

console.log(i);

const utilisateur = { nom: "Tristan Mousquet" };
const joursAbonnement = 12;
console.log(`Bienvenue, ${utilisateur.nom.toUpperCase()}.`);
const message = `Bonjour ${utilisateur.nom}, il reste ${joursAbonnement} jours à ton abonnement.`;
console.log(message);

const fatigue = true;
const action = "dormir";
const etatDeFatigue = `Julien est ${
  fatigue ? `fatigué et veut ${action} !` : `en pleine forme !`
}`;
console.log(etatDeFatigue);

//index et length
const blabla = "Terre";
console.log(blabla[0]);
console.log(blabla[1]);
console.log(blabla[2]);
console.log(blabla[3]);
console.log(blabla[4]);

console.log(blabla.length);

console.log(blabla[blabla.length - 1]);

const toto = new String("Terre");
console.log(toto);

//methodes sur chaine de caracteres
const a1 = "Soleil";
const a2 = "Je suis le Soleil";
const a3 = "    Je suis le Soleil ";
const a4 = "soleil, terre, lune";

console.log("retourne le charactère a une position donnée");
const b1 = a1.charAt(0); // a[0]
console.log(b1);

console.log("bool verifie ce qu'il y a entre parenthese");
const b2 = a2.endsWith("eil");
console.log(b2);

console.log("bool verifie ce qu'il y a entre parenthese");
const b3 = a2.startsWith("Tu");
console.log(b3);

console.log("retourne l'index");
const b4 = a2.indexOf("le");
console.log(b4);

console.log("remplace");
const b5 = a2.replace("le Soleil", "la Terre");
console.log(b5);

console.log("recherche");
const b6 = a2.search("suis");
console.log(b6);

console.log("recherche");
const b7 = a2.slice(8, a2.length);
console.log(b7);

console.log("enlève les espaces avant et après");
const b8 = a3.trim();
console.log(b8);

console.log("mets en majuscule");
const b9 = a2.toUpperCase();
console.log(b9);

console.log("decoupe");
const b10 = a4.split(",");
console.log(b10);

const phrase = `Je ne copierai plus sur mon voisin.
`;
console.log(phrase.repeat(10));

const numeroCarte = "4678628353263149";
const quatreDerniersChiffres = numeroCarte.slice(-4);
const numeroObfusque = quatreDerniersChiffres.padStart(numeroCarte.length, "*");
console.log(numeroObfusque);

//regex
console.log("test regex");
// const c1 = "je suis le soleil".includes("suis");
// console.log(c1);
const c1 = "je suis le 6454soleil";
const c2 = "maphoto_12541.jpg";
/**
 *\d n'importe qu'elle nombre entre 0 et 9 [0-9].
 *\d* 0 ou plusieurs
 *\d+ 1 ou plus
 *\d{1, 3} entre 1 et 3
 *\D n'importe quel caractere qui n'est pas un  [^0-9].
 * . n'importe quel type de caractere sauf sauts de ligne
 * /./s avec sauf de ligne
 * .\d{1,3}
 * [^le] ni l ni e
 * \w n'importe quel type d'alphanumérique [A-Za-z0-9_]
 * ? ça peut etre optionnel
 * \s pour les espaces
 */
const evaluate = /\d{4}[A-Za-z]/.test(c1);

console.log(evaluate);

const evaluate1 = /(.*)\./.exec(c2);
console.log(evaluate1);

c2.match(/(.*)\./);
c2.split(/(.*)\./);
c2.replace(/(.*)\./);
console.log(c2.replaceAll(/\d/g, "a"));
