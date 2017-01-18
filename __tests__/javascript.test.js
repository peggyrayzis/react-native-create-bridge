import path from 'path'
import { readFile, parseFile } from '../src'

describe('JS', () => {
  const templateName = 'TestModule'
  const readDirPath = path.join(__dirname, '..', 'templates', 'js')

  it('creates a TemplateNativeModule.js', async () => {
    const fileData = await readFile('TemplateNativeModule.js', readDirPath)
    const parsedFile = parseFile(fileData, templateName)
    expect(parsedFile).toMatchSnapshot()
  })

  it('creates a TemplateNativeView.js', async () => {
    const fileData = await readFile('TemplateNativeView.js', readDirPath)
    const parsedFile = parseFile(fileData, templateName)
    expect(parsedFile).toMatchSnapshot()
  })
})
