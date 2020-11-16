/*
 예를들어 1 + 1  = 2 계산한 뒤 결과값 저장 
 전에 계산했던 결과값이랑 다시 더하거나 빼고 2 + 1 = 3 결과값 저장 
 이전버튼 클릭 시에 전에 나왔던값 2가 나오고 다시 이전 클릭 시 처음인 0이 나와야합니다.
 다음버튼 클릭 시 2가 디시 클릭 시 3이 나오도록 합니다.
*/

let prev = document.getElementById("pre");
let next = document.getElementById("next");
// let pre = []; // 이전버튼을 눌렸을 때 nex배열의 마지막인덱스부터 하나씩 저장되어지는 배열
let nex = [0]; // 처음에 값을 입력하고 계산하면 결과값이 순서대로 저장하는배열
let num1;
let num2;
let calcu;
let result;
let i = 1;
function cal() {
  num1 = document.getElementById("num1");
  num2 = document.getElementById("num2");
  calcu = document.getElementById("calcu").value;
  result = document.getElementById("result");
  console.log(`${num1}  : ${num2}`);
  if (nex[nex.length - i + 1]) {
    console.log("있음.");
    nex = nex.slice(0, nex.length - i + 1);
  }
  i = 1;
  switch (calcu) {
    case "+":
      // 더하기
      let sum = Number(num1.value) + Number(num2.value);
      console.log(sum);
      result.textContent = sum;
      num1.readOnly = true; //결과값을 첫번째 input의 value로 넣어주고 수정하지못하도록 합니다.
      num1.value = sum;
      num2.value = "";
      num2.focus();
      nex.push(sum); // nex 배열에 연산한 결과 값을 저장
      prev.disabled = false;
      break;
    default:
      // 빼기
      let sub = Number(num1.value) - Number(num2.value);
      console.log(sub);
      result.textContent = sub;
      num1.readOnly = true; //결과값을 첫번째 input의 value로 넣어주고 수정하지못하도록 합니다.
      num1.value = sub;
      num2.value = "";
      num2.focus();
      nex.push(sub); // nex 배열에 연산한 결과 값을 저장
      prev.disabled = false;
      break;
  }
}

//이전의 결과값
prev.addEventListener("click", () => {
  if (nex.length - i > 0) {
    console.log("이전");
    next.disabled = false; // 처음에는 결과값이 없기때문에 버튼을 누르지 못하도록 했습니다.
    // pre.push(nex.pop()); //결과값은 순서대로 nex 배열에 저장 되었기때문에 이전버튼을 누르면 마지막인덱스값은 pre 배열에 저장됩니다.
    num1.value = nex[nex.length - ++i]; // nex 배열의 저장되어있는 마지막 값이 브라우저에 표시됩니디.
    result.textContent = num1.value; // nex 배열의 저장되어있는 마지막 값이 브라우저에 표시됩니디.
    // nex 배열의 값이 없을 때
    // if (nex.length === 0) {
    //   result.textContent = "0";
    //   prev.disabled = true; // 이전의 값이 없기때문에 버튼을 비활성화 해줍니다.
    //   num1.readOnly = false; // 연산을 할 수 있도록 readOnly를 false로 바꿔줍니다.
    //   num1.value = "";
    // }
  }
  console.log(nex);
  // console.log(pre);
});

//다음의 결과값
next.addEventListener("click", () => {
  if (i > 1) {
    console.log("다음");
    prev.disabled = false; // 다음버튼을 눌렀을 때 이전버튼을 활성화를 해줍니다.
    // nex.push(pre.pop()); // pre배열에 마지막 결과값부터 nex배열에 순서대로 저장합니다.
    num1.value = nex[nex.length - --i]; // nex 배열의 저장되어있는 마지막 값이 브라우저에 표시됩니디.
    result.textContent = num1.value; // nex 배열의 저장되어있는 마지막 값이 브라우저에 표시됩니디.
    num1.readOnly = true;
    //pre 배열의 값이 없을 때
    // if (pre.length === 0) {
    //   next.disabled = true; // 다음버튼 비활성화
    //   num1.readOnly = true;
    //   num1.value = nex[nex.length - 1];
    // }
  }
  console.log(nex);
  // console.log(pre);
});
