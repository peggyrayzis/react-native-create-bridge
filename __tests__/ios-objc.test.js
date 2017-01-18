import path from 'path'
import { readFile, parseFile } from '../src/file-operations'

describe('iOS/Obj-C', () => {
  const templateName = 'TestModule'
  const readDirPath = path.join(__dirname, '..', 'templates', 'ios-objc')
  const pkg = {
    dependencies: {
      'react-native': '0.4'
    }
  }

  it('creates a Template.h', async () => {
    const fileData = await readFile('Template.h', readDirPath)
    const parsedFile = parseFile(fileData, templateName)
    expect(parsedFile).toMatchSnapshot()
  })

  it('creates a TemplateManager.m', async () => {
    const fileData = await readFile('TemplateManager.m', readDirPath)
    const parsedFile = parseFile(fileData, templateName)
    expect(parsedFile).toMatchSnapshot()
  })
})
