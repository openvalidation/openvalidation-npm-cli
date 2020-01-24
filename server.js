const exec = require("child_process").execFile;

const child = exec(
  `openvalidation -r "IF the message IS 42 THEN Hello World" -s "{Message : 23}" -c e`
);

if (!!child.stderr) {
  child.stderr.on("data", stderr => {
    console.error(`${stderr}`);
  });
}

if (!!child.stdout) {
  child.stdout.on("data", stderr => {
    console.log(`${stderr}`);
  });
}
