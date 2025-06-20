let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
 let sumSalaries = function(salaries) {
    let sum=0;
    if (Object.values(salaries)) {
    for(let salary of Object.values(salaries)) {
sum+=salary;
    }
    return sum;
}
else return 0;
 }
console.log( sumSalaries(salaries) );