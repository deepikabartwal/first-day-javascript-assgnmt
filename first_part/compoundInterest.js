let principle = 10000;
let rate = 10;
let time = 5;

const compoundInterest= Math.round(principle*(Math.pow((1+(rate/100)),time)-1));

console.log(compoundInterest);
