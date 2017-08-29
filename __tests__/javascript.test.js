import path from 'path';
import { readFile, parseFile } from '../src/file-operations';

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
