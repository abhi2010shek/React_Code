let arr = [45, 23, 21];
//console.log(arr);
// map method
let a=arr.map((value, index, array)=>{
  console.log(value, index, array);
  return value+1;
})
console.log(a);

// Array Filter method
let arr2 = [45,23,21,0,3,5];
let a2=arr2.filter((a)=>{
  return a<10;
})
console.log(a2);


let brr = [1,2];
let crr = [...brr, 3,4];
console.log(crr);

// Reduce Method
let arr3 = [1,2,3,5,2,1];
let newArr=arr3.reduce((h1,h2)=>{
  return h1+h2;
})
console.log(newArr);

// Reduce mathod another way
const reduce_func = (h1,h2)=>{
  return h1+h2
}
let c1 = arr3.reduce(reduce_func);
console.log(c1);
