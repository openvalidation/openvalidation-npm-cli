import "jest";
import { runOpenvalidation } from "../src/openvalidation-launcher";

describe("Test runOpenvalidation", () => {
  beforeEach(() => {});

  test("Verify openvalidation can start", async done => {
    process.argv.push("-r", "IF the Message EQUALS hello THEN Hello World", "-s", "{Message : \"Text\"}", "-c", "en");

    const output = await runOpenvalidation();
    if (!!output.stdout) {
      output.stdout.on("data", (stdout: string) => {
        if (stdout.toLowerCase().trim().indexOf("compilation was successful") != -1) {
          done();
        }
      });
    }
  });
});
