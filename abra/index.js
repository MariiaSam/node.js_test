const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

// import fs from "fs/promises";
// import path from "path";

const FILE_PATH = path.join(__dirname, "signs.json");
// const FILE_PATH = path.join("signs", "signs.json");

console.log(FILE_PATH);

async function readSigns() {
  // fs.access(FILE_PATH)
  const data = await fs.readFile(FILE_PATH, { encoding: "utf-8" });

  console.log(data, typeof data);
  return JSON.parse(data);
}

function writeSigns(signs) {
  console.log(signs, typeof signs);
  return fs.writeFile(FILE_PATH, JSON.stringify(signs, undefined, 2));
}

//writeFile приймаэ данны типу string

async function getAll() {
  const signs = await readSigns();

  return signs;
}

async function getById(id) {
  const signs = await readSigns();

  const sign = signs.find((sign) => sign.id === id);

  return sign;
}

async function createSign() {
  const signs = await readSigns();
  const newSign = { ...sign, id: crypto.randomUUID() };

  signs.push(newSign);

  await writeSigns(signs);

  return newSign;
}

async function updateSign(id, sign) {
  const signs = await readSigns();
  const idx = signs.findIndex((sign) => sign.id === id);

  if (idx === -1) {
    return undefined;
  }

  const newSign = { ...sign, id };
   
  signs[idx] = newSign;

  await writeSigns(signs);

  return newSign;
}

async function remove(id) {
  const signs = await readSigns();
  const idx = signs.findIndex((sign) => sign.id === id);

  if (idx === -1) {
    return undefined;
}

  const deletedSign = signs[idx];

  signs.splice(idx, 1);

  await writeSigns(signs);

  return deletedSign;
}

module.exports = {
  getAll,
  getById,
  createSign,
  updateSign,
  remove,
}