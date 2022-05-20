let a= 8;
let b= 12;
let c= 4;
 

console.log(a+"x^2 + " + b + "x +" +c + "= 0 ");

let discriminator = Math.sqrt(Math.pow(b,2)-4*a*c);
let root1= (-b+ discriminator)/2*a;
let root2= (-b- discriminator)/2*a;
let output= "root of the above equation is=  root1: " +root1 + " root2:"+ root2;
console.log(output);