import * as fs from "fs";
import * as path from "path";
import convert from "./jsonToGoMap.js";

// Run the extract function with the script's arguments
extract(process.argv[2], process.argv[3], process.argv[4], process.argv[5]);

function extract(inputFile, outputPath, packageName, mapName) {
  if (!inputFile || inputFile == "") {
    throw new Error("empty file path arg");
  }
  if (!fs.existsSync(inputFile)) {
    throw new Error("input file doesn't exist");
  }

  if (!outputPath || outputPath == "") {
    throw new Error("empty output file path arg");
  }
  if (!fs.existsSync(path.dirname(outputPath))) {
    throw new Error("output dir doesn't exist");
  }

  const raw = fs.readFileSync(inputFile, { encoding: "utf8", flag: "r" });

  writeFile(packageName, outputPath, convert(raw), mapName);
}

function writeFile(packageName, outputPath, go, mapName) {
  const s = `package ${packageName}\n\nvar ${mapName} = ${go}`;

  fs.writeFileSync(outputPath, s);
}
