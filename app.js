const { program } = require("commander");

const Signs = require("./abra");

// import {
//     readSigns,
//     writeSigns

//   } from "./index.js";

// Signs.readSigns().then(data => console.log(data[0].id)).catch(console.error);

async function invokeAction({
  action,
  id,
  name,
  description,
  male,
  female,
  begin,
}) {
  switch (action) {
    case "getAll":
      const signs = await Signs.getAll();
      return signs;

    case "getById":
      const sign = await Signs.getById(id);
      return sign;

    case "createSign":
      const createdSign = await Signs.createSign({
        name,
        description,
        male,
        female,
        begin,
      });
      return createdSign;

    case "updateSign":
      const updatedSign = await Signs.updateSign(id, {
        name,
        description,
        male,
        female,
        begin,
      });
      return updatedSign;

    case "remove":
      const remove = await Signs.remove(id);
      return remove;

    default:
      return "Unknown action";
  }
}
program
  .option("-a, --action <action>", "Action to invoke")
  .option("-i, --id <id>", "Sign id")
  .option("-t, --name <name>", "Sign name")
  .option("-d, --description <description>", "Sign description")
  .option("-m, --male <male>", "Sign male")
  .option("-f, --female <female>", "Sign female")
  .option("-b, --begin <begin>", "Sign begin");

program.parse(process.argv);

invokeAction(program.opts()).then(console.log).catch(console.error);
