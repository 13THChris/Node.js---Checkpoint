const generatePassword = require("generate-password");

// Générer un mot de passe aléatoire
const password = generatePassword.generate({
  length: 12,
  numbers: true
});

console.log(`Mot de passe généré: ${password}`);
