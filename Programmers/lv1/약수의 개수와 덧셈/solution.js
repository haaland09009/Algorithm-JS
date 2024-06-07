// https://school.programmers.co.kr/learn/courses/30/lessons/77884
function solution(left, right) {
    var answer = 0;
    
    for (let i=left; i<=right; i++) {
        if (countArr(i) % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
        }
    }
    return answer;
}

function countArr(num) {
    
    let cnt = 0;
    
    for (let i=num; i>=1; i--) {
        if (num % i == 0) {
            cnt++;
        }
    }
    
    return cnt;
}
