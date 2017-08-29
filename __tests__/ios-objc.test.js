import path from 'path';
import { readFile, parseFile } from '../src/file-operations';

describe('iOS/Obj-C: UI Components', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'ui-components',
    'ios-objc',
  );

  it('creates a Template.h', async () => {
    const fileData = await readFile('Template.h', readDirPath);
    const parsedFile = parseFile(fileData, { templateName });
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a Template.m', async () => {
    const fileData = await readFile('Template.m', readDirPath);
    const parsedFile = parseFile(fileData, { templateName });
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplateManager.h', async () => {
    const fileData = await readFile('TemplateManager.h', readDirPath);
    const parsedFile = parseFile(fileData, { templateName });
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplateManager.m', async () => {
    const fileData = await readFile('TemplateManager.m', readDirPath);
    const parsedFile = parseFile(fileData, { templateName });
    expect(parsedFile).toMatchSnapshot();
  });
});

describe('iOS/Obj-C: Native Modules', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'modules',
    'ios-objc',
  );

  it('creates a Template.h', async () => {
    const fileData = await readFile('Template.h', readDirPath);
    const parsedFile = parseFile(fileData, { templateName });
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a Template.m', async () => {
    const fileData = await readFile('Template.m', readDirPath);
    const parsedFile = parseFile(fileData, { templateName });
    expect(parsedFile).toMatchSnapshot();
  });
});

describe('iOS/Obj-C: Combined', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'combined',
    'ios-objc',
  );

  it('creates a Template.h', async () => {
    const fileData = await readFile('Template.h', readDirPath);
    const parsedFile = parseFile(fileData, { templateName });
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplateManager.m', async () => {
    const fileData = await readFile('TemplateManager.m', readDirPath);
    const parsedFile = parseFile(fileData, { templateName });
    expect(parsedFile).toMatchSnapshot();
  });
});
