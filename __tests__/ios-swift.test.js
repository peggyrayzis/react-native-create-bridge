import path from 'path';

const fileOperations = require('../src/file-operations');
const { readFile, parseFile } = fileOperations;

describe('iOS/Swift: UI Components', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'ui-components',
    'ios-swift',
  );

  it('creates a Template-Bridging-Header.h', async () => {
    const fileData = await readFile('Template-Bridging-Header.h', readDirPath);
    const parsedFile = parseFile(fileData, templateName);
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a Template.m', async () => {
    const fileData = await readFile('Template.m', readDirPath);
    const parsedFile = parseFile(fileData, templateName);
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplateManager.swift', async () => {
    const fileData = await readFile('TemplateManager.swift', readDirPath);
    const parsedFile = parseFile(fileData, templateName);
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplateView.swift', async () => {
    const fileData = await readFile('TemplateView.swift', readDirPath);
    const parsedFile = parseFile(fileData, templateName);
    expect(parsedFile).toMatchSnapshot();
  });
});

describe('iOS/Swift: Native Modules', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'modules',
    'ios-swift',
  );

  it('creates a Template-Bridging-Header.h', async () => {
    const fileData = await readFile('Template-Bridging-Header.h', readDirPath);
    const parsedFile = parseFile(fileData, templateName);
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a Template.m', async () => {
    const fileData = await readFile('Template.m', readDirPath);
    const parsedFile = parseFile(fileData, templateName);
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a Template.swift', async () => {
    const fileData = await readFile('Template.swift', readDirPath);
    const parsedFile = parseFile(fileData, templateName);
    expect(parsedFile).toMatchSnapshot();
  });
});

describe('iOS/Swift: Combined', () => {
  const templateName = 'TestModule';
  const readDirPath = path.join(
    __dirname,
    '..',
    'templates',
    'combined',
    'ios-swift',
  );

  it('creates a Template-Bridging-Header.h', async () => {
    const fileData = await readFile('Template-Bridging-Header.h', readDirPath);
    const parsedFile = parseFile(fileData, templateName);
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a Template.m', async () => {
    const fileData = await readFile('Template.m', readDirPath);
    const parsedFile = parseFile(fileData, templateName);
    expect(parsedFile).toMatchSnapshot();
  });

  it('creates a TemplateManager.swift', async () => {
    const fileData = await readFile('TemplateManager.swift', readDirPath);
    const parsedFile = parseFile(fileData, templateName);
    expect(parsedFile).toMatchSnapshot();
  });
});
