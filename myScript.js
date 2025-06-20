function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let number = i;
    let shooter = function() { // функция shooter
      console.log(number); // должна выводить порядковый номер
     
    };
    shooters.push(shooter);
        i++;
  }

  // ...а в конце вернуть массив из всех стрелков
  return shooters;
}

let army = makeArmy();
army[0]();
army[2]();
army[3]();