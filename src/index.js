console.log("Hello, world !!");

console.error("123");
console.info("test");
console.warn("test warning");
console.log("test log");

console.time("test");
console.timeEnd("test");

console.table(["chat", "chien", "poisson"]);

console.assert(true, "Bonjour 1 !");
console.assert(false, "Bonjour 2 !");

//compter le nb d'exécution :
//Nous "étudions les boucles en
for (let i = 0; i < 10; i++) {
  console.count("compteur");
}
