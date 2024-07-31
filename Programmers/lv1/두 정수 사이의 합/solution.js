// https://school.programmers.co.kr/learn/courses/30/lessons/12912
function solution(a, b) {
    var answer = 0;
    
    var left = (a <= b) ? a : b;
    var right = (a == left) ? b : a;
    
    for (var i=left; i<=right; i++) {
        answer += i;
    }
    
    
    return answer;
}

/*
function solution(a, b) {
    var answer = 0;
    
    var a1 = Math.min(a, b);
    var a2 = Math.max(a, b);
    
    for (let i=a1; i<=a2; i++) {
        answer += i;
    }
    return answer;
}
*/
