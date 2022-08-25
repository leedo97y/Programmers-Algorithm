// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(str) {
  let ans = [];

  let s = str.split("");
  let half = s.slice(0, str.length / 2);
  let another = s.slice(str.length / 2, str.length).reverse();

  for (let i = 0; i < half.length; i++) {
    if (half[i] === another[i]) {
      ans.push("Same");
    } else if (half[i] !== another[i]) {
      ans.push("Different");
    }
    //console.log(half[i], another[i]);
  }

  //console.log(another);
  return String(ans.join("\n"));
}

// 실행 혹은 제출을 위한 코드입니다. 지우거나 수정하지 말아주세요.
solution("abcdba");
solution("easddsae");
