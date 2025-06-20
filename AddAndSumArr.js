function sumInput() {
    let numbers = [];
    let userInput;

    while (true) {
        userInput = prompt("Введите число:");


        if (userInput === null || userInput === "") break;


        let number = +userInput;


        if (isNaN(number)) break;

        numbers.push(number);
    }


    const sum = numbers.reduce((acc, curr) => acc + curr, 0);

    console.log("Введенные числа:", numbers);
    console.log("Сумма чисел:", sum);
}

sumInput();