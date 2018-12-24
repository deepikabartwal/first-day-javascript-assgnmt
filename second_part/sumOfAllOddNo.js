let initialLimit = 5;
let finalLimit= 45;
let sum = 0;

for(let index=initialLimit;index<=finalLimit;index++){
  if(index%2!=0){
    sum = sum+index;
  }
}
console.log(sum);
