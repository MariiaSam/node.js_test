const fs = require("node:fs/promises");
const path = require("node:path");

// import fs from "fs/promises";
// import path from "path";


const FILE_PATH = path.join(__dirname, "signs.json");
// const FILE_PATH = path.join("signs", "signs.json");

console.log(FILE_PATH);

 async function readSigns() {
  // fs.access(FILE_PATH)
  const data = await fs.readFile(FILE_PATH, { encoding: "utf-8" });

  // const data = await fs.readFile(FILE_PATH);

  console.log(data, typeof data);
  return data;
}

function writeSigns(signs) {
  console.log(signs, typeof signs);
  return fs.writeFile(FILE_PATH, signs);
}

module.exports = {
  readSigns,
  writeSigns,
};
