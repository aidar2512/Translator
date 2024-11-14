// Объект dictionary для хранения переводов
const dictionary = {
    "hello": "здравствуйте",
    "world": "мир",
    "friend": "друг",
    "good": "хорошо",
    "day": "день",
    "night": "ночь",
    "love": "любовь",
    "peace": "мир",
    "cat": "кот",
    "dog": "собака",
    "water": "вода",
    "fire": "огонь",
    "earth": "земля",
    "wind": "ветер",
    "sun": "солнце",
    "moon": "луна",
    "tree": "дерево",
    "flower": "цветок",
    "book": "книга",
    "computer": "компьютер",
    "здравствуйте": "hello",
    "мир": "world",
    "друг": "friend",
    "хорошо": "good",
    "день": "day",
    "ночь": "night",
    "любовь": "love",
    "кот": "cat",
    "собака": "dog",
    "вода": "water",
    "огонь": "fire",
    "земля": "earth",
    "ветер": "wind",
    "солнце": "sun",
    "луна": "moon",
    "дерево": "tree",
    "цветок": "flower",
    "книга": "book",
    "компьютер": "computer",
};

// Допишите код для fakeTranslate
function fakeTranslate(word) {
    return new Promise((resolve, reject) => {
        // Имитация асинхронной операции с задержкой
        setTimeout(() => {
            if (dictionary[word.toLowerCase()]) {
                resolve(dictionary[word.toLowerCase()]);
            } else {
                reject("Перевод не найден.");
            }
        }, 1000); // Задержка 1 секунда
    });
}

export { fakeTranslate };
