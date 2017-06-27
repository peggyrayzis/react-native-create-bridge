import path from "path";
import { readFile, parseFile } from "../src/file-operations";

describe("Android/Kotlin", () => {
  const templateName = "TestModule";
  const readDirPath = path.join(__dirname, "..", "templates", "android-kotlin");

  it("creates a TemplateManager.kt", async () => {
    const fileData = await readFile("TemplateManager.kt", readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      "testapp"
    );
    expect(parsedFile).toMatchSnapshot();
  });

  it("creates a TemplateModule.kt", async () => {
    const fileData = await readFile("TemplateModule.kt", readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      "testapp"
    );
    expect(parsedFile).toMatchSnapshot();
  });

  it("creates a TemplatePackage.kt", async () => {
    const fileData = await readFile("TemplatePackage.kt", readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      "testapp"
    );
    expect(parsedFile).toMatchSnapshot();
  });
});
