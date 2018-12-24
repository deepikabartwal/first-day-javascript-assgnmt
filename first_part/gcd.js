let firstNo = 52;
let secondNo = 13;

let greaterNo=Math.max(firstNo,secondNo);
let smallerNo=Math.min(firstNo,secondNo);

let gcd = 0;

for(let divisor=1;divisor<=smallerNo;divisor++){
  if(smallerNo%divisor==0 && greaterNo%divisor==0 && gcd<divisor){
    gcd=divisor;
  }
}
console.log("Greatest Common divisor of",firstNo,"and",secondNo,"is",gcd);
