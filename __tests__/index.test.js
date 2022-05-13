const { test } = require('@jest/globals');
const { generateOneColor } = require('../index');

describe('testa a função generate color', () => {
  test('deve retornar uma string com a cor 255, 255, 255', () => {
    jest.spyOn(global.Math, 'random').mockReturnValue(1);
    expect(generateOneColor()).toBe('rgb(255, 255, 255)');
  });
});
