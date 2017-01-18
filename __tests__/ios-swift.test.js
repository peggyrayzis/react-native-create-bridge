import path from 'path'
import { readFile, parseFile } from '../src'

describe('iOS/Swift', () => {
  const templateName = 'TestModule'
  const readDirPath = path.join(__dirname, '..', 'templates', 'ios-swift')
  const pkg = {
    dependencies: {
      'react-native': '0.4'
    }
  }

  it('creates a Template.m', async () => {
    const fileData = await readFile('Template.m', readDirPath)
    const parsedFile = parseFile(fileData, templateName)
    expect(parsedFile).toMatchSnapshot()
  })

  it('creates a TemplateManager.swift', async () => {
    const fileData = await readFile('TemplateManager.swift', readDirPath)
    const parsedFile = parseFile(fileData, templateName)
    expect(parsedFile).toMatchSnapshot()
  })
})
