// https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
    var answer =  strings.sort((a, b) => {
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;
        if (a[n] === b[n]) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        }
    })
    return answer;
}

/* 간단하지만 오래 걸리는 코드 
function solution(strings, n) {
  
    return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}
*/
