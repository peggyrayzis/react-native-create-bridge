import path from 'path';
import { readFile, parseFile } from '../src/file-operations';

describe('Android/Kotlin: UI Components', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'ui-components',
    'android-kotlin',
  );
  const config = {
    templateName,
    packageName: templateName.toLowerCase(),
    app: 'testapp',
    rnVersion: '0.47.2',
  };

  it('creates a TemplateManager.kt', async () => {
    const fileData = await readFile('TemplateManager.kt', readDirPath);
    const parsedFile = parseFile(fileData, config);
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplatePackage.kt', async () => {
    const fileData = await readFile('TemplatePackage.kt', readDirPath);
    const parsedFile = parseFile(fileData, config);
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
  const config = {
    templateName,
    packageName: templateName.toLowerCase(),
    app: 'testapp',
    rnVersion: '0.47.2',
  };

  it('creates a TemplateModule.kt', async () => {
    const fileData = await readFile('TemplateModule.kt', readDirPath);
    const parsedFile = parseFile(fileData, config);
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplatePackage.kt', async () => {
    const fileData = await readFile('TemplatePackage.kt', readDirPath);
    const parsedFile = parseFile(fileData, config);
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
  const config = {
    templateName,
    packageName: templateName.toLowerCase(),
    app: 'testapp',
    rnVersion: '0.47.2',
  };
  const githubConfig = {
    templateName,
    packageName: templateName.toLowerCase(),
    app: 'testapp',
    rnVersion: 'https://github.com/facebook/react-native#master',
  };

  it('creates a TemplateManager.kt', async () => {
    const fileData = await readFile('TemplateManager.kt', readDirPath);
    const parsedFile = parseFile(fileData, config);
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplateModule.kt', async () => {
    const fileData = await readFile('TemplateModule.kt', readDirPath);
    const parsedFile = parseFile(fileData, config);
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplatePackage.kt', async () => {
    const fileData = await readFile('TemplatePackage.kt', readDirPath);
    const parsedFile = parseFile(fileData, config);
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplateModule.kt with github RN version', async () => {
    const fileData = await readFile('TemplateModule.kt', readDirPath);
    const parsedFile = parseFile(fileData, githubConfig);
    expect(parsedFile).toMatchSnapshot();
  });
});
