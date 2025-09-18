// node Day04.ts
let a:number= 1;
let b: string = "2";
let sum:number = 0;
//sum= a+b;
console.log(`sum: ${sum}`);

//let array1 = [1,2,3];
let array1: number[]= [1,2,3];
array1 [0] = 5;
array1 = [5];
console.log(`array1[0]: ${array1[0]}`);
console.log(`array1 : ${array1}`);

let jsObject = {a : 1 , b : 2}
console.log(`jsObject:`, jsObject);
console.log(`jsObject.a : ` , jsObject.a);
console.log(`jsObject.b : ` , jsObject.b); 

let js1:any;
js1 = 1
js1 = "1"
js1 = {}
js1 = []
js1 = true
js1 = null
js1 = undefined
js1 = function(){}
js1 = Symbol()
js1 = BigInt(1)
js1 = 1n
js1 = 1.1
js1 = 1e10
js1 = 0b101
js1 = 0o10
js1 = 0x1F

