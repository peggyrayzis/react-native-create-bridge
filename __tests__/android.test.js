import path from 'path'
import { readFile, parseFile } from '../src'

describe('Android/Java', () => {
  const templateName = 'TestModule'
  const readDirPath = path.join(__dirname, '..', 'templates', 'android')

  it('creates a TemplateManager.java', async () => {
    const fileData = await readFile('TemplateManager.java', readDirPath)
    const parsedFile = parseFile(fileData, templateName, templateName.toLowerCase(), 'TestApp')
    expect(parsedFile).toMatchSnapshot()
  })

  it('creates a TemplateModule.java', async () => {
    const fileData = await readFile('TemplateModule.java', readDirPath)
    const parsedFile = parseFile(fileData, templateName, templateName.toLowerCase(), 'TestApp')
    expect(parsedFile).toMatchSnapshot()
  })

  it('creates a TemplatePackage.java', async () => {
    const fileData = await readFile('TemplatePackage.java', readDirPath)
    const parsedFile = parseFile(fileData, templateName, templateName.toLowerCase(), 'TestApp')
    expect(parsedFile).toMatchSnapshot()
  })
})
