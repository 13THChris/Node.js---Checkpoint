// file-system.js
const fs = require("fs");

// Créer un fichier 'welcome.txt' avec la ligne "Hello Node"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("Fichier créé avec succès!");

  // Lire le fichier 'welcome.txt' et afficher son contenu dans la console
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
