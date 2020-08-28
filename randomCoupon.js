const readline = require('readline-sync');
let input = readline.question("Enter size of the coupon number?");
let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',0,1,2,3,4,5,6,7,8,9]
let coupon = '';
let random = Math.floor(Math.random()* input);
 1
while(random > 0){
  coupon += letters[Math.floor(random % letters.length)];
  random = Math.floor(random/letters.length)
  console.log(random);
}
console.log(coupon);

 
