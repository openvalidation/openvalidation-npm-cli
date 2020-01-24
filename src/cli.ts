#!/usr/bin/env node

import { executeJar } from "node-java-connector";
import * as path  from "path";

const [, , ...args] = process.argv;

// TODO: Load JAR dynamically from maven-package
var runOpenvalidation = async function() {
  var relativePath = path.join(
    path.join(__dirname),
    "../java/openvalidation.jar"
  );

  var output = await executeJar(relativePath, args);
  if (!!output.stderr) {
    output.stderr.on("data", (stderr: any) => {
      console.error(`${stderr}`);
    });
  }
  if (!!output.stdout) {
    output.stdout.on("data", (stderr: any) => {
      console.log(`${stderr}`);
    });
  }
};

runOpenvalidation();
