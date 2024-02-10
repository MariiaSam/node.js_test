const Signs = require('./signs')
// import {
//     readSigns,
//     writeSigns

//   } from "./index.js";

Signs.readSigns().then(console.log).catch(console.error);
