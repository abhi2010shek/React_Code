function fun(a,b){
  return 1+ (a+b)/2;
}
let n = fun(3,4);
console.log(Math.round(n));


const hello=(x,y)=>{
  console.log("Hi");
  return x+y;
}

console.log(hello(2,3));

let g = function(){
  console.log("New Way");
}

g();

let g1 = ()=>{
  console.log("Arrow function");
}
g1();

let g2 = ()=> console.log("This way also arrow function");
g2();

let g3 = ()=> {return"This way also arrow function"};
console.log(g3());

let g4 = ()=> "This way also arrow function";
console.log(g4());

setTimeout(function(){
  console.log("Set time out function");
},2000);

setTimeout(()=>{
  console.log("Set time out function");
},2000);

let sum = function(a,b){
  return a+b;
}

console.log(sum(25,25));

let sum1 =(a,b)=>{
  return a+b;
}

console.log(sum1(25,25));

let sum2 =(a,b)=>a+b;

console.log(sum2(25,25));

let doub =a=>a*2;
console.log(doub(2));