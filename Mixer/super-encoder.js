const { caesarCipher, symbolCipher, reverseCipher } = require("./encryptors.js");

const randomAmount = 9;

const processMessage = (str, operation) => {
  const ciphered = reverseCipher(symbolCipher(caesarCipher(str, randomAmount)));
  return operation === "encode" ? ciphered : caesarCipher(symbolCipher(reverseCipher(str)), randomAmount * -1);
};

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  const output = processMessage(str, process.argv[2]);
  process.stdout.write(`Here is your ${process.argv[2]}ed secret:\n> ${output}\n`);
  process.exit();
};

const promptMessage = process.argv[2] === "encode"
  ? "Enter the secret message you would like to encrypt...\n> "
  : "Enter the encoded message you would like to decrypt...\n> ";

process.stdout.write(promptMessage);
process.stdin.on("data", handleInput);

// För att starta så måste man skriva in node super-encoder.js encode/decode
// När man har skriver in encode så förvandlar man en ord/menigar till hemliga caesarcipher
// Sen tar du decode för att kunna göra tvärtom om man vill göra om det som är i caesar till valigt 