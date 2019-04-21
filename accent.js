let words = [
        // {trueWord : 'клАла', falseWord : 'клалА'},
        // {trueWord : 'свЕкла', falseWord : 'свеклА'},
        // {trueWord : 'слИвовый', falseWord : 'сливОвый'},
        // {trueWord : 'апострОф', falseWord : 'апОстроф'},
        // {trueWord : 'красИвее', falseWord : 'красивЕе'},
        {trueWord : 'звонИт', falseWord : 'звОнит'},
        {trueWord : 'тОртов', falseWord : 'тортОв'},
    ],
    lengthWords,
    content = document.querySelector('.content'),
    buttonBegin = document.querySelector('.button--begin'),
    buttonTrue = document.querySelector('.button--true'),
    buttonFalse = document.querySelector('.button--false'),
    contentButtons = document.querySelector('.content__buttons'),
    progressBarTrue = document.querySelector('.progressBar--true'),
    progressBarFalse = document.querySelector('.progressBar--false'),
    progressBarWrapper = document.querySelectorAll('.progressBar__wrapper'),
    progressBarWrapperTrue = document.querySelector('.progressBar__wrapper--true'),
    progressBarWrapperFalse = document.querySelector('.progressBar__wrapper--false'),
    gameOver = document.querySelector('.gameOver'),
    gameOverCountCorrect = document.querySelector('.gameOver__countCorrect'),
    gameOverCountError = document.querySelector('.gameOver__countError'),
    buttonNormalize = document.querySelector('.button__normalize'),
    index,
    countTrue,
    countFalse,
    colorDefault = '#2d9ae5',
    colorTrue = '#7eff65',
    colorFalse = '#ff234e';

function init() {
    lengthWords = words.length-1;
    countTrue = 0;
    countFalse = 0;

    progressBarTrue.style.width = '0';
    progressBarFalse.style.width = '0';

    progressBarWrapper.forEach(function (elem) {
        elem.classList.remove('opacityNull');
    });
}

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
/**********************************************************/
function addColumnRevers() {
    contentButtons.classList.remove('_column');
    contentButtons.classList.add('_column-reverse');
}

function removeColumnRevers() {
    contentButtons.classList.remove('_column-reverse');
    contentButtons.classList.add('_column');
}

function reverseButtons() {
    randomInteger(0, 1) ? addColumnRevers() : removeColumnRevers();
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

function endGame() {
    console.log('game over');
    progressBarWrapper.forEach(function(elem) {
        elem.classList.add('opacityNull');
    });
    buttonFalse.classList.add('hide');
    buttonTrue.classList.add('hide');

    //TODO :**********************************************************/
    // console.log('+++++++++++++++++ ' + contentButtons.className.split(' ').includes('_column-reverse'))
    console.log(contentButtons.className.split(' '));

    // contentButtons.style.flexDirection = 'column';

    // contentButtons.classList.remove('_column-reverse');
    // contentButtons.classList.add('_column');
    removeColumnRevers();

    gameOverCountCorrect.innerHTML = `${countTrue}`;
    gameOverCountError.innerHTML = `${countFalse}`;

    gameOver.classList.remove('hide');
    buttonBegin.classList.remove('hide');

}

// needReplace(words, index, word);
// _writeConsole();

// ------------------------- Работа с кнопками -------------------------

buttonBegin.addEventListener('click', function() {
    gameOver.classList.add('hide');
    init();

    buttonTrue.classList.remove('hide');
    buttonFalse.classList.remove('hide');
    this.classList.add('hide');


    // _writeConsole();

    initButtons(false);
});

    buttonTrue.addEventListener('click', function() {
        //TODO: поменять background-color кнопкам (сообщение пользователю).
        // progress bar true - увеличить значение на 1.
        // Текущее слово должно попасть в конец массива.
        // Уменьшить lengthWords на 1.
        // Проверка на end game
        // Расчитать новую пару слов.
        // Поставить новую пару слов в кнопки.
        progressBarTrue.style.width = ++countTrue + '%';
        // console.log('countTrue = ' + countTrue);

        if (lengthWords !== 0) {
            console.log('lengthWords = ' + lengthWords);
            buttonFalse.classList.add('opacityNull');
            buttonTrue.classList.add('opacityNull');

            //TODO: покрасить бордеры в colorTrue
            progressBarWrapperTrue.style.borderColor = colorTrue;
            content.style.borderColor = colorTrue;
            progressBarTrue.style.backgroundColor = colorTrue;

            setTimeout(function() {
                buttonFalse.classList.add('hide');
                buttonTrue.classList.add('hide');

                buttonNormalize.classList.remove('hide');
                setTimeout(function() {
                    initButtons(true);
                    buttonNormalize.classList.add('hide');

                    buttonFalse.classList.remove('hide');
                    buttonTrue.classList.remove('hide');
                    setTimeout(function() {
                        buttonTrue.classList.remove('opacityNull');
                        buttonFalse.classList.remove('opacityNull');

                        progressBarWrapperTrue.style.borderColor = colorDefault;
                        content.style.borderColor = colorDefault;
                        progressBarTrue.style.backgroundColor = colorDefault;
                    }, 500)
                }, 500)
            }, 500);
        } else {
            endGame();
        }

        // _writeConsole();
    });

    buttonFalse.addEventListener('click', function() {
        //TODO: поменять background-color кнопкам (сообщение пользователю).
        // progress bar false - увеличить значение на 1.
        // Расчитать новую пару слов.
        // Поставить новую пару слов в кнопки.

        // console.log('click false ' + ++countFalse);

        progressBarFalse.style.width = ++countFalse + '%';

        buttonFalse.classList.add('opacityNull');
        buttonTrue.classList.add('opacityNull');

        progressBarWrapperFalse.style.borderColor = colorFalse;
        content.style.borderColor = colorFalse;
        progressBarFalse.style.backgroundColor = colorFalse;

        setTimeout(function() {
            buttonFalse.classList.add('hide');
            buttonTrue.classList.add('hide');

            buttonNormalize.classList.remove('hide');
            setTimeout(function() {
                initButtons(false);
                buttonNormalize.classList.add('hide');

                buttonFalse.classList.remove('hide');
                buttonTrue.classList.remove('hide');
                setTimeout(function() {
                    buttonTrue.classList.remove('opacityNull');
                    buttonFalse.classList.remove('opacityNull');

                    progressBarWrapperFalse.style.borderColor = colorDefault;
                    content.style.borderColor = colorDefault;
                    progressBarFalse.style.backgroundColor = colorDefault;
                }, 500)
            }, 500)
        }, 500);

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