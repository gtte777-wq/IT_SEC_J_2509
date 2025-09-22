function sum() {
    console.log("1 + 2 = 3");
}
sum();
sum();
sum();

function IntroMe() {
    console.log("저는 홍길동입니다. 언제나 환영합니다.")
}
IntroMe();
IntroMe();

function subtract() {
    console.log("2 - 1 = 1");
}

subtract();
subtract();
subtract();
subtract();
subtract();

function sum2(a:number,b:number) {
    console.log(a + b);
    return a + b;
}
sum2(3, 5);
sum2(6, 1);
let data = sum2(10, 20);
console.log(`data : ${data}`);

/*
* 숫자 정렬 함수
* @Parm array2 number[]. 숫자 배열
* @return 정렬된 숫자 배열
*/

let array2 = [3, 5, 1, 4, 2, 8, 7, 6, 10, 9, 15, 12, 11, 14, 13];

function number_sort(array2: number[]) {
for (let i = 0; i < array2.length; i++) {
    for (let j = i+1; j < array2.length; j++) {
        try {
            if(array2[i] > array2[j]) {
                let temp = array2[i];
                array2[i] = array2[j];
                array2[j] = temp;
        }   
        }catch (error: any) {
       
        }
    }
}
    return array2
}

array2 = number_sort(array2);
console.log(array2);

let array3 = [3, 5, 1, 4, 2, 8, 7, 6, 10, 9, 15, 12, 11, 14, 13, 20, 18, 16, 19, 17, 25, 22, 21, 24, 23, 30, 28, 26, 29, 27];
array3 = number_sort(array3);
console.log(array3);

