function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };


  this.calculate = function (str) {
    const parts = str.split(" ");
    if (parts.length !== 3) {
      throw new Error("Некорректный формат строки");
    }

    const a = Number(parts[0]);
    const operator = parts[1];
    const b = Number(parts[2]);

    if (isNaN(a) || isNaN(b)) {
      throw new Error("Введены некорректные числа");
    }

    if (!this.methods[operator]) {
      throw new Error(`Неподдерживаемый оператор: ${operator}`);
    }

    return this.methods[operator](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator();