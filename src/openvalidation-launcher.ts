import { executeJar } from "node-java-connector";
import * as path  from "path";
import { ChildProcess } from "child_process";

// TODO: Load JAR dynamically from maven-package
export async function runOpenvalidation(): Promise<ChildProcess> {
  var relativePath = path.join(
    path.dirname(__filename),
    "../java/openvalidation.jar"
  );

  const [, , ...args] = process.argv;
  return executeJar(relativePath, args);
};
