//Déclaration d'une promesse
const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promesse resolve");
  }, 4000);
  resolve("Promesse resolve");
  // reject("promesse en échec");
});

console.log(maPromesse);

maPromesse.then((reponse) => {
  console.log(reponse);
});

maPromesse.catch((erreur) => {
  console.log(erreur);
});

console.log(
  "Je suis en premier alors que je suis à la fin du fichier javascript"
);
