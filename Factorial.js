function factorial(n) {
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    answer = i * answer;
  }
  return answer;
}

console.log("반복문 factorial : ", factorial(5));

function newFactorial(n) {
  if (n < 1) return 1;
  return n * newFactorial(n - 1);
}

console.log("재귀함수 factorial : ", newFactorial(5));
