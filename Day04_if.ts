// node Day04_if.ts

let a = 1;
if(a>0){
    console.log(`a는 0보다 큽니다`);
}else{
    console.log(`a는 0보다 작아요`);
}

let user_input = 1234;
let door_password = 1234;
if(user_input == door_password){
    console.log(`문이 열렸습니다`);
}else{
    console.log(`비밀번호가 틀렸습니다`);
}

if(false){
    console.log("조건이 true일때만 여기가 실행됩니다.")
}else{
    console.log("조건이 false일때는 여기가 실행됩니다.")
}
console.log("if문이 끝났습니다.")

if(user_input == door_password){
    console.log(`비밀번호 OK`);
}
if(user_input != door_password){
    console.log(`비밀번호 틀림`);
}

if(false){
    console.log("조건이 true일때 여기가 실행되요.")
}
else if(true){
    console.log("if가 조건이 안맞아서 else if가 실행 됬어요.")
}else{
    console.log("else if가 조건이 안맞아서 else가 실행됬어요.")
}

let score = 60;
if(score >= 90){
    console.log("당신의 학점은 A학점입니다.");
}
else if(score >= 80&& score < 90){
    console.log("당신의 학점은 B학점입니다.");
}
else if(score >= 70 && score < 80){
    console.log("당신의 학점은 C학점입니다.");
}
else if(score >= 60 && score < 70){
    console.log("당신의 학점은 D학점입니다.");
}
else{
    console.log("당신의 학점은 F학점입니다.");
}