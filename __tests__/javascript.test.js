import path from 'path';
const fileOperations = require('../src/file-operations');
const { readFile, parseFile } = fileOperations;

describe('JS: Combined', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(__dirname, '..', 'templates', 'combined', 'js');

  it('creates a TemplateNativeModule.js', async () => {
    const fileData = await readFile('TemplateNativeModule.js', readDirPath);
    const parsedFile = parseFile(fileData, { templateName });
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplateNativeView.js', async () => {
    const fileData = await readFile('TemplateNativeView.js', readDirPath);
    const parsedFile = parseFile(fileData, { templateName });
    expect(parsedFile).toMatchSnapshot();
  });
});

describe('JS: Native Modules', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(__dirname, '..', 'templates', 'modules', 'js');

  it('creates a TemplateNativeModule.js', async () => {
    const fileData = await readFile('TemplateNativeModule.js', readDirPath);
    const parsedFile = parseFile(fileData, { templateName });
    expect(parsedFile).toMatchSnapshot();
  });
});

describe('JS: UI Components', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'ui-components',
    'js',
  );

  it('creates a TemplateNativeView.js', async () => {
    const fileData = await readFile('TemplateNativeView.js', readDirPath);
    const parsedFile = parseFile(fileData, { templateName });
    expect(parsedFile).toMatchSnapshot();
  });
});

describe('JS: Semver', () => {
  const config = {
    templateName: 'SemverModule',
    rnVersion: "^0.49.1"
  }
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'ui-components',
    'js',
  );

  it('correctly parses React Native version', async () => {
    const fileData = await readFile('TemplateNativeView.js', readDirPath);
    const parsedFile = parseFile(fileData, config);
    expect(parsedFile).toMatchSnapshot();
  });
});
