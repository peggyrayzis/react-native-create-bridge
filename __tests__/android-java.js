import path from 'path';
const fileOperations = require('../src/file-operations');
const { readFile, parseFile } = fileOperations;

describe('Android/Java: UI Components', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'ui-components',
    'android-java',
  );

  it('creates a TemplateManager.java', async () => {
    const fileData = await readFile('TemplateManager.java', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplatePackage.java', async () => {
    const fileData = await readFile('TemplatePackage.java', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });
});

describe('Android/Java: Native Modules', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'modules',
    'android-java',
  );

  it('creates a TemplateModule.java', async () => {
    const fileData = await readFile('TemplateModule.java', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplatePackage.java', async () => {
    const fileData = await readFile('TemplatePackage.java', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });
});

describe('Android/Java: Combined', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'combined',
    'android-java',
  );

  it('creates a TemplateManager.java', async () => {
    const fileData = await readFile('TemplateManager.java', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplateModule.java', async () => {
    const fileData = await readFile('TemplateModule.java', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplatePackage.java', async () => {
    const fileData = await readFile('TemplatePackage.java', readDirPath);
    const parsedFile = parseFile(
      fileData,
      templateName,
      templateName.toLowerCase(),
      'testapp',
    );
    expect(parsedFile).toMatchSnapshot();
  });
});
