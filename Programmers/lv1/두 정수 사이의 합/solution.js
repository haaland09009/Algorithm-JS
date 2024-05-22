// https://school.programmers.co.kr/learn/courses/30/lessons/12912
function solution(a, b) {
    var answer = 0;
    
    var a1 = Math.min(a, b);
    var a2 = Math.max(a, b);
    
    for (let i=a1; i<=a2; i++) {
        answer += i;
    }
    return answer;
}
