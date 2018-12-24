let firstTerm = 0;
let secondTerm = 1;
let sumOfPreviousTerms = 0;

console.log(firstTerm);
console.log(secondTerm);

for(let index=1;index<=10;index++){
  sumOfPreviousTerms=firstTerm+secondTerm;
  console.log(sumOfPreviousTerms);
  firstTerm=secondTerm;
  secondTerm=sumOfPreviousTerms;
}
