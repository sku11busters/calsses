import Character from '../class/character';

test('правильно создается объект', () => {
    const character = new Character('character', 'Bowman');
    const correct = {
      name: 'character',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: null,
      defence: null,
    };
    expect(character).toEqual(correct);
  });
  
  test('Ошибка при некорректном имени (меньше 2 символов)', () => {
    expect(() => new Character('a', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });
  
  test('Ошибка при некорректном имени (больше 10 символов)', () => {
    expect(() => new Character('longcharactername', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов');
  });
  
  test('Ошибка при некорректном типе', () => {
    expect(() => new Character('character', 'InvalidType')).toThrow('Некорректный тип персонажа');
  });