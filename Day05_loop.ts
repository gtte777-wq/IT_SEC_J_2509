//node Day05_loop.ts
for (let idx = 0; idx < 3; idx++) {
    console.log(`idx : ${idx}`);
}

let array1 = ["고양이", "멧돼지", "뱀"];
for (let item of array1) {
    //console.log(`item: ${item}`);
}
array1.forEach((item) => {
    //console.log(`item: ${item}`);
});

for (let idx = 2; idx <= 9; idx++) { // idx= idx+1
    for (let idx1 = 1; idx1 <= 19; idx1++) {
    console.log(`${idx} * ${idx1} = ${idx * idx1}`);
    }
}
