let words = [
        {trueWord : 'клАла', falseWord : 'клалА'},
        {trueWord : 'свЕкла', falseWord : 'свеклА'},
        {trueWord : 'слИвовый', falseWord : 'сливОвый'},
        {trueWord : 'апострОф', falseWord : 'апОстроф'},
        {trueWord : 'красИвее', falseWord : 'красивЕе'},
        {trueWord : 'звонИт', falseWord : 'звОнит'},
        {trueWord : 'тОртов', falseWord : 'тортОв'},
    ],
    lengthWords = words.length-1,
    buttonBegin = document.querySelector('.button--begin'),
    buttonTrue = document.querySelector('.button--true'),
    buttonFalse = document.querySelector('.button--false'),
    contentButtons = document.querySelector('.content__buttons'),
    progressBarTrue = document.querySelector('.progressBar--true'),
    progressBarFalse = document.querySelector('.progressBar--false'),
    index,
    countTrue = 0,
    countFalse = 0;


//Функция вычисления случайного числа от min до max включительно
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function replaceElements(arr, i) {
    let temp = arr[i];
    arr[i] = arr[lengthWords];
    arr[lengthWords] = temp;
}

function needReplace(arr, i) {
    if (i !== lengthWords) {
        replaceElements(arr, i);
    }
    lengthWords -= 1;
}

function setButtonsText(i) {
    buttonTrue.innerHTML = words[i].trueWord;
    buttonFalse.innerHTML = words[i].falseWord;
}

function reverseButtons() {
    if (randomInteger(0, 1)) {
        contentButtons.style.flexDirection = 'column-reverse';
    } else {
        contentButtons.style.flexDirection = 'column';
    }
}

function initButtons(flag) {

    if (flag) {
        needReplace(words, index);
    }

    index = randomInteger(0, lengthWords);
    // console.log(index);
    // console.log(words[index]);

    setButtonsText(index);
    reverseButtons();
}

// needReplace(words, index, word);
// _writeConsole();

// ------------------------- Работа с кнопками -------------------------

buttonBegin.addEventListener('click', function() {
    buttonTrue.classList.remove('button--hide');
    buttonFalse.classList.remove('button--hide');
    this.classList.add('button--hide');


    // _writeConsole();

    initButtons(false);
});

buttonTrue.addEventListener('click', function() {
    //TODO: поменять background-color кнопкам (сообщение пользователю).
    //TODO: progress bar true - увеличить значение на 1.
    // Текущее слово должно попасть в конец массива.
    // Уменьшить lengthWords на 1.
    //TODO: Проверка на game over
    // Расчитать новую пару слов.
    // Поставить новую пару слов в кнопки.

    progressBarTrue.style.width = ++countTrue + '%';

    initButtons(true);

    // _writeConsole();
});

buttonFalse.addEventListener('click', function() {
    //TODO: поменять background-color кнопкам (сообщение пользователю).
    //TODO: progress bar false - увеличить значение на 1.
    // Расчитать новую пару слов.
    // Поставить новую пару слов в кнопки.

    // console.log('click false ' + ++countFalse);

    progressBarFalse.style.width = ++countFalse + '%';

    initButtons(false);

    // _writeConsole();
});

//****************************************************************************

// Тестовая функция:
function _writeConsole() {
    words.forEach(function(elem) {
        console.log(elem);
    });
    console.log(lengthWords);
}