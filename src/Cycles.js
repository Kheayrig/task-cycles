/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let sum = 0;

    if (start % 2 != 0) start++;

    for (let i = start; i <= end; i += 2) {
        sum += i;
    }

    return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let i = 0;

    while (a > 0.1) {
        i++;
        a /= 2;
    }

    return i;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let i = 0;
    let str = '';

    do {
        if (!!message == false) break;
        if (message.length < 3) return message;
        str += message.substr(i, 2) + '_';
        i += 3;
    } while (i < message.length - 2);

    if (i == message.length - 2) {
        str += message.substr(i, 2);
    } else if (i == message.length - 1) {
        str += message.substr(i, 1);
    }

    return str;
}
