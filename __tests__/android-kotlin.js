import path from 'path';
const fileOperations = require('../src/file-operations');
const { readFile, parseFile } = fileOperations;

describe('Android/Kotlin: UI Components', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'ui-components',
    'android-kotlin',
  );

  it('creates a TemplateManager.kt', async () => {
    const fileData = await readFile('TemplateManager.kt', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplatePackage.kt', async () => {
    const fileData = await readFile('TemplatePackage.kt', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });
});

describe('Android/Kotlin: Native Modules', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'modules',
    'android-kotlin',
  );

  it('creates a TemplateModule.kt', async () => {
    const fileData = await readFile('TemplateModule.kt', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplatePackage.kt', async () => {
    const fileData = await readFile('TemplatePackage.kt', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });
});

describe('Android/Kotlin: Combined', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'combined',
    'android-kotlin',
  );

  it('creates a TemplateManager.kt', async () => {
    const fileData = await readFile('TemplateManager.kt', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplateModule.kt', async () => {
    const fileData = await readFile('TemplateModule.kt', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplatePackage.kt', async () => {
    const fileData = await readFile('TemplatePackage.kt', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });
});
