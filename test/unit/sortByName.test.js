const sorting = require("../../app");

describe("Books names test suit", () => {
  //функция сортирует строки по возрастанию
  it("Books names should be sorted in ascending order", () => {
    const input = [
      //исходные данные
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];

    const expected = [
      //ожидаем получить
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input); //вызов функции

    expect(output).toEqual(expected); //сравнение результатов
  });

  test("Without params throws exception", () => {
    expect(() => sorting.sortByName()).toThrow(TypeError);
  });

  it("the same book names should be sorted relative to the others", () => {
    const input = [
      //исходные данные
      "Гарри Поттер",
      "Гарри Поттер",
      "Властелин Колец",
    ];

    const expected = [
      //ожидаем получить
      "Властелин Колец",
      "Гарри Поттер",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input); //вызов функции

    expect(output).toEqual(expected); //сравнение результатов
  });
});
