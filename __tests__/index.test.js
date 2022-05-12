const { generateColor, generateNumber } = require('../index');

describe('testa a função generate color', () => {
  test('deve retornar uma string com a cor 255, 255, 255', () => {
    generateNumber.mockReturnValue(255);
    expect(generateColor()).toBe('rgb(255, 255, 255)');
  });
});
