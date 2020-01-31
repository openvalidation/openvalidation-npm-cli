#!/usr/bin/env node

import { runOpenvalidation } from "./openvalidation-launcher";

runOpenvalidation().then(output => {
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
})
