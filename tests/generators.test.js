const {
  alphabet,
  tableGraphGenerator,
  keyGenerator
} = require('../bin/generators')

describe('tableGraphGenerator', () => {
  it('should display a table first line with min and max alphabetical character', () => {
    const table = tableGraphGenerator(4, 6)
    expect(table).toContain('A')
    expect(table).toContain('G')
  })
  it('should display a table first column with min and max numberical value', () => {
    const table = tableGraphGenerator(4, 12)
    expect(table).toContain(1)
    expect(table).toContain(4)
  })

})

describe('keyGenerator', () => {
  it('should return a string', () => {
    const key = keyGenerator(6, 6, 12)
    expect(typeof key).toBe('string')
  }) 
  it('should have certain length corresponding to passwordLength argument', () => {
    const key = keyGenerator(6, 6, 12)
    expect(key.length).toEqual(57)
  }) 
}) 

describe('alphabet', () => {
  it('should return an array with all alphabet letters', () => {
    const alphabetCopy = alphabet
    expect(typeof alphabetCopy).toBe('object')
    expect(alphabetCopy).toEqual([
      'A','B','C','D','E','F',
      'G','H','I','J','K','L',
      'M','N','O','P','Q','R',
      'S','T','U','V','W','X',
      'Y','Z'
    ])
  })
  it('should have certain length corresponding to passwordLength argument', () => {
    const key = keyGenerator(6, 6, 12)
    expect(key.length).toEqual(57)
  }) 
}) 
