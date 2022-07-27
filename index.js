let paragraph = document.querySelector("p")
let buttonStart = document.querySelector(".buttonStart");
let input = document.querySelector("input");
let strike2 = document.querySelector(".strike2");
let ball2 = document.querySelector(".ball2");
let table1 = document.querySelector(".table1");
let table2 = document.querySelector(".table2");
let table3 = document.querySelector(".table3");
let table4 = document.querySelector(".table4");
let table5 = document.querySelector(".table5");
let table6 = document.querySelector(".table6");
let table7 = document.querySelector(".table7");
let table8 = document.querySelector(".table8");
let table9 = document.querySelector(".table9");
let table10 = document.querySelector(".table10");
let digit = "";
let alreadyExist = [];
let strikeNum = 0;
let ballNum = 0;
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let tableArr = [table1, table2, table3, table4, table5, table6, table7, table8, table9, table10]


buttonStart.addEventListener("click", function onClick() {
        for (let i = 0; i < 3; i++) {
            let randomNumber = Math.floor(Math.random() * 10)
            if (alreadyExist.includes(randomNumber)) {
                i--;
            } else {
                alreadyExist.push(randomNumber);
                digit += arr[randomNumber];
            }
        }
        paragraph.textContent = "숫자를 맞춰보세용";
    }
)

let enterCount = 0;

input.addEventListener("keypress", function (event) {


    if (event.key === 'Enter') {
        console.log(enterCount);
        if (enterCount >= 10) {
            alert("게임 종료!")
            return 0;
        }
        enterCount += 1;

        let inputValue = input.value;
        if (input.value.length !== 3) {
            alert("세자리 숫자를 입력해주세요.")
        }
        for (let i = 0; i < 3; i++) {
            if (digit[i] === inputValue[i]) {
                strikeNum += 1;
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (digit[j] === inputValue[i]) {
                    ballNum += 1;
                }
            }
        }
        strike2.textContent = "스트라이크: " + strikeNum + "개";
        ball2.textContent = "볼: " + (ballNum - strikeNum) + "개";

        for (let i = 0; i < 10; i++) {
            if (enterCount === i + 1) {
                tableArr[i].childNodes[3].textContent = inputValue;
                tableArr[i].childNodes[5].textContent = strikeNum;
                tableArr[i].childNodes[7].textContent = ballNum - strikeNum;
            }
        }
        if(strikeNum===3){
            alert("정답입니다!!!")
        }
    }
    strikeNum = 0;
    ballNum = 0;

})


let example;
let alreadyOut = [];

for (let i = 0; i < 10; i++) {
    example = Math.floor(Math.random() * 10);
    if (alreadyOut.includes(example)) {
        i--;
    } else {
        alreadyOut.push(example)
        console.log(example)
    }
}

