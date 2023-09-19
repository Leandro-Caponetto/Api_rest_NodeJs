/** @format */

const fs = require("fs");
const path = require("path");
const { appendFile } = require("node:fs");

const PATH_FILE = path.join(__dirname, "ejempl.txt");

// fs.writeFileSync('./ejempl.txt', 'hola mi nombre es Micaela')

const mainFunction = () => {
  fs.readFile(PATH_FILE, "utf-8", (err, data) => {
    if (!err) {
      console.log(`el archivo ${data} se ha cargado correctamente`);
    }
  });
};

mainFunction();

appendFile(PATH_FILE, "\n Hola mi nombre es Leandro", (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
